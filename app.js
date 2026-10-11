// Számvitel ZH Mestertréner - Fő Logika és Interaktív Motor

// Állapotkezelés
const APP_STATE = {
  mode: "practice", // 'practice' | 'exam'
  theoryAnswers: {},
  classificationAnswers: {},
  transactionAnswers: {},
  calculationAnswers: {},
  exam: {
    active: false,
    startTime: null,
    durationSeconds: 45 * 60, // 45 perc
    timerInterval: null,
    items: [],
    userAnswers: {},
    result: null
  }
};

const STORAGE_KEY = "SZAMVITEL_ZH_STATE_V1";

// Inicializálás
document.addEventListener("DOMContentLoaded", () => {
  loadStateFromStorage();
  initFlashcards();
  renderTheoryQuestions();
  renderClassificationGrid("all");
  renderTransactionsList();
  renderCalculationsList();
  updateGlobalStats();
});

// Perzisztencia (localStorage)
function saveStateToStorage() {
  try {
    const toSave = {
      theoryAnswers: APP_STATE.theoryAnswers,
      classificationAnswers: APP_STATE.classificationAnswers,
      transactionAnswers: APP_STATE.transactionAnswers,
      calculationAnswers: APP_STATE.calculationAnswers
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    console.warn("Nem sikerült menteni a localStorage-ba:", e);
  }
}

function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      APP_STATE.theoryAnswers = parsed.theoryAnswers || {};
      APP_STATE.classificationAnswers = parsed.classificationAnswers || {};
      APP_STATE.transactionAnswers = parsed.transactionAnswers || {};
      APP_STATE.calculationAnswers = parsed.calculationAnswers || {};
    }
  } catch (e) {
    console.warn("Nem sikerült betölteni a localStorage-ból:", e);
  }
}

function resetAllProgress() {
  if (confirm("Biztosan törölni szeretnéd az eddigi válaszaidat és újra elkezdenéd a felkészülést?")) {
    APP_STATE.theoryAnswers = {};
    APP_STATE.classificationAnswers = {};
    APP_STATE.transactionAnswers = {};
    APP_STATE.calculationAnswers = {};
    localStorage.removeItem(STORAGE_KEY);
    renderTheoryQuestions();
    renderClassificationGrid("all");
    renderTransactionsList();
    renderCalculationsList();
    updateGlobalStats();
  }
}

// Módváltás (Gyakorló vs. ZH Szimuláció)
function setAppMode(mode) {
  APP_STATE.mode = mode;
  document.getElementById("btnModePractice").classList.toggle("active", mode === "practice");
  document.getElementById("btnModeExam").classList.toggle("active", mode === "exam");

  if (mode === "exam") {
    switchTab("tab-exam");
    if (!APP_STATE.exam.active && !APP_STATE.exam.result) {
      startExamSession();
    }
  }
}

