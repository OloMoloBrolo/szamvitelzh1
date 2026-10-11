// Számvitel ZH Felkészítő - Teljes Adatbázis (Elmélet + Gyakorlat)
// Források: Szamvitel_ZH_felkeszito.docx & Szamvitel_gyakorlo_feladatok.docx

const SZAMVITEL_DATA = {
  // 1. ELMÉLETI VILLÁMKÉRDÉSEK (IGAZ / HAMIS ÉS BEUGRÓK)
  theoryQuestions: [
    {
      id: "th-1",
      question: "A tenyészállat a készletek között szerepel a mérlegben.",
      isTrue: false,
      explanation: "Hamis! A tenyészállat TÁRGYI ESZKÖZ (Befektetett eszköz), mert tartósan, legalább egy éven túl szolgálja a vállalkozást. Készletnek csak a növendék-, hízó- és egyéb állatok minősülnek."
    },
    {
      id: "th-2",
      question: "A hízóállat akkor is a készletek között szerepel, ha egy évnél hosszabb ideig tartják.",
      isTrue: true,
      explanation: "Igaz! A növendék-, hízó- és egyéb állatokat a tartás idejétől függetlenül mindig a készletek között kell kimutatni."
    },
    {
      id: "th-3",
      question: "A könyvviteli mérleg mennyiségben és értékben is kimutatja a vállalkozás vagyonát.",
      isTrue: false,
      explanation: "Hamis! A mérleg CSAK PÉNZÉRTÉKBEN, összevontan mutatja ki a vagyont. Mennyiségben és értékben, tételesen a LELTÁR mutatja ki a vagyont."
    },
    {
      id: "th-4",
      question: "A leltár és a mérleg egyaránt egy adott időpontra (fordulónapra) vonatkozik.",
      isTrue: true,
      explanation: "Igaz! Mindkettő állapotkimutatás (adott időpontra vonatkozik), szemben az eredménykimutatással, ami időszakra (pl. egy üzleti évre) szól."
    },
    {
      id: "th-5",
      question: "Az eredmény a saját vagyon (saját tőke) változása egy adott időszak alatt.",
      isTrue: true,
      explanation: "Igaz! Az eredmény = a saját vagyon időszak alatti változása. Ha nő, nyereség; ha csökken, veszteség."
    },
    {
      id: "th-6",
      question: "A céltartalékot az adózott eredmény terhére képzik.",
      isTrue: false,
      explanation: "Hamis! A céltartalékot az ADÓZÁS ELŐTTI EREDMÉNY terhére (ráfordításként) képzik a várható kötelezettségekre és jövőbeli költségekre."
    },
    {
      id: "th-7",
      question: "A vevőktől kapott előleg a követelések közé tartozik.",
      isTrue: false,
      explanation: "Hamis! Tipikus csapda! A vevőtől kapott előleg RÖVID LEJÁRATÚ KÖTELEZETTSÉG (mert nekünk kell még teljesítenünk vagy visszafizetnünk). Az általunk adott előleg minősül követelés jellegűnek."
    },
    {
      id: "th-8",
      question: "Az eszközök körforgása nem változtatja meg a mérlegfőösszeget.",
      isTrue: true,
      explanation: "Igaz! Képlete: A + x - x = P. Csak az eszközök belső szerkezete változik (pl. vevőkövetelésből pénz lesz), a mérlegfőösszeg változatlan marad."
    },
    {
      id: "th-9",
      question: "A forgalmi költség eljárású eredménykimutatásban szerepel az aktivált saját teljesítmények értéke.",
      isTrue: false,
      explanation: "Hamis! Az Aktivált Saját Teljesítmények Értéke (ASTK) CSAK az ÖSSZKÖLTSÉG eljárásban szerepel. A forgalmi költség eljárás közvetlenül a felmerült forgalmi költségeket vonja le."
    },
    {
      id: "th-10",
      question: "Az összköltség és a forgalmi költség eljárással megállapított adózott eredmény eltérhet egymástól.",
      isTrue: false,
      explanation: "Hamis! Mindkét eljárás pontosan UGYANAZT az adózott eredményt adja, csak az üzemi eredmény levezetésének logikája (költségnemek vs. közvetlen/közvetett költségek) tér el."
    },
    {
      id: "th-11",
      question: "Az értékesítés nettó árbevétele tartalmazza a felszámított általános forgalmi adót (áfát).",
      isTrue: false,
      explanation: "Hamis! Az árbevétel mindig ÁFA NÉLKÜLI (nettó) összeg. Az áfa a költségvetéssel szembeni kötelezettség/követelés."
    },
    {
      id: "th-12",
      question: "Tárgyi eszközként egy gép csak akkor mutatható ki, ha már üzembe helyezték.",
      isTrue: false,
      explanation: "Hamis! A tárgyi eszközök olyan dologi eszközök, amelyek tartósan szolgálnak, FÜGGETLENÜL ATTÓL, hogy üzembe helyezésre kerültek-e vagy sem (pl. a beruházások is itt szerepelnek!)."
    },
    {
      id: "th-13",
      question: "A jegyzett, de még be nem fizetett tőke negatív előjellel szerepel a saját tőkében.",
      isTrue: true,
      explanation: "Igaz! A saját tőke D/II. sora levonandó tételként (-) csökkenti a saját tőkét, amíg a tulajdonosok be nem fizetik."
    },
    {
      id: "th-14",
      question: "Az ingatlanhoz kapcsolódó vagyoni értékű jog az immateriális javak közé tartozik.",
      isTrue: false,
      explanation: "Hamis! Óriási vizsgacsapda! Ha a vagyoni értékű jog ingatlanhoz kapcsolódik (pl. bérleti jog), akkor TÁRGYI ESZKÖZ (A/II.1.). Csak az ingatlanhoz NEM kapcsolódó jogok tartoznak az immateriális javak közé."
    },
    {
      id: "th-15",
      question: "A pénzbeni mérésmód azért általános a számvitelben, mert közös nevezőre hozza a különböző gazdasági eseményeket.",
      isTrue: true,
      explanation: "Igaz! Míg a tonna, méter és darab nem adható össze, a forintérték lehetővé teszi az összesített vagyon és eredmény kimutatását."
    },
    {
      id: "th-16",
      question: "A visszavásárolt saját üzletrész a saját tőkét csökkenti a mérlegben.",
      isTrue: false,
      explanation: "Hamis! A visszavásárolt saját részvények, üzletrészek a FORGÓESZKÖZÖK közötti Értékpapírok (B/III.) sorában jelennek meg a magyar számviteli törvény szerint."
    },
    {
      id: "th-17",
      question: "A saját tőke elemei közül egyedül a jegyzett tőke vehet fel negatív értéket.",
      isTrue: false,
      explanation: "Hamis! Csak az Eredménytartalék és az Adózott eredmény lehet negatív (veszteség esetén), valamint a jegyzett, de be nem fizetett tőke levonandó (-). Maga a jegyzett tőke soha nem negatív."
    },
    {
      id: "th-18",
      question: "A realizált eredmény és a pénzügyileg is realizált eredmény megegyezik, ha a vevő azonnal utal vagy készpénzzel fizet.",
      isTrue: true,
      explanation: "Igaz! Realizált: a terméket eladtuk (akár hitelre is). Pénzügyileg realizált: a pénz be is folyt. Ha azonnali a fizetés, a kettő egybeesik."
    },
    {
      id: "th-19",
      question: "A számított eredmény képlete: Termelési érték – Termelési költség.",
      isTrue: true,
      explanation: "Igaz! A számított eredmény az előállított termékek piaci értékének és a termelési költségnek a különbsége, függetlenül attól, hogy eladták-e már."
    },
    {
      id: "th-20",
      question: "Az immateriális javakra adott előleg a követelések között szerepel a mérlegben.",
      isTrue: false,
      explanation: "Hamis! Bár gazdasági tartalma szerint követelés, a mérlegben a rendeltetése szerinti eszközcsoportban szerepel: az immateriális javak között!"
    }
  ],

  // 2. FŐBB FOGALMAK & KULCSSZAVAK (FLASHCARDS / GYORSTALPALÓ)
  flashcards: [
    {
      topic: "A számvitel fogalma",
      keywords: "elszámolási rendszer, objektív információs rendszer, megfigyel, mér, rendszerezetten feljegyez",
      summary: "Olyan elszámolási és objektív információs rendszer, amely a gazdasági műveleteket megfigyeli, méri és rendszerezetten feljegyzi."
    },
    {
      topic: "A számvitel két fő célja",
      keywords: "vagyon (időpontban) -> Mérleg; vagyonváltozás/eredmény (időszak alatt) -> Eredménykimutatás",
      summary: "1. A vagyon kimutatása adott időpontban (Leltár és Mérleg). 2. A vagyonváltozás/eredmény kimutatása egy időszak alatt (Eredménykimutatás)."
    },
    {
      topic: "Vagyon és Alapösszefüggés",
      keywords: "Eszközök (szerep, aktívák) = Források (eredet, passzívák)",
      summary: "A vagyon a vállalkozás tulajdonában, kezelésében lévő eszközök értéke. Eszközök = Források (A = P). Ugyanazt a vagyont nézzük két oldalról."
    },
    {
      topic: "Leltár vs. Könyvviteli mérleg",
      keywords: "Leltár: tételes, mennyiség + érték, jegyzékszerű. Mérleg: összevont, csak pénzérték, kétoldalú/egyoldalú.",
      summary: "Mindkettő adott időpontra vonatkozik. A leltár valóságban meglévő tételeket mutat mennyiségben és értékben tételesen; a mérleg pénzértékben összevontan."
    },
    {
      topic: "Befektetett eszközök vs. Forgóeszközök",
      keywords: "Befektetett: legalább 1 éven túl, tartósan. Forgó: 1 évnél rövidebb, egyszeri körforgás.",
      summary: "A tartósság (1 év határ) a döntő szempont. Befektetett: Immateriális, Tárgyi, Bef. pénzügyi, Halasztott adó. Forgó: Készletek, Követelések, Értékpapírok, Pénzeszközök."
    },
    {
      topic: "Állatok elhelyezése a mérlegben",
      keywords: "Tenyészállat -> Tárgyi eszköz; Növendék, hízó -> Készlet (függetlenül a tartás idejétől)",
      summary: "Tenyészállat: tartósan szolgál -> Tárgyi eszköz. Növendék-, hízó- és egyéb állat: mindig készlet, akkor is, ha 2-3 évig tartják!"
    },
    {
      topic: "Adott előlegek elhelyezése",
      keywords: "Rendeltetés helyén szerepel, NEM a követeléseknél!",
      summary: "Immateriálisra adott előleg -> Immateriális javak. Gépberuházásra adott előleg -> Tárgyi eszközök. Készletre adott előleg -> Készletek."
    },
    {
      topic: "Saját tőke elemei",
      keywords: "Jegyzett (+), Jegyzett be nem fiz. (-), Tőketartalék (+), Eredménytartalék (±), Lekötött (+), Értékelési (+), Adózott eredmény (±)",
      summary: "A saját vagyon forrása. Negatív csak az eredménytartalék, az adózott eredmény és a jegyzett be nem fizetett tőke (-) lehet."
    },
    {
      topic: "Időbeli elhatárolások elve",
      keywords: "Több évet érintő események arányosítása bevételek és költségek között",
      summary: "Aktív (C): bevételek AIE, költségek AIE, halasztott ráfordítások. Passzív (G): bevételek PIE, költségek PIE, halasztott bevételek."
    },
    {
      topic: "Eredménykategóriák levezetése",
      keywords: "A. Üzemi -> B. Pénzügyi -> C. Adózás előtti (A±B) -> X. Adó -> D. Adózott (C-X)",
      summary: "Üzemi eredmény (A) + Pénzügyi műveletek eredménye (B) = Adózás előtti eredmény (C). Ebből levonva az adót (X) kapjuk az Adózott eredményt (D)."
    }
  ],

  // 3. MÉRLEGTÉTEL-BESOROLÓ ADATBÁZIS (1. ÉS 8. FELADAT TELJES TÉTELKÉSZLETE)
  balanceCategories: [
    { code: "IMM", name: "Immateriális javak", side: "Eszköz (A/I)" },
    { code: "TARGYI", name: "Tárgyi eszközök", side: "Eszköz (A/II)" },
    { code: "BPU", name: "Befektetett pénzügyi eszközök", side: "Eszköz (A/III)" },
    { code: "FORGO", name: "Forgóeszközök", side: "Eszköz (B/I-IV)" },
    { code: "AIE", name: "Aktív időbeli elhatárolások", side: "Eszköz (C)" },
    { code: "TOKE", name: "Saját tőke", side: "Forrás (D)" },
    { code: "CELTART", name: "Céltartalékok", side: "Forrás (E)" },
    { code: "HLK", name: "Hosszú lejáratú kötelezettségek", side: "Forrás (F/II)" },
    { code: "RLK", name: "Rövid lejáratú kötelezettségek", side: "Forrás (F/III)" },
    { code: "PIE", name: "Passzív időbeli elhatárolások", side: "Forrás (G)" }
  ],

  balanceItems: [
    { id: 1, name: "Gyártási licenc (nem ingatlanhoz kötött jog)", category: "IMM", note: "Nem kapcsolódik ingatlanhoz -> Immateriális javak vagyoni értékű joga." },
    { id: 2, name: "Üzemcsarnok", category: "TARGYI", note: "Ingatlan -> Tárgyi eszköz." },
    { id: 3, name: "Iroda bérleti joga (ingatlanhoz kapcsolódó)", category: "TARGYI", note: "Csapda! Mivel ingatlanhoz kapcsolódik, Tárgyi eszköz (Ingatlanok és kapcsolódó vagyoni értékű jogok)." },
    { id: 4, name: "Saját fejlesztésű szoftver", category: "IMM", note: "Szellemi termék -> Immateriális jószág." },
    { id: 5, name: "Folyamatban lévő épületfelújítás", category: "TARGYI", note: "Beruházás, felújítás -> Tárgyi eszköz (függetlenül az üzembe helyezéstől)." },
    { id: 6, name: "Tenyészbika", category: "TARGYI", note: "Tenyészállat -> tartósan szolgál -> Tárgyi eszköz." },
    { id: 7, name: "Hízósertés (2 éve tartják)", category: "FORGO", note: "Csapda! Hízó-, növendék- és egyéb állat mindig készlet (Forgóeszköz), a tartás idejétől függetlenül!" },
    { id: 8, name: "Betétdíjas göngyöleg", category: "FORGO", note: "Készlet (Áruk alcsoport) -> Forgóeszköz." },
    { id: 9, name: "Raktáron lévő, még használatba nem vett munkaruha", category: "FORGO", note: "Használatba vételig a készletek között kell kimutatni -> Forgóeszköz." },
    { id: 10, name: "Kereskedelmi áru", category: "FORGO", note: "Értékesítési célú vásárolt készlet -> Forgóeszköz." },
    { id: 11, name: "Leányvállalati részesedés tartós céllal", category: "BPU", note: "Tartós jövedelemszerzés / ellenőrzés a cél -> Befektetett pénzügyi eszköz." },
    { id: 12, name: "Más vállalkozásnak 3 évre adott kölcsön", category: "BPU", note: "Tartósan (1 éven túlra) adott kölcsön -> Befektetett pénzügyi eszköz." },
    { id: 13, name: "Forgatási célú államkötvény", category: "FORGO", note: "Átmeneti befektetés, forgatási cél -> Forgóeszköz (Értékpapírok)." },
    { id: 14, name: "Visszavásárolt saját üzletrész", category: "FORGO", note: "Csapda! Forgóeszközök közötti Értékpapírok sor (B/III)." },
    { id: 15, name: "Valutapénztár", category: "FORGO", note: "Pénzeszköz -> Forgóeszköz." },
    { id: 16, name: "Vevőkövetelés (áruszállításból)", category: "FORGO", note: "Követelés -> Forgóeszköz." },
    { id: 17, name: "Dolgozónak adott fizetési előleg", category: "FORGO", note: "Munkavállalói tartozás -> Követelések (Forgóeszköz)." },
    { id: 18, name: "Gépbeszerzésre adott előleg", category: "TARGYI", note: "Csapda! Beruházásra adott előlegként a Tárgyi eszközök között szerepel." },
    { id: 19, name: "Szoftverre adott előleg", category: "IMM", note: "Csapda! Immateriális javakra adott előlegként az Immateriális javak között szerepel." },
    { id: 20, name: "Anyagbeszerzésre adott előleg", category: "FORGO", note: "Készletekre adott előlegként a Készletek (Forgóeszköz) között szerepel." },
    { id: 21, name: "Vevőtől kapott előleg", category: "RLK", note: "Csapda! Mi tartozunk teljesítéssel -> Rövid lejáratú kötelezettség." },
    { id: 22, name: "Szállítói tartozás", category: "RLK", note: "Áruszállításból eredő elismert kötelezettség -> Rövid lejáratú kötelezettség." },
    { id: 23, name: "Társasági adó tartozás", category: "RLK", note: "Egy éven belül fizetendő adótartozás -> Rövid lejáratú kötelezettség." },
    { id: 24, name: "10 évre felvett beruházási hitel", category: "HLK", note: "1 éven túli lejáratú hitel -> Hosszú lejáratú kötelezettség." },
    { id: 25, name: "Kötvénykibocsátásból eredő 5 éves tartozás", category: "HLK", note: "Tartozás kötvénykibocsátásból -> Hosszú lejáratú kötelezettség." },
    { id: 26, name: "Várható garanciális kötelezettségre képzett összeg", category: "CELTART", note: "Céltartalék a várható kötelezettségekre -> Céltartalékok (E)." },
    { id: 27, name: "Jegyzett tőke", category: "TOKE", note: "A tulajdonosok által rendelkezésre bocsátott alapvető tőke -> Saját tőke (D/I)." },
    { id: 28, name: "Tárgyévi veszteség", category: "TOKE", note: "Az adózott eredmény negatív értéke -> Saját tőke (D/VII)." },
    { id: 29, name: "Előre kifizetett, a következő évet terhelő biztosítási díj", category: "AIE", note: "Költségek aktív időbeli elhatárolása -> Aktív időbeli elhatárolás (C)." },
    { id: 30, name: "Előre kapott, a következő évre járó bérleti díj", category: "PIE", note: "Bevételek passzív időbeli elhatárolása -> Passzív időbeli elhatárolás (G)." },
    { id: 31, name: "Jegyzett, de még be nem fizetett tőke", category: "TOKE", note: "A saját tőke negatív (-) korrekciós tétele (D/II)." },
    { id: 32, name: "Üzleti vagy cégérték (Goodwill)", category: "IMM", note: "Nem anyagi jószág cégvásárláskor -> Immateriális javak (A/I.5.)." }
  ],

  // 4. GAZDASÁGI ESEMÉNYEK TÍPUSA ÉS HATÁSA
  transactions: [
    {
      id: "tr-1",
      event: "Áru vásárlása készpénzért (800 E Ft értékben)",
      type: "korforgas",
      typeName: "Eszközök körforgása",
      formula: "A + x - x = P",
      totalEffect: "0",
      accounts: "Készletek +800; Pénzeszközök -800",
      explanation: "Készpénzből árut veszünk. Csak az eszközök összetétele változik, a mérlegfőösszeg változatlan marad."
    },
    {
      id: "tr-2",
      event: "Anyag vásárlása szállítói hitelre (számla alapján, még nincs kifizetve)",
      type: "bevonas",
      typeName: "Eszközök bevonása",
      formula: "A + x = P + x",
      totalEffect: "+",
      accounts: "Készletek (anyag) +; Rövid lejáratú kötelezettség (szállító) +",
      explanation: "Nő az eszköz (anyagkészlet) és nő a forrás (szállítói tartozás). A mérlegfőösszeg nő."
    },
    {
      id: "tr-3",
      event: "Szállítói tartozás kiegyenlítése a bankszámláról",
      type: "kivonas",
      typeName: "Eszközök kivonása",
      formula: "A - x = P - x",
      totalEffect: "-",
      accounts: "Pénzeszközök (bank) -; Rövid lejáratú kötelezettség (szállító) -",
      explanation: "Pénzből kifizetjük a tartozást. Csökken az eszköz és csökken a forrás. A mérlegfőösszeg csökken."
    },
    {
      id: "tr-4",
      event: "Hosszú lejáratú beruházási hitel felvétele a bankszámlára",
      type: "bevonas",
      typeName: "Eszközök bevonása",
      formula: "A + x = P + x",
      totalEffect: "+",
      accounts: "Pénzeszközök (bank) +; Hosszú lejáratú kötelezettségek +",
      explanation: "Pénz érkezik a számlára (eszköz nő), a hiteltartozás nő (forrás nő). A mérlegfőösszeg nő."
    },
    {
      id: "tr-5",
      event: "Szállítói tartozás kiegyenlítése rövid lejáratú bankhitelből (a bank közvetlenül a szállítónak utal)",
      type: "forrasvaltozas",
      typeName: "Források változása",
      formula: "A = P + x - x",
      totalEffect: "0",
      accounts: "Rövid lejáratú kötelezettség (szállító) -; Rövid lejáratú kötelezettség (hitel) +",
      explanation: "Egyik kötelezettség megszűnik, helyette másik keletkezik. Csak a források szerkezete módosul, a főösszeg 0."
    },
    {
      id: "tr-6",
      event: "A vevő átutalja a tartozását a bankszámlánkra",
      type: "korforgas",
      typeName: "Eszközök körforgása",
      formula: "A + x - x = P",
      totalEffect: "0",
      accounts: "Követelések (vevők) -; Pénzeszközök (bank) +",
      explanation: "A követelés megszűnik, pénzünk lesz belőle. Eszközön belüli átrendeződés, a főösszeg nem változik."
    },
    {
      id: "tr-7",
      event: "Termelőgép vásárlása bankszámláról történő utalással",
      type: "korforgas",
      typeName: "Eszközök körforgása",
      formula: "A + x - x = P",
      totalEffect: "0",
      accounts: "Tárgyi eszközök (gépek) +; Pénzeszközök -",
      explanation: "Pénzből tárgyi eszköz lett. Mindkettő eszközoldali, a mérlegfőösszeg változatlan."
    },
    {
      id: "tr-8",
      event: "Tőkeemelés készpénzbefizetéssel: a tulajdonos pénzt fizet be a pénztárba",
      type: "bevonas",
      typeName: "Eszközök bevonása",
      formula: "A + x = P + x",
      totalEffect: "+",
      accounts: "Pénzeszközök (pénztár) +; Saját tőke (jegyzett/tőketartalék) +",
      explanation: "Eszközoldalon nő a pénz, forrásoldalon nő a saját tőke. A mérlegfőösszeg nő."
    },
    {
      id: "tr-9",
      event: "Osztalék jóváhagyása az eredménytartalék terhére (még nincs kifizetve)",
      type: "forrasvaltozas",
      typeName: "Források változása",
      formula: "A = P + x - x",
      totalEffect: "0",
      accounts: "Saját tőke (eredménytartalék) -; Rövid lejáratú kötelezettség (osztaléktartozás) +",
      explanation: "A saját tőke átalakul a tulajdonosokkal szembeni rövid lejáratú kötelezettséggé. Források belső átrendeződése."
    },
    {
      id: "tr-10",
      event: "Jóváhagyott osztalék kifizetése bankszámláról",
      type: "kivonas",
      typeName: "Eszközök kivonása",
      formula: "A - x = P - x",
      totalEffect: "-",
      accounts: "Pénzeszközök -; Rövid lejáratú kötelezettség (osztaléktartozás) -",
      explanation: "Pénzkivonás: csökken a bankszámla és csökken a tartozás. A mérlegfőösszeg csökken."
    },
    {
      id: "tr-11",
      event: "Áru eladása a nyilvántartási érték (900 E Ft) felett, 1 300 E Ft-ért készpénzért",
      type: "korforgas_bevonas",
      typeName: "Körforgással egyidejű eszközbevonás",
      formula: "A + x - y = P + (x - y)",
      totalEffect: "+",
      accounts: "Készletek -900; Pénzeszközök +1 300; Saját tőke (adózott eredmény) +400",
      explanation: "Összetett esemény nyereséggel! Eszközök nettóban +400-zal nőnek, a forrásoldalon az adózott eredmény +400-zal nő. A főösszeg +400."
    },
    {
      id: "tr-12",
      event: "Készlet eladása nyilvántartási érték (600 E Ft) alatt, 450 E Ft-ért számlára (hitelre)",
      type: "korforgas_kivonas",
      typeName: "Körforgással egyidejű eszközkivonás",
      formula: "A + x - y = P - (y - x)",
      totalEffect: "-",
      accounts: "Készletek -600; Követelések +450; Saját tőke (adózott eredmény) -150",
      explanation: "Összetett esemény veszteséggel! Eszközök nettóban -150-nel csökkennek, a saját tőke az adózott eredményben -150-nel csökken. A főösszeg -150."
    },
    {
      id: "tr-13",
      event: "Bankbetét után jóváírt kamat a bankszámlán",
      type: "bevonas",
      typeName: "Eszközök bevonása",
      formula: "A + x = P + x",
      totalEffect: "+",
      accounts: "Pénzeszközök +; Saját tőke (adózott eredmény - pénzügyi bevétel) +",
      explanation: "Bevétel keletkezik, ami növeli a pénzeszközöket és növeli az adózott eredményt (saját tőkét). Főösszeg nő."
    },
    {
      id: "tr-14",
      event: "Hitelkamat kifizetése a bankszámláról",
      type: "kivonas",
      typeName: "Eszközök kivonása",
      formula: "A - x = P - x",
      totalEffect: "-",
      accounts: "Pénzeszközök -; Saját tőke (adózott eredmény - pénzügyi ráfordítás) -",
      explanation: "Pénzügyi ráfordítás: csökken a pénz és csökken az adózott eredmény (saját tőke). Főösszeg csökken."
    },
    {
      id: "tr-15",
      event: "Céltartalék képzése garanciális javításokra",
      type: "forrasvaltozas",
      typeName: "Források változása",
      formula: "A = P + x - x",
      totalEffect: "0",
      accounts: "Céltartalékok +; Saját tőke (adózott eredmény egyéb ráfordítás miatt) -",
      explanation: "Az adózás előtti eredmény terhére képzett forrás. Céltartalék nő, saját tőke (adózott eredmény) csökken. Főösszeg változatlan!"
    },
    {
      id: "tr-16",
      event: "Előleg átutalása a szállítónak anyagbeszerzésre",
      type: "korforgas",
      typeName: "Eszközök körforgása",
      formula: "A + x - x = P",
      totalEffect: "0",
      accounts: "Készletekre adott előleg +; Pénzeszközök -",
      explanation: "Eszközök közötti mozgás: pénzből adott előleg (készlet-követelés jellegű eszköz) lesz. Főösszeg 0."
    },
    {
      id: "tr-17",
      event: "Szállítói tartozás kiegyenlítése saját kibocsátású váltóval",
      type: "forrasvaltozas",
      typeName: "Források változása",
      formula: "A = P + x - x",
      totalEffect: "0",
      accounts: "Szállítói kötelezettség -; Váltótartozás (rövid lejáratú köt.) +",
      explanation: "Szállítói tartozás átváltása váltótartozásra. Mindkettő rövid lejáratú kötelezettség, a főösszeg 0."
    },
    {
      id: "tr-18",
      event: "Társasági adó fizetési kötelezettség elszámolása",
      type: "forrasvaltozas",
      typeName: "Források változása",
      formula: "A = P + x - x",
      totalEffect: "0",
      accounts: "Rövid lejáratú kötelezettség (társasági adó) +; Saját tőke (adózott eredmény) -",
      explanation: "Az adófizetési kötelezettség csökkenti az adózott eredményt és növeli a rövid lejáratú kötelezettséget. Források átrendeződése."
    }
  ],

  // 5. SZÁMÍTÁSOS GYAKORLÓ FELADATOK
  calculationTasks: [
    {
      id: "calc-1",
      title: "2. Feladat: Két társaság mérlegadatainak kiegészítése és elemzése",
      description: "Számítsa ki a két vállalat („A” és „B”) hiányzó mérlegadatait E Ft-ban a mérlegegyenlőség (Eszközök = Források) alapján!",
      companyA: {
        inputs: [
          { id: "a_befektetett", label: "A. Befektetett eszközök (E Ft)", expected: 30000, hint: "Eszközök összesen (48 000) – Forgóeszközök (18 000)" },
          { id: "a_koveteles", label: "   ebből: Követelések (E Ft)", expected: 6000, hint: "Forgóeszközök (18 000) – Készletek (8 000) – Pénzeszközök (4 000)" },
          { id: "a_forras_osszesen", label: "Források összesen (E Ft)", expected: 48000, hint: "Mérlegegyenlőség miatt = Eszközök összesen (48 000)" },
          { id: "a_hlk", label: "   Hosszú lejáratú kötelezettségek (E Ft)", expected: 9600, hint: "Források (48 000) – Saját tőke (28 800) – Rövid lejáratú köt. (9 600)" }
        ],
        ratios: {
          befektetett_ratio: "62,5% (30 000 / 48 000)",
          sajat_toke_ratio: "60,0% (28 800 / 48 000)",
          eval: "Az „A” társaság eszközigényes (tartós eszközök túlsúlya: 62,5%), és stabilan, döntően saját forrásból finanszírozott (60%)."
        }
      },
      companyB: {
        inputs: [
          { id: "b_eszkoz_osszesen", label: "Eszközök összesen (E Ft)", expected: 60000, hint: "Befektetett (20 000) + Forgó (40 000)" },
          { id: "b_forras_osszesen", label: "Források összesen (E Ft)", expected: 60000, hint: "Mérlegegyenlőség = 60 000" },
          { id: "b_rlk", label: "   Rövid lejáratú kötelezettségek (E Ft)", expected: 30000, hint: "Források (60 000) – Saját tőke (18 000) – Hosszú lejáratú köt. (12 000)" }
        ],
        ratios: {
          befektetett_ratio: "33,3% (20 000 / 60 000)",
          sajat_toke_ratio: "30,0% (18 000 / 60 000)",
          eval: "A „B” társaság forgóeszköz-intenzív (40 000 / 60 000 = 66,7%), és eladósodott: a források 50%-a rövid lejáratú kötelezettség, így likviditási kockázata magas."
        }
      }
    },

    {
      id: "calc-2",
      title: "3. Feladat: Hiányos mérleg kiegészítése (Arányok és Negatív Eredmény)",
      description: "Egy vállalat mérlegfőösszege 150 000 E Ft. Határozza meg a hiányzó összegeket a kiegészítő információk alapján!",
      info: "• Befektetett eszközök = 90 000 E Ft (60%), ezen belül Immateriális = 9 000, Bef. pénzügyi = 18 000.<br>• Forgóeszközök = 58 000 E Ft, Aktív időbeli elhatárolás = 2 000 E Ft.<br>• Saját tőke = 85 000 E Ft: Jegyzett tőke 70 000, Tőketartalék 6 000, Eredménytartalék 10 000, Értékelési tartalék 2 000.<br>• Céltartalék = 4 000, Kötelezettségek = 60 000 (ebből Hosszú lejáratú = 40 000), Passzív időbeli elhatárolás = 1 000.",
      inputs: [
        { id: "c3_targyi", label: "II. Tárgyi eszközök értéke (E Ft)", expected: 63000, hint: "Befektetett eszközök (90 000) – Immateriális (9 000) – Befektetett pénzügyi (18 000)" },
        { id: "c3_adozott", label: "VII. Adózott eredmény (E Ft) - figyelem az előjelre!", expected: -3000, hint: "Saját tőke (85 000) – [Jegyzett (70 000) + Tőketartalék (6 000) + Eredménytartalék (10 000) + Értékelési (2 000)] = 85 000 – 88 000 = -3 000!" },
        { id: "c3_rlk", label: "III. Rövid lejáratú kötelezettségek (E Ft)", expected: 20000, hint: "Kötelezettségek összesen (60 000) – Hosszú lejáratú (40 000)" }
      ],
      lesson: "Csapda megoldva: A saját tőke elemeinek összege 88 000, de a saját tőke összesen csak 85 000. Ezért az Adózott eredmény –3 000 E Ft, a cég VESZTESÉGES volt!"
    },

    {
      id: "calc-3",
      title: "14. Feladat: Eredménykimutatás összköltség és forgalmi költség eljárással",
      description: "Egy vállalkozás tárgyévi adatai (E Ft): Nettó árbevétel: 12 000; Anyagköltség: 3 800; Igénybe vett szolgáltatás: 900; Bérköltség: 2 600; Bérjárulékok: 350; Értékcsökkenés: 1 100; Egyéb ráfordítások: 250; Egyéb bevételek: 400. Saját termelésű készlet növekedése: +700; Saját előállítású eszköz aktivált értéke: +300. Értékesítés közvetlen önköltsége: 6 150; Értékesítés közvetett költségei: 1 600. Pénzügyi bevételek: 150; Pénzügyi ráfordítások: 350; Társasági adó: 378.",
      inputs: [
        { id: "c14_astk", label: "Aktivált saját teljesítmények értéke (II. sor, E Ft)", expected: 1000, hint: "Készletállomány-változás (+700) + Saját eszközök aktivált értéke (+300) = 1 000" },
        { id: "c14_anyagjellegu", label: "Anyagjellegű ráfordítások (IV. sor, E Ft)", expected: 4700, hint: "Anyagköltség (3 800) + Igénybe vett szolgáltatások (900) = 4 700" },
        { id: "c14_szemelyi", label: "Személyi jellegű ráfordítások (V. sor, E Ft)", expected: 2950, hint: "Bérköltség (2 600) + Bérjárulékok (350) = 2 950" },
        { id: "c14_uzemi", label: "A. Üzemi (üzleti) tevékenység eredménye (E Ft)", expected: 4400, hint: "12 000 + 1 000 + 400 – 4 700 – 2 950 – 1 100 – 250 = 4 400" },
        { id: "c14_penzugyi", label: "B. Pénzügyi műveletek eredménye (E Ft)", expected: -200, hint: "Pénzügyi bevételek (150) – Pénzügyi ráfordítások (350) = -200" },
        { id: "c14_adozas_elotti", label: "C. Adózás előtti eredmény (E Ft)", expected: 4200, hint: "Üzemi (4 400) + Pénzügyi (-200) = 4 200" },
        { id: "c14_adozott", label: "D. Adózott eredmény (E Ft)", expected: 3822, hint: "Adózás előtti (4 200) – Társasági adó (378) = 3 822" }
      ],
      lesson: "Forgalmi költség ellenőrzés: Bruttó eredmény = 12 000 – 6 150 = 5 850. Üzemi eredmény = 5 850 – 1 600 + 400 – 250 = 4 400 E Ft. Pontosan megegyezik az összköltség eljárás eredményével!"
    },

    {
      id: "calc-4",
      title: "15. Feladat: Az eredmény 3 fajtája (Számított vs Realizált vs Pénzügyileg realizált)",
      description: "Egy cég 2 000 db terméket állított elő. Piaci ár: 5 E Ft/db, önköltség: 3,5 E Ft/db. Eladtak 1 600 db-ot, ebből a vevők 1 200 db ellenértékét fizették ki pénzben az év végéig.",
      inputs: [
        { id: "c15_szamitott", label: "1. „Számított eredmény” (E Ft)", expected: 3000, hint: "Termelési érték (2 000 × 5 = 10 000) – Termelési költség (2 000 × 3,5 = 7 000) = 3 000" },
        { id: "c15_realizalt", label: "2. Realizált eredmény (E Ft)", expected: 2400, hint: "Értékesítés bevétele (1 600 × 5 = 8 000) – Értékesített termékek költsége (1 600 × 3,5 = 5 600) = 2 400" },
        { id: "c15_penzugyi", label: "3. Pénzügyileg is realizált eredmény (E Ft)", expected: 400, hint: "Befolyt pénzbevétel (1 200 × 5 = 6 000) – Értékesített termékek teljes költsége (5 600) = 400" }
      ],
      lesson: "Megjegyzés: A készletre gyártott 400 db (400 × 3,5 = 1 400 E Ft) a hozamokban saját készletállomány-növekedésként jelenik meg. Összes hozam: 8 000 + 1 400 = 9 400. Összes költség: 7 000. Eredmény = 9 400 – 7 000 = 2 400 E Ft!"
    },

    {
      id: "calc-5",
      title: "16. Feladat: Vagyon és eredmény kapcsolata",
      description: "Egy cég eszközei év elején 85 000, kötelezettségei 30 000 E Ft. Év végén eszközök 92 000, kötelezettségek 33 500 E Ft. Év közben a tulajdonosok 2 000 E Ft tőkeemelést fizettek be, és 1 000 E Ft osztalékot vettek ki.",
      inputs: [
        { id: "c16_nyito_toke", label: "Saját tőke év elején (E Ft)", expected: 55000, hint: "Eszközök (85 000) – Kötelezettségek (30 000) = 55 000" },
        { id: "c16_zaro_toke", label: "Saját tőke év végén (E Ft)", expected: 58500, hint: "Eszközök (92 000) – Kötelezettségek (33 500) = 58 500" },
        { id: "c16_targyevi_eredmeny", label: "Tárgyévi adózott eredmény (nyereség) összege (E Ft)", expected: 2500, hint: "Saját tőke változása: 58 500 – 55 000 = +3 500. Ebből levonva a tőkeemelést (-2 000) és hozzáadva a kivont osztalékot (+1 000): 3 500 – 2 000 + 1 000 = 2 500 E Ft!" }
      ],
      lesson: "Kulcsszabály: A saját tőke változása = Tárgyévi eredmény + Tulajdonosi tőkemozgások (tőkeemelés növeli, osztalék csökkenti a saját tőkét, de egyik sem minősül eredménynek!)."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = SZAMVITEL_DATA;
}