// Fülváltás
function switchTab(tabId) {
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabId);
  });
  document.querySelectorAll(".tab-panel").forEach(panel => {
    panel.classList.toggle("active", panel.id === tabId);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Puskasáv Drawer Modal
function toggleDrawer(open) {
  const backdrop = document.getElementById("drawerBackdrop");
  if (open) {
    backdrop.classList.add("open");
  } else {
    backdrop.classList.remove("open");
  }
}

function handleBackdropClick(e) {
  if (e.target.id === "drawerBackdrop") {
    toggleDrawer(false);
  }
}

// 1. MODUL: ELMÉLET & CSAPDÁK
function initFlashcards() {
  const container = document.getElementById("flashcardsContainer");
  container.innerHTML = SZAMVITEL_DATA.flashcards.map((f, i) => `
    <div style="background-color: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1rem;">
      <h4 style="color: var(--accent-primary); font-size: 0.95rem; margin-bottom: 0.35rem;">#${i + 1} ${f.topic}</h4>
      <div style="font-size: 0.8rem; color: #fbbf24; margin-bottom: 0.45rem; font-weight: 600;">Kulcsszavak: ${f.keywords}</div>
      <p style="font-size: 0.85rem; color: #cbd5e1; line-height: 1.45;">${f.summary}</p>
    </div>
  `).join("");
}

function toggleFlashcards() {
  const container = document.getElementById("flashcardsContainer");
  const btn = document.getElementById("flashcardToggleBtn");
  const isHidden = container.style.display === "none";
  container.style.display = isHidden ? "grid" : "none";
  btn.textContent = isHidden ? "Kártyák összecsukása" : "Kártyák megnyitása";
}

function renderTheoryQuestions() {
  const container = document.getElementById("theoryQuestionsList");
  container.innerHTML = SZAMVITEL_DATA.theoryQuestions.map((q, idx) => {
    const userState = APP_STATE.theoryAnswers[q.id];
    let cardClass = "learning-card";
    if (userState) {
      cardClass += userState.isCorrect ? " answered-correct" : " answered-wrong";
    }

    return `
      <div class="${cardClass}" id="card-${q.id}">
        <div class="card-top">
          <span class="card-index">${idx + 1}. kérdés / ${SZAMVITEL_DATA.theoryQuestions.length}</span>
          ${userState ? `<span style="font-weight:700; color: ${userState.isCorrect ? 'var(--success)' : 'var(--danger)'}">
            ${userState.isCorrect ? '✓ HELYES' : '✗ HIBÁS'}</span>` : ''}
        </div>
        <div class="card-question">${q.question}</div>
        
        <div class="tf-actions">
          <button type="button" class="btn-tf ${userState && userState.answer === true ? 'selected-true' : ''}"
            onclick="answerTheoryQuestion('${q.id}', true)">
            <span>✓</span> IGAZ
          </button>
          <button type="button" class="btn-tf ${userState && userState.answer === false ? 'selected-false' : ''}"
            onclick="answerTheoryQuestion('${q.id}', false)">
            <span>✗</span> HAMIS
          </button>
        </div>

        ${userState ? `
          <div class="feedback-box ${userState.isCorrect ? 'correct' : 'wrong'}">
            <strong>${userState.isCorrect ? 'Helyes válasz!' : 'Nem megfelelő válasz!'}</strong>
            <div>${q.explanation}</div>
          </div>
        ` : ''}
      </div>
    `;
  }).join("");
}

function answerTheoryQuestion(id, chosen) {
  const q = SZAMVITEL_DATA.theoryQuestions.find(item => item.id === id);
  if (!q) return;

  const isCorrect = chosen === q.isTrue;
  APP_STATE.theoryAnswers[id] = { answer: chosen, isCorrect };
  saveStateToStorage();
  renderTheoryQuestions();
  updateGlobalStats();
}

// 2. MODUL: MÉRLEGTÉTEL-BESOROLÓ & TUDÁSTÁR
let currentClassificationFilter = "all";
let currentKBFilter = "all";
const expandedDecisionTrees = new Set();

function toggleKnowledgeBase() {
  const section = document.getElementById("knowledgeBaseSection");
  const btn = document.getElementById("btnToggleKB");
  const isHidden = section.style.display === "none";
  section.style.display = isHidden ? "block" : "none";
  btn.innerHTML = isHidden ? "<span>❌</span> Tudástár Bezárása" : "<span>📚</span> Mérleg Tudástár (Tananyag 0-ról)";
  if (isHidden) {
    renderBalanceKnowledgeBase(currentKBFilter);
  }
}

function filterKB(filterType) {
  currentKBFilter = filterType;
  document.getElementById("kbFilterAll").classList.toggle("active", filterType === "all");
  document.getElementById("kbFilterAssets").classList.toggle("active", filterType === "eszkoz");
  document.getElementById("kbFilterLiab").classList.toggle("active", filterType === "forras");
  renderBalanceKnowledgeBase(filterType);
}

function renderBalanceKnowledgeBase(filter = "all") {
  const container = document.getElementById("knowledgeBaseCardsGrid");
  if (!container) return;

  let categories = SZAMVITEL_DATA.balanceCategories;
  if (filter === "eszkoz") {
    categories = categories.filter(c => ["IMM", "TARGYI", "BPU", "FORGO", "AIE"].includes(c.code));
  } else if (filter === "forras") {
    categories = categories.filter(c => ["TOKE", "CELTART", "HLK", "RLK", "PIE"].includes(c.code));
  }

  container.innerHTML = categories.map(cat => `
    <div class="kb-card" id="kb-card-${cat.code}">
      <div class="kb-card-header">
        <span class="cheat-badge" style="font-size:0.9rem; padding:0.3rem 0.6rem;">${cat.badge}</span>
        <h4 style="font-size: 1.1rem; color: #fff; margin:0;">${cat.name}</h4>
      </div>
      <div class="kb-side-pill">${cat.side}</div>
      <p class="kb-summary">${cat.summary}</p>

      <div style="margin-bottom: 0.75rem;">
        <strong style="color: #93c5fd; font-size: 0.8rem; text-transform: uppercase;">Aranyszabályok a felismeréshez:</strong>
        <ul class="kb-rules-list">
          ${cat.rules.map(r => `<li>${r}</li>`).join("")}
        </ul>
      </div>

      <div style="margin-bottom: 0.75rem;">
        <strong style="color: #6ee7b7; font-size: 0.8rem; text-transform: uppercase;">Mérlegsorok és tipikus példák:</strong>
        <ul class="kb-lines-list">
          ${cat.exactLines.map(l => `<li>${l}</li>`).join("")}
        </ul>
      </div>

      ${cat.traps && cat.traps.length > 0 ? `
        <div class="kb-traps-box">
          <strong style="color: #fca5a5; font-size: 0.8rem; text-transform: uppercase;">Tipikus vizsgacsapdák:</strong>
          <ul style="padding-left: 1rem; margin-top: 0.25rem;">
            ${cat.traps.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      ` : ''}
    </div>
  `).join("");
}

function scrollToKB(categoryCode) {
  const section = document.getElementById("knowledgeBaseSection");
  if (section.style.display === "none") {
    toggleKnowledgeBase();
  }
  filterKB("all");
  setTimeout(() => {
    const el = document.getElementById(`kb-card-${categoryCode}`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.classList.add("highlight-pulse");
      setTimeout(() => el.classList.remove("highlight-pulse"), 2500);
    }
  }, 100);
}

function toggleDecisionTree(itemId) {
  if (expandedDecisionTrees.has(itemId)) {
    expandedDecisionTrees.delete(itemId);
  } else {
    expandedDecisionTrees.add(itemId);
  }
  renderClassificationGrid(currentClassificationFilter);
}

function filterClassification(filter) {
  currentClassificationFilter = filter;
  renderClassificationGrid(filter);
}

function renderClassificationGrid(filter = "all") {
  const container = document.getElementById("classificationGrid");
  
  let items = SZAMVITEL_DATA.balanceItems;
  if (filter === "pending") {
    items = items.filter(item => !APP_STATE.classificationAnswers[item.id]);
  } else if (filter === "wrong") {
    items = items.filter(item => APP_STATE.classificationAnswers[item.id] && !APP_STATE.classificationAnswers[item.id].isCorrect);
  }

  if (items.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: var(--radius-lg);">
        <h3 style="color: var(--success); margin-bottom: 0.5rem;">Minden tétel feldolgozva ebben a szűrésben! 🎉</h3>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Válts az „Összes” szűrőre az ismétléshez.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = items.map(item => {
    const userState = APP_STATE.classificationAnswers[item.id];
    const isDTHidden = !expandedDecisionTrees.has(item.id);
    const catObj = SZAMVITEL_DATA.balanceCategories.find(c => c.code === item.category);

    let cardClass = "learning-card";
    if (userState) {
      cardClass += userState.isCorrect ? " answered-correct" : " answered-wrong";
    }

    return `
      <div class="${cardClass}" id="cat-card-${item.id}">
        <div class="card-top">
          <span class="card-index">#${item.id}</span>
          ${userState ? `<span style="font-weight:700; color: ${userState.isCorrect ? 'var(--success)' : 'var(--danger)'}">
            ${userState.isCorrect ? '✓ HELYES' : '✗ HIBÁS'}</span>` : ''}
        </div>
        
        <div class="card-question" style="min-height: 44px; margin-bottom: 0.5rem;">
          ${item.name}
        </div>

        <!-- 3-LÉPÉSES DÖNTÉSI ÚTMUTATÓ 0-RÓL INDULÓKNAK -->
        <div style="margin-bottom: 0.85rem;">
          <button type="button" class="btn-decision-toggle" onclick="toggleDecisionTree(${item.id})">
            <span>💡</span> ${isDTHidden ? 'Hogyan döntsd el? (3 lépéses gondolatmenet)' : 'Gondolatmenet elrejtése'}
          </button>
          
          <div class="decision-tree-panel" style="display: ${isDTHidden ? 'none' : 'block'};">
            <strong style="color: #fbbf24; font-size: 0.8rem; display:block; margin-bottom: 0.35rem;">Logikai levezetés:</strong>
            <ul style="padding-left: 1.15rem; font-size: 0.825rem; color: #cbd5e1; line-height: 1.5;">
              ${item.decisionTree ? item.decisionTree.map(step => `<li>${step}</li>`).join("") : ''}
            </ul>
          </div>
        </div>

        <!-- 10 FŐCSOPORT GOMB -->
        <div class="category-pill-grid">
          ${SZAMVITEL_DATA.balanceCategories.map(cat => {
            let btnClass = "cat-btn";
            if (userState) {
              if (cat.code === item.category) {
                btnClass += " correct-choice";
              } else if (cat.code === userState.selected) {
                btnClass += " wrong-choice";
              }
            }
            return `
              <button type="button" class="${btnClass}" onclick="answerClassificationItem(${item.id}, '${cat.code}')" title="${cat.name} (${cat.side})">
                ${cat.code}
              </button>
            `;
          }).join("")}
        </div>

        <!-- GAZDAG, MÉLY VISSZAJELZŐ DOBOZ -->
        ${userState ? `
          <div class="feedback-box ${userState.isCorrect ? 'correct' : 'wrong'}" style="margin-top: 1rem;">
            <div style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.4rem; display: flex; justify-content: space-between; align-items: center;">
              <span>Helyes: ${catObj ? catObj.name : item.category} (${catObj ? catObj.badge : item.category})</span>
            </div>
            
            <div style="font-size: 0.85rem; line-height: 1.5; margin-bottom: 0.5rem; color: #f1f5f9;">
              <strong>Miért ide tartozik?</strong> ${item.detailedWhy || item.note}
            </div>

            ${item.confusedWith ? `
              <div class="kb-confused-alert">
                <span>⚠️</span> <div><strong>Gyakori hiba:</strong> ${item.confusedWith}</div>
              </div>
            ` : ''}

            ${item.trapAlert ? `
              <div class="kb-trap-alert">
                ${item.trapAlert}
              </div>
            ` : ''}

            <div style="margin-top: 0.75rem; text-align: right;">
              <button type="button" class="btn-kb-link" onclick="scrollToKB('${item.category}')">
                📖 Nézd meg a(z) ${catObj ? catObj.name : ''} szabályait a Tudástárban &rarr;
              </button>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }).join("");
}

function answerClassificationItem(id, selectedCategory) {
  const item = SZAMVITEL_DATA.balanceItems.find(i => i.id === id);
  if (!item) return;

  const isCorrect = selectedCategory === item.category;
  APP_STATE.classificationAnswers[id] = { selected: selectedCategory, isCorrect };
  saveStateToStorage();
  renderClassificationGrid(currentClassificationFilter);
  updateGlobalStats();
}

// 3. MODUL: GAZDASÁGI ESEMÉNYEK
function renderTransactionsList() {
  const container = document.getElementById("transactionsList");
  const typeOptions = [
    { code: "bevonas", label: "1. Eszközök bevonása (A + x = P + x)" },
    { code: "kivonas", label: "2. Eszközök kivonása (A – x = P – x)" },
    { code: "korforgas", label: "3. Eszközök körforgása (A + x – x = P)" },
    { code: "forrasvaltozas", label: "4. Források változása (A = P + x – x)" },
    { code: "korforgas_bevonas", label: "Összetett: Körforgás + bevonás (nyereség)" },
    { code: "korforgas_kivonas", label: "Összetett: Körforgás + kivonás (veszteség)" }
  ];

  container.innerHTML = SZAMVITEL_DATA.transactions.map((tx, idx) => {
    const userState = APP_STATE.transactionAnswers[tx.id];
    let cardClass = "learning-card";
    if (userState) {
      cardClass += userState.isCorrect ? " answered-correct" : " answered-wrong";
    }

    return `
      <div class="${cardClass}" id="tx-card-${tx.id}">
        <div class="card-top">
          <span class="card-index">${idx + 1}. gazdasági esemény / ${SZAMVITEL_DATA.transactions.length}</span>
          ${userState ? `<span style="font-weight:700; color: ${userState.isCorrect ? 'var(--success)' : 'var(--danger)'}">
            ${userState.isCorrect ? '✓ HELYES' : '✗ HIBÁS'}</span>` : ''}
        </div>

        <div class="tx-scenario">
          <h4>${tx.event}</h4>
        </div>

        <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; font-weight: 600;">
          Válaszd ki az esemény típusát:
        </div>

        <div class="tx-options-grid">
          ${typeOptions.map(opt => {
            let optClass = "tx-option-btn";
            if (userState) {
              if (opt.code === tx.type) {
                optClass += " correct";
              } else if (opt.code === userState.selected) {
                optClass += " wrong";
              }
            }
            return `
              <button type="button" class="${optClass}" onclick="answerTransaction('${tx.id}', '${opt.code}')">
                ${opt.label}
              </button>
            `;
          }).join("")}
        </div>

        ${userState ? `
          <div class="feedback-box ${userState.isCorrect ? 'correct' : 'wrong'}">
            <strong>Helyes típus: ${tx.typeName} | Főösszeg változása: ${tx.totalEffect === '0' ? 'Változatlan (0)' : (tx.totalEffect === '+' ? 'Növekszik (+)' : 'Csökken (–)')}</strong>
            <div style="margin-top: 0.25rem;"><strong>Érintett tételek:</strong> <code>${tx.accounts}</code></div>
            <div style="margin-top: 0.25rem;">${tx.explanation}</div>
          </div>
        ` : ''}
      </div>
    `;
  }).join("");
}

function answerTransaction(id, selectedType) {
  const tx = SZAMVITEL_DATA.transactions.find(t => t.id === id);
  if (!tx) return;

  const isCorrect = selectedType === tx.type;
  APP_STATE.transactionAnswers[id] = { selected: selectedType, isCorrect };
  saveStateToStorage();
  renderTransactionsList();
  updateGlobalStats();
}

// 4. MODUL: SZÁMÍTÁSOK & MÉRLEGEK
function renderCalculationsList() {
  const container = document.getElementById("calculationsList");

  container.innerHTML = SZAMVITEL_DATA.calculationTasks.map(task => {
    const isCalc1 = task.id === "calc-1";

    if (isCalc1) {
      return renderCalc1Card(task);
    }

    return `
      <div class="calc-card" id="calc-card-${task.id}">
        <div class="calc-title">${task.title}</div>
        <div class="calc-desc">${task.description} ${task.info ? `<br><br><span style="color:#e2e8f0;">${task.info}</span>` : ''}</div>

        <div class="table-responsive">
          <table class="calc-table">
            <thead>
              <tr>
                <th>Mérleg / Eredmény tétel megnevezése</th>
                <th style="width: 200px;">Számított érték (E Ft)</th>
                <th>Állapot</th>
              </tr>
            </thead>
            <tbody>
              ${task.inputs.map(input => {
                const savedVal = APP_STATE.calculationAnswers[input.id] || "";
                return `
                  <tr>
                    <td><strong>${input.label}</strong></td>
                    <td>
                      <input type="number" step="any" class="calc-input" id="input-${input.id}"
                        placeholder="E Ft" value="${savedVal}"
                        oninput="saveCalcInput('${input.id}', this.value)">
                    </td>
                    <td id="status-${input.id}">
                      <span style="color: var(--text-dim); font-size: 0.8rem;">Még nincs ellenőrizve</span>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>

        <div class="table-actions">
          <button type="button" class="btn-primary" onclick="checkTaskCalculation('${task.id}')">
            Ellenőrzés
          </button>
          <button type="button" class="btn-secondary" onclick="toggleTaskHint('${task.id}')">
            Megoldás & Levezetés Megtekintése
          </button>
        </div>

        <div id="solution-${task.id}" style="display: none; margin-top: 1.25rem; background: var(--bg-surface); padding: 1rem 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-primary);">
          <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem; font-size: 0.95rem;">Lépésről lépésre levezetés:</h4>
          <ul style="font-size: 0.85rem; line-height: 1.6; padding-left: 1.25rem; color: #cbd5e1; margin-bottom: 0.75rem;">
            ${task.inputs.map(i => `<li><strong>${i.label}:</strong> <span style="color:var(--success); font-weight:700;">${i.expected.toLocaleString('hu-HU')} E Ft</span> (${i.hint})</li>`).join("")}
          </ul>
          ${task.lesson ? `<div style="font-size: 0.85rem; color: #fde68a; font-weight: 500;">📌 ${task.lesson}</div>` : ''}
        </div>
      </div>
    `;
  }).join("");
}

function renderCalc1Card(task) {
  return `
    <div class="calc-card" id="calc-card-${task.id}">
      <div class="calc-title">${task.title}</div>
      <div class="calc-desc">${task.description}</div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 1.5rem; margin-bottom: 1.25rem;">
        <!-- Vállalat A -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
          <h4 style="color: #93c5fd; margin-bottom: 0.75rem; font-size: 1rem;">„A” társaság</h4>
          <table class="calc-table">
            <tbody>
              ${task.companyA.inputs.map(input => `
                <tr>
                  <td style="font-size:0.85rem;">${input.label}</td>
                  <td>
                    <input type="number" class="calc-input" id="input-${input.id}"
                      value="${APP_STATE.calculationAnswers[input.id] || ''}"
                      oninput="saveCalcInput('${input.id}', this.value)">
                  </td>
                  <td id="status-${input.id}"></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.5rem;">
            Adott volt: Forgó: 18 000 (Készlet 8 000, Pénz 4 000); Eszközök: 48 000; Saját tőke: 28 800; Rövid köt: 9 600.
          </div>
        </div>

        <!-- Vállalat B -->
        <div style="background: var(--bg-surface); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem;">
          <h4 style="color: #93c5fd; margin-bottom: 0.75rem; font-size: 1rem;">„B” társaság</h4>
          <table class="calc-table">
            <tbody>
              ${task.companyB.inputs.map(input => `
                <tr>
                  <td style="font-size:0.85rem;">${input.label}</td>
                  <td>
                    <input type="number" class="calc-input" id="input-${input.id}"
                      value="${APP_STATE.calculationAnswers[input.id] || ''}"
                      oninput="saveCalcInput('${input.id}', this.value)">
                  </td>
                  <td id="status-${input.id}"></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
          <div style="font-size: 0.8rem; color: var(--text-dim); margin-top: 0.5rem;">
            Adott volt: Befektetett: 20 000; Forgó: 40 000; Saját tőke: 18 000; Hosszú köt: 12 000.
          </div>
        </div>
      </div>

      <div class="table-actions">
        <button type="button" class="btn-primary" onclick="checkTaskCalculation('${task.id}')">
          Ellenőrzés
        </button>
        <button type="button" class="btn-secondary" onclick="toggleTaskHint('${task.id}')">
          Megoldás & Szakmai Elemzés Megtekintése
        </button>
      </div>

      <div id="solution-${task.id}" style="display: none; margin-top: 1.25rem; background: var(--bg-surface); padding: 1.25rem; border-radius: var(--radius-md); border-left: 3px solid var(--accent-primary);">
        <h4 style="color: var(--accent-primary); margin-bottom: 0.5rem; font-size: 0.95rem;">Megoldás és Elemzés:</h4>
        <div style="font-size: 0.85rem; line-height: 1.6; color: #cbd5e1;">
          <p><strong>„A” társaság:</strong> Befektetett eszközök: 30 000 E Ft (arány: 62,5%); Követelések: 6 000 E Ft; Források: 48 000 E Ft; Hosszú lejáratú kötelezettség: 9 600 E Ft. Saját tőke aránya: 60%.<br><em>Értékelés:</em> ${task.companyA.ratios.eval}</p>
          <br>
          <p><strong>„B” társaság:</strong> Eszközök és Források: 60 000 E Ft; Rövid lejáratú köt.: 30 000 E Ft. Befektetett eszköz aránya: 33,3%, Saját tőke aránya: 30%.<br><em>Értékelés:</em> ${task.companyB.ratios.eval}</p>
        </div>
      </div>
    </div>
  `;
}

function saveCalcInput(id, val) {
  APP_STATE.calculationAnswers[id] = val;
  saveStateToStorage();
  updateGlobalStats();
}

function checkTaskCalculation(taskId) {
  const task = SZAMVITEL_DATA.calculationTasks.find(t => t.id === taskId);
  if (!task) return;

  const allInputs = task.id === "calc-1" 
    ? [...task.companyA.inputs, ...task.companyB.inputs]
    : task.inputs;

  let allCorrect = true;

  allInputs.forEach(item => {
    const el = document.getElementById(`input-${item.id}`);
    const statusEl = document.getElementById(`status-${item.id}`);
    if (!el || !statusEl) return;

    const val = parseFloat(el.value);
    const expected = item.expected;

    if (!isNaN(val) && Math.abs(val - expected) < 0.1) {
      el.className = "calc-input valid";
      statusEl.innerHTML = `<span style="color: var(--success); font-weight:700;">✓ Helyes</span>`;
    } else {
      allCorrect = false;
      el.className = "calc-input invalid";
      statusEl.innerHTML = `<span style="color: var(--danger); font-weight:700;">✗ Hibás</span>`;
    }
  });

  if (allCorrect) {
    alert("Kiváló! Minden számítás pontosan helyes ennél a feladatnál! 🎉");
  }
}

function toggleTaskHint(taskId) {
  const el = document.getElementById(`solution-${taskId}`);
  if (el) {
    el.style.display = el.style.display === "none" ? "block" : "none";
  }
}

// 5. MODUL: ÉLES PRÓBA-ZH SZIMULÁTOR
function startExamSession() {
  if (APP_STATE.exam.timerInterval) {
    clearInterval(APP_STATE.exam.timerInterval);
  }

  // 20 feladat összeállítása:
  // 5 elmélet, 6 besorolás, 5 esemény, 4 számítás
  const theorySample = [...SZAMVITEL_DATA.theoryQuestions].sort(() => 0.5 - Math.random()).slice(0, 5);
  const classSample = [...SZAMVITEL_DATA.balanceItems].sort(() => 0.5 - Math.random()).slice(0, 6);
  const txSample = [...SZAMVITEL_DATA.transactions].sort(() => 0.5 - Math.random()).slice(0, 5);
  
  // Számítási tételek kiválogatása a feladatokból
  const calcInputs = [
    { id: "a_befektetett", label: "A. Befektetett eszközök értéke (48 000 összes, 18 000 forgó mellett)", expected: 30000, explanation: "48 000 – 18 000 = 30 000" },
    { id: "c3_adozott", label: "Adózott eredmény (Saját tőke 85 000, jegyzett 70k, tőketartalék 6k, eredm.tartalék 10k, ért.tartalék 2k)", expected: -3000, explanation: "85 000 – 88 000 = -3 000 E Ft veszteség" },
    { id: "c14_uzemi", label: "Üzemi eredmény (Árbevétel 12k, ASTK 1k, egyéb bevétel 400, anyag 4.7k, személyi 2.95k, écs 1.1k, egyéb ráf 250)", expected: 4400, explanation: "12 000 + 1 000 + 400 – 4 700 – 2 950 – 1 100 – 250 = 4 400" },
    { id: "c15_realizalt", label: "Realizált eredmény (1600 db eladva 5 E Ft/db áron, önköltség 3,5 E Ft/db)", expected: 2400, explanation: "1 600 × (5 – 3,5) = 2 400 E Ft" }
  ];

  APP_STATE.exam = {
    active: true,
    startTime: Date.now(),
    durationSeconds: 45 * 60,
    timerInterval: null,
    items: {
      theory: theorySample,
      classification: classSample,
      transactions: txSample,
      calculations: calcInputs
    },
    userAnswers: {},
    result: null
  };

  document.getElementById("examResultContainer").style.display = "none";
  document.getElementById("examActiveContainer").style.display = "block";
  document.getElementById("startExamBtn").textContent = "Újraindítás";

  // Időzítő elindítása
  startExamTimer();
  renderExamQuestions();
}

function startExamTimer() {
  let remaining = APP_STATE.exam.durationSeconds;
  const display = document.getElementById("timerText");

  APP_STATE.exam.timerInterval = setInterval(() => {
    remaining--;
    if (remaining <= 0) {
      clearInterval(APP_STATE.exam.timerInterval);
      alert("Letelt az idő! A rendszer automatikusan beadja a dolgozatot.");
      submitExam();
      return;
    }

    const mins = Math.floor(remaining / 60);
    const secs = remaining % 60;
    display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }, 1000);
}

function renderExamQuestions() {
  const container = document.getElementById("examQuestionsContainer");
  const items = APP_STATE.exam.items;

  let html = `
    <div style="background: var(--bg-surface); padding: 1rem 1.5rem; border-radius: var(--radius-md); margin-bottom: 1rem; border-left: 4px solid var(--accent-primary);">
      <h3 style="font-size: 1.1rem; color: #fff;">I. Rész: Elméleti állítások (Igaz / Hamis)</h3>
    </div>
  `;

  items.theory.forEach((q, idx) => {
    const currentVal = APP_STATE.exam.userAnswers[`th_${q.id}`];
    html += `
      <div class="learning-card" style="margin-bottom: 1rem;">
        <div class="card-question"><strong>${idx + 1}.</strong> ${q.question}</div>
        <div class="tf-actions">
          <button type="button" class="btn-tf ${currentVal === true ? 'selected-true' : ''}" onclick="recordExamAnswer('th_${q.id}', true)">
            <span>✓</span> IGAZ
          </button>
          <button type="button" class="btn-tf ${currentVal === false ? 'selected-false' : ''}" onclick="recordExamAnswer('th_${q.id}', false)">
            <span>✗</span> HAMIS
          </button>
        </div>
      </div>
    `;
  });

  html += `
    <div style="background: var(--bg-surface); padding: 1rem 1.5rem; border-radius: var(--radius-md); margin: 2rem 0 1rem; border-left: 4px solid var(--accent-secondary);">
      <h3 style="font-size: 1.1rem; color: #fff;">II. Rész: Mérlegtétel-besorolás (10 főcsoport)</h3>
    </div>
  `;

  items.classification.forEach((item, idx) => {
    const currentVal = APP_STATE.exam.userAnswers[`cl_${item.id}`];
    html += `
      <div class="learning-card" style="margin-bottom: 1rem;">
        <div class="card-question"><strong>${idx + 1}.</strong> ${item.name}</div>
        <div class="category-pill-grid">
          ${SZAMVITEL_DATA.balanceCategories.map(cat => `
            <button type="button" class="cat-btn ${currentVal === cat.code ? 'active' : ''}" onclick="recordExamAnswer('cl_${item.id}', '${cat.code}')">
              ${cat.code}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  });

  html += `
    <div style="background: var(--bg-surface); padding: 1rem 1.5rem; border-radius: var(--radius-md); margin: 2rem 0 1rem; border-left: 4px solid #8b5cf6;">
      <h3 style="font-size: 1.1rem; color: #fff;">III. Rész: Gazdasági esemény típusa</h3>
    </div>
  `;

  const typeOptions = [
    { code: "bevonas", label: "Eszközök bevonása (A + x = P + x)" },
    { code: "kivonas", label: "Eszközök kivonása (A – x = P – x)" },
    { code: "korforgas", label: "Eszközök körforgása (A + x – x = P)" },
    { code: "forrasvaltozas", label: "Források változása (A = P + x – x)" },
    { code: "korforgas_bevonas", label: "Körforgás + bevonás (nyereség)" },
    { code: "korforgas_kivonas", label: "Körforgás + kivonás (veszteség)" }
  ];

  items.transactions.forEach((tx, idx) => {
    const currentVal = APP_STATE.exam.userAnswers[`tx_${tx.id}`];
    html += `
      <div class="learning-card" style="margin-bottom: 1rem;">
        <div class="tx-scenario"><h4>${idx + 1}. ${tx.event}</h4></div>
        <div class="tx-options-grid">
          ${typeOptions.map(opt => `
            <button type="button" class="tx-option-btn ${currentVal === opt.code ? 'selected' : ''}" onclick="recordExamAnswer('tx_${tx.id}', '${opt.code}')">
              ${opt.label}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  });

  html += `
    <div style="background: var(--bg-surface); padding: 1rem 1.5rem; border-radius: var(--radius-md); margin: 2rem 0 1rem; border-left: 4px solid var(--warning);">
      <h3 style="font-size: 1.1rem; color: #fff;">IV. Rész: Számításos feladatok (E Ft)</h3>
    </div>
  `;

  items.calculations.forEach((c, idx) => {
    const currentVal = APP_STATE.exam.userAnswers[`calc_${c.id}`] || "";
    html += `
      <div class="learning-card" style="margin-bottom: 1rem;">
        <div class="card-question"><strong>${idx + 1}.</strong> ${c.label}</div>
        <div style="max-width: 250px;">
          <input type="number" step="any" class="calc-input" placeholder="E Ft" value="${currentVal}"
            oninput="recordExamAnswer('calc_${c.id}', this.value)">
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function recordExamAnswer(key, val) {
  APP_STATE.exam.userAnswers[key] = val;
  renderExamQuestions();
}

function submitExam() {
  if (APP_STATE.exam.timerInterval) {
    clearInterval(APP_STATE.exam.timerInterval);
  }

  let totalQuestions = 20;
  let correctCount = 0;
  const items = APP_STATE.exam.items;
  const answers = APP_STATE.exam.userAnswers;
  const reviewList = [];

  // 1. Elmélet ellenőrzése (5 db)
  items.theory.forEach(q => {
    const userVal = answers[`th_${q.id}`];
    const isCorrect = userVal === q.isTrue;
    if (isCorrect) correctCount++;
    reviewList.push({
      category: "Elmélet",
      title: q.question,
      userAnswer: userVal === true ? "Igaz" : (userVal === false ? "Hamis" : "Nem válaszolt"),
      expectedAnswer: q.isTrue ? "Igaz" : "Hamis",
      isCorrect,
      explanation: q.explanation
    });
  });

  // 2. Besorolás ellenőrzése (6 db)
  items.classification.forEach(item => {
    const userVal = answers[`cl_${item.id}`];
    const isCorrect = userVal === item.category;
    if (isCorrect) correctCount++;
    reviewList.push({
      category: "Besorolás",
      title: item.name,
      userAnswer: userVal || "Nem válaszolt",
      expectedAnswer: item.category,
      isCorrect,
      explanation: item.note
    });
  });

  // 3. Események ellenőrzése (5 db)
  items.transactions.forEach(tx => {
    const userVal = answers[`tx_${tx.id}`];
    const isCorrect = userVal === tx.type;
    if (isCorrect) correctCount++;
    reviewList.push({
      category: "Gazdasági esemény",
      title: tx.event,
      userAnswer: userVal || "Nem válaszolt",
      expectedAnswer: tx.typeName,
      isCorrect,
      explanation: tx.explanation
    });
  });

  // 4. Számítások ellenőrzése (4 db)
  items.calculations.forEach(c => {
    const userVal = parseFloat(answers[`calc_${c.id}`]);
    const isCorrect = !isNaN(userVal) && Math.abs(userVal - c.expected) < 0.1;
    if (isCorrect) correctCount++;
    reviewList.push({
      category: "Számítás",
      title: c.label,
      userAnswer: isNaN(userVal) ? "Nem adott meg számot" : `${userVal} E Ft`,
      expectedAnswer: `${c.expected.toLocaleString('hu-HU')} E Ft`,
      isCorrect,
      explanation: c.explanation
    });
  });

  const percentage = Math.round((correctCount / totalQuestions) * 100);
  let grade = 1;
  let gradeClass = "grade-1";
  let gradeText = "Elégtelen (1)";

  if (percentage >= 85) {
    grade = 5;
    gradeClass = "grade-5";
    gradeText = "Jeles (5)";
  } else if (percentage >= 75) {
    grade = 4;
    gradeClass = "grade-4";
    gradeText = "Jó (4)";
  } else if (percentage >= 65) {
    grade = 3;
    gradeClass = "grade-3";
    gradeText = "Közepes (3)";
  } else if (percentage >= 50) {
    grade = 2;
    gradeClass = "grade-2";
    gradeText = "Elégséges (2)";
  }

  // Megjelenítés
  document.getElementById("examActiveContainer").style.display = "none";
  const resultContainer = document.getElementById("examResultContainer");
  resultContainer.style.display = "block";

  resultContainer.innerHTML = `
    <div class="exam-score-banner">
      <h3 style="color: #fff; font-size: 1.5rem; margin-bottom: 0.5rem;">Próba-ZH Eredmény</h3>
      <div class="exam-grade-badge ${gradeClass}">${grade}</div>
      <div style="font-size: 1.4rem; font-weight: 800; color: #fff; margin-bottom: 0.5rem;">${gradeText}</div>
      <p style="font-size: 1.1rem; color: var(--text-muted); margin-bottom: 1rem;">
        Elért pontszám: <strong>${correctCount} / ${totalQuestions} pont</strong> (${percentage}%)
      </p>
      <button type="button" class="btn-primary" onclick="startExamSession()">
        Új ZH Indítása Más Kérdésekkel
      </button>
    </div>

    <div style="margin-top: 2rem;">
      <h3 style="font-size: 1.25rem; color: #fff; margin-bottom: 1rem;">Részletes Hiba- és Megoldás-áttekintő</h3>
      <div class="single-column-list">
        ${reviewList.map(r => `
          <div class="learning-card ${r.isCorrect ? 'answered-correct' : 'answered-wrong'}">
            <div class="card-top">
              <span class="card-index">${r.category}</span>
              <span style="font-weight:700; color: ${r.isCorrect ? 'var(--success)' : 'var(--danger)'}">
                ${r.isCorrect ? '✓ HELYES' : '✗ HIBÁS'}
              </span>
            </div>
            <div class="card-question">${r.title}</div>
            <div style="font-size: 0.85rem; margin-bottom: 0.5rem;">
              Te válaszod: <strong>${r.userAnswer}</strong> | Helyes: <strong style="color:var(--success);">${r.expectedAnswer}</strong>
            </div>
            <div class="feedback-box ${r.isCorrect ? 'correct' : 'wrong'}">
              ${r.explanation}
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Összesített Haladás és Statisztikák frissítése
function updateGlobalStats() {
  const theoryCount = Object.keys(APP_STATE.theoryAnswers).length;
  const classCount = Object.keys(APP_STATE.classificationAnswers).length;
  const txCount = Object.keys(APP_STATE.transactionAnswers).length;

  let calcAnswered = 0;
  SZAMVITEL_DATA.calculationTasks.forEach(t => {
    const inputs = t.id === "calc-1" ? [...t.companyA.inputs, ...t.companyB.inputs] : t.inputs;
    if (inputs.some(i => APP_STATE.calculationAnswers[i.id] !== undefined && APP_STATE.calculationAnswers[i.id] !== "")) {
      calcAnswered++;
    }
  });

  let correctCount = 0;
  Object.values(APP_STATE.theoryAnswers).forEach(a => { if (a.isCorrect) correctCount++; });
  Object.values(APP_STATE.classificationAnswers).forEach(a => { if (a.isCorrect) correctCount++; });
  Object.values(APP_STATE.transactionAnswers).forEach(a => { if (a.isCorrect) correctCount++; });

  const totalPossible = SZAMVITEL_DATA.theoryQuestions.length + 
                        SZAMVITEL_DATA.balanceItems.length + 
                        SZAMVITEL_DATA.transactions.length + 
                        SZAMVITEL_DATA.calculationTasks.length;

  const totalAnswered = theoryCount + classCount + txCount + calcAnswered;
  const pctAnswered = Math.min(100, Math.round((totalAnswered / totalPossible) * 100));
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Frissítés DOM-ban
  document.getElementById("globalProgressBar").style.width = `${pctAnswered}%`;
  document.getElementById("statAnswered").textContent = totalAnswered;
  document.getElementById("statTotal").textContent = totalPossible;
  document.getElementById("statCorrect").textContent = correctCount;
  document.getElementById("statAccuracy").textContent = `${accuracy}%`;

  // Fül-számlálók
  document.getElementById("counterTheory").textContent = `${theoryCount}/${SZAMVITEL_DATA.theoryQuestions.length}`;
  document.getElementById("counterClassification").textContent = `${classCount}/${SZAMVITEL_DATA.balanceItems.length}`;
  document.getElementById("counterTransactions").textContent = `${txCount}/${SZAMVITEL_DATA.transactions.length}`;
  document.getElementById("counterCalculations").textContent = `${calcAnswered}/${SZAMVITEL_DATA.calculationTasks.length}`;
}
