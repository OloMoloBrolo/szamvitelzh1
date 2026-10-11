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

  // 3. MÉRLEGTÉTEL-BESOROLÓ ADATBÁZIS & TUDÁSTÁR (MIND A 10 FŐCSOPORT RÉSZLETES TANANYAGA)
  balanceCategories: [
    {
      code: "IMM",
      name: "Immateriális javak",
      side: "Eszközök (A. Befektetett eszközök / I.)",
      badge: "A/I",
      summary: "Nem anyagi, megfoghatatlan javak és jogok, amelyek tartósan (legalább 1 éven túl) szolgálják a céget.",
      rules: [
        "Tartóssági korlát: legalább egy éven túl szolgálja a működést.",
        "Nem dologi jelleg: szoftverek, licencek, know-how, jogok (kivéve ingatlanhoz kötött!), goodwill.",
        "Az aktivált saját szellemi kutatás-fejlesztés is ide kerül."
      ],
      exactLines: [
        "1. Alapítás-átszervezés aktivált értéke",
        "2. Kísérleti fejlesztés aktivált értéke",
        "3. Vagyoni értékű jogok (amelyek NEM ingatlanhoz kapcsolódnak!)",
        "4. Szellemi termékek (saját fejlesztésű szoftver, licencek, szabadalmak)",
        "5. Üzleti vagy cégérték (Goodwill – cégvásárlási értéktöbblet)",
        "6. Immateriális javakra adott előlegek",
        "7. Immateriális javak értékhelyesbítése"
      ],
      traps: [
        "🚨 INGATLAN BÉRLETI JOG: Ha ingatlanhoz kapcsolódik a bérleti jog, akkor TÁRGYI ESZKÖZ, NEM immateriális!",
        "🚨 SZOFTVER ELŐLEG: Bár fizetési előleg, az Immateriális javak között szerepel, NEM a követeléseknél!"
      ]
    },
    {
      code: "TARGYI",
      name: "Tárgyi eszközök",
      side: "Eszközök (A. Befektetett eszközök / II.)",
      badge: "A/II",
      summary: "Olyan tárgyiasult (megfogható, dologi) eszközök, amelyek tartósan (legalább 1 éven túl) szolgálják a vállalkozást, üzembe helyezéstől függetlenül.",
      rules: [
        "Dologi, fizikai eszközök (föld, épület, gép, autó, tenyészállat).",
        "Legalább egy éven túli hasznos élettartam.",
        "ÜZEMBE HELYEZÉSTŐL FÜGGETLENÜL: a még raktárban álló gép és a folyamatban lévő építkezés is ide tartozik!"
      ],
      exactLines: [
        "1. Ingatlanok és kapcsolódó vagyoni értékű jogok (telek, épület, raktár, bérleti jog)",
        "2. Műszaki berendezések, gépek, járművek (termelőgépek, gyártósor, teherautó)",
        "3. Egyéb berendezések, felszerelések, járművek (irodabútor, laptop, cégautó)",
        "4. Tenyészállatok (tenyészbika, fejőstehén, anyakoca – évekig szolgálnak!)",
        "5. Beruházások, felújítások (folyamatban lévő építkezés, szerelés alatti gépek)",
        "6. Beruházásokra adott előlegek (pl. gépbeszerzésre adott előleg)",
        "7. Tárgyi eszközök értékhelyesbítése"
      ],
      traps: [
        "🚨 TENYÉSZÁLLAT vs HÍZÓÁLLAT: A tenyészállat Tárgyi eszköz! A hízóállat és növendék Készlet!",
        "🚨 INGATLANHOZ KÖTÖTT BÉRLETI JOG: A tárgyi eszközök legelső során áll!",
        "🚨 GÉP ELŐLEG: Tárgyi eszközöknél szerepel, NEM a követeléseknél!"
      ]
    },
    {
      code: "BPU",
      name: "Befektetett pénzügyi eszközök",
      side: "Eszközök (A. Befektetett eszközök / III.)",
      badge: "A/III",
      summary: "Olyan pénzügyi befektetések, amelyeket TARTÓS (1 éven túli) jövedelemszerzés (osztalék, kamat) vagy befolyásolási/irányítási célból tart a cég.",
      rules: [
        "A cél a döntő: TARTÓS jövedelem vagy befolyásolás.",
        "Futamidő: 1 éven túli lejáratú kölcsönök, értékpapírok, részesedések."
      ],
      exactLines: [
        "1. Tartós részesedés kapcsolt vállalkozásban (leányvállalat)",
        "2. Tartósan adott kölcsön kapcsolt vállalkozásban",
        "3. Tartós jelentős tulajdoni részesedés",
        "4. Tartósan adott kölcsön egyéb vállalkozásban (pl. 3 évre adott kölcsön)",
        "5. Tartós hitelviszonyt megtestesítő értékpapírok (tartós kötvények)"
      ],
      traps: [
        "🚨 RÉSZVÉNY ÉS KÖTVÉNY CÉLJA: Ha tartósan megtartjuk -> BPÜ. Ha gyorsan forgatjuk/eladjuk -> Forgóeszköz értékpapír!",
        "🚨 ADOTT KÖLCSÖN: Csak az 1 éven túli kölcsön BPÜ!"
      ]
    },
    {
      code: "FORGO",
      name: "Forgóeszközök",
      side: "Eszközök (B. Forgóeszközök / I–IV.)",
      badge: "B",
      summary: "A vállalkozási tevékenységet általában 1 évnél rövidebb ideig szolgáló javak: készletek, követelések, értékpapírok és pénzeszközök.",
      rules: [
        "1 éven belüli körforgás (pénz -> készlet -> követelés -> pénz).",
        "4 fő csoportja van: I. Készletek, II. Követelések, III. Értékpapírok, IV. Pénzeszközök."
      ],
      exactLines: [
        "I. Készletek: Anyagok, Befejezetlen termelés, Késztermékek, Áruk, Göngyölegek, Készlet előlegek, Növendék- és hízóállatok",
        "II. Követelések: Vevők (szállításból), Váltókövetelések, Dolgozónak adott fizetési előleg, Visszaigényelhető adó",
        "III. Értékpapírok: Forgatási célú államkötvény/részvény, Visszavásárolt saját üzletrész!",
        "IV. Pénzeszközök: Pénztár, Valutapénztár, Elszámolási bankszámla, Csekkek"
      ],
      traps: [
        "🚨 HÍZÓSÉRTÉS: Akkor is Készlet (Forgóeszköz), ha 2 éve tartják!",
        "🚨 SAJÁT ÜZLETRÉSZ: Nem saját tőke, hanem Forgóeszköz Értékpapírok (B/III)!",
        "🚨 HASZNÁLATBA NEM VETT MUNKARUHA/SZERSZÁM: Használatba vételig Készlet (Forgóeszköz)!"
      ]
    },
    {
      code: "AIE",
      name: "Aktív időbeli elhatárolások",
      side: "Eszközök (C. Aktív időbeli elhatárolások)",
      badge: "C",
      summary: "Az időbeli összemérés elve miatti eszközoldali korrekciók: a tárgyévet illető járó bevételek vagy a jövő évet terhelő kifizetett költségek.",
      rules: [
        "Időarányos elszámolás több évet érintő tételeknél.",
        "Eszközoldal: számunkra előnyös, jövőbeli követelés jellegű pozíció."
      ],
      exactLines: [
        "1. Bevételek aktív időbeli elhatárolása (megdolgoztunk érte idén, de a pénz jövőre jön, pl. decemberi kamat)",
        "2. Költségek aktív időbeli elhatárolása (idén kifizettük, de a jövő évet terheli, pl. előre kifizetett biztosítás)",
        "3. Halasztott ráfordítások"
      ],
      traps: [
        "🚨 ELŐRE KIFIZETETT BIZTOSÍTÁS/BÉRLETI DÍJ: Költségek AIE, mert jövő évi költséget fizettünk ki idén!"
      ]
    },
    {
      code: "TOKE",
      name: "Saját tőke",
      side: "Források (D. Saját tőke / I–VII.)",
      badge: "D",
      summary: "A tulajdonosok által véglegesen rendelkezésre bocsátott tőke + a vállalkozásban hagyott múltbeli és tárgyévi adózott eredmény.",
      rules: [
        "Belső, végleges forrás (nem kell visszafizetni, mint a hitelt).",
        "Csak a megengedett elemei vehetnek fel negatív értéket!"
      ],
      exactLines: [
        "I. Jegyzett tőke (+) (cégbíróságon bejegyzett alaptőke/törzstőke)",
        "II. Jegyzett, de még be nem fizetett tőke (–) (mindig levonandó tétel!)",
        "III. Tőketartalék (+) (névérték feletti tulajdonosi befizetés, ázsió)",
        "IV. Eredménytartalék (±) (előző évek felhalmozott nyeresége vagy vesztesége)",
        "V. Lekötött tartalék (+) (jogszabály vagy döntés alapján lekötve)",
        "VI. Értékelési tartalék (+) (eszközök felértékelésének fedezete)",
        "VII. Adózott eredmény (±) (a lezárt év tárgyévi nyeresége vagy vesztesége)"
      ],
      traps: [
        "🚨 MELYIK LEHET NEGATÍV?: Csak a II. (-), a IV. (±) és a VII. (±)! A jegyzett tőke soha nem negatív!",
        "🚨 TÁRGYÉVI VESZTESÉG: A VII. Adózott eredmény sor negatív előjellel!"
      ]
    },
    {
      code: "CELTART",
      name: "Céltartalékok",
      side: "Források (E. Céltartalékok)",
      badge: "E",
      summary: "Az ADÓZÁS ELŐTTI eredmény terhére egyéb ráfordításként képzett forrás jövőbeli bizonytalan kötelezettségekre és költségekre.",
      rules: [
        "Óvatosság elve: fedezetet teremtünk a várható veszteségekre.",
        "Képzés módja: adózás előtti eredmény terhére képzik!"
      ],
      exactLines: [
        "1. Céltartalék a várható kötelezettségekre (garanciális javítások, peres ügyek, végkielégítés)",
        "2. Céltartalék a jövőbeni költségekre (időszakonként ismétlődő nagyjavítások)",
        "3. Egyéb céltartalék"
      ],
      traps: [
        "🚨 ADÓZÁS ELŐTTI vs ADÓZOTT: A céltartalékot az ADÓZÁS ELŐTTI eredmény terhére képzik, NEM az adózott eredményéből!"
      ]
    },
    {
      code: "HLK",
      name: "Hosszú lejáratú kötelezettségek",
      side: "Források (F. Kötelezettségek / II.)",
      badge: "F/II",
      summary: "Egy évnél hosszabb lejáratra kapott kölcsönök, hitelek és egyéb tartozások.",
      rules: [
        "Lejárat: a mérlegfordulónaptól számítva 1 éven túl esedékes.",
        "Külső idegen forrás."
      ],
      exactLines: [
        "1. Hosszú lejáratra kapott kölcsönök",
        "2. Tartozások kötvénykibocsátásból (pl. 5 éves kötvény)",
        "3. Beruházási és fejlesztési hitelek (pl. 10 éves hitel)",
        "4. Egyéb hosszú lejáratú hitelek és kötelezettségek",
        "5. Halasztott adókötelezettség"
      ],
      traps: [
        "🚨 1 ÉVEN TÚLI IDŐTÁV: Ami 1 éven túl jár le, HLK. Ami 1 éven belül, az azonnal RLK!"
      ]
    },
    {
      code: "RLK",
      name: "Rövid lejáratú kötelezettségek",
      side: "Források (F. Kötelezettségek / III.)",
      badge: "F/III",
      summary: "Egy éven belül esedékes elismert fizetési kötelezettségek, ahol a partner teljesített és nekünk kell fizetnünk.",
      rules: [
        "Lejárat: maximum 1 éven belül esedékes.",
        "Szállítók, bankok, dolgozók, adóhatóság felé fennálló tartozások."
      ],
      exactLines: [
        "1. Kötelezettségek áruszállításból és szolgáltatásból (Szállítók)",
        "2. Rövid lejáratú hitelek, kölcsönök (folyószámlahitel)",
        "3. Vevőktől kapott előlegek!",
        "4. Váltótartozások",
        "5. Társasági adó és egyéb adótartozások",
        "6. Bértartozások (dolgozóknak járó bér)"
      ],
      traps: [
        "🚨 VEVŐTŐL KAPOTT ELŐLEG: A leggyakoribb csapda a vizsgán! Ez RÖVID LEJÁRATÚ KÖTELEZETTSÉG, NEM követelés!",
        "🚨 SZÁLLÍTÓI TARTOZÁS: Szállító = RLK; Vevő = Követelés (Forgóeszköz)!"
      ]
    },
    {
      code: "PIE",
      name: "Passzív időbeli elhatárolások",
      side: "Források (G. Passzív időbeli elhatárolások)",
      badge: "G",
      summary: "Forrásoldali időbeli korrekciók: előre megkapott jövő évi bevételek, vagy tárgyévet terhelő, de csak jövőre kiszámlázott költségek.",
      rules: [
        "Időbeli összemérés forrásoldala.",
        "Passzív: kötelezettség jellegű pozíció a források között."
      ],
      exactLines: [
        "1. Bevételek passzív időbeli elhatárolása (előre befolyt pénz, ami a jövő évet illeti, pl. előre kapott bérleti díj)",
        "2. Költségek passzív időbeli elhatárolása (tárgyévet terhelő költség, de számla csak jövőre jön)",
        "3. Halasztott bevételek (kapott fejlesztési támogatás)"
      ],
      traps: [
        "🚨 ELŐRE KAPOTT BÉRLETI DÍJ: Mivel pénzt kaptunk egy jövőbeli időszakra, ez Passzív Időbeli Elhatárolás!"
      ]
    }
  ],

  // 32 VIZSGATÉTEL RÉSZLETES LEVEZETÉSSEL, GONDOLKODÁSI ÚTMUTATÓVAL ÉS CSAPDÁKKAL
  balanceItems: [
    {
      id: 1,
      name: "Gyártási licenc (nem ingatlanhoz kötött jog)",
      category: "IMM",
      decisionTree: [
        "1. Dologi (megfogható) tárgy? NEM, ez egy használati jog / engedély.",
        "2. Tartósan, legalább 1 éven túl szolgál? IGEN, gyártási licenc.",
        "3. Ingatlanhoz kapcsolódik? NEM, gyártáshoz kötődik -> Immateriális javak!"
      ],
      detailedWhy: "A licencek, szoftverek és gyártási jogok nem anyagi természetű javak. Mivel több éven keresztül használjuk és NEM ingatlanhoz kötődik, a számviteli törvény szerint az Immateriális javak vagyoni értékű jogai közé tartozik.",
      confusedWith: "Gyakori hiba Tárgyi eszköznek nézni: csak akkor lenne Tárgyi eszköz, ha kifejezetten INGATLANHOZ kapcsolódna (pl. bérleti jog).",
      trapAlert: null
    },
    {
      id: 2,
      name: "Üzemcsarnok",
      category: "TARGYI",
      decisionTree: [
        "1. Dologi, fizikai eszköz? IGEN, egy gyárépület.",
        "2. Tartósan, 1 éven túl szolgálja a működést? IGEN, évtizedekig áll.",
        "3. Besorolás: Ingatlan -> Tárgyi eszközök (A/II)."
      ],
      detailedWhy: "Az épületek, földterületek, üzemcsarnokok a klasszikus ingatlanok. A vállalkozási tevékenységet tartósan szolgálják, így egyértelműen a Tárgyi eszközök A/II.1. során állnak.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 3,
      name: "Iroda bérleti joga (ingatlanhoz kapcsolódó)",
      category: "TARGYI",
      decisionTree: [
        "1. Vagyoni értékű jogról van szó? IGEN (bérleti jog).",
        "2. Kapcsolódik-e ingatlanhoz? IGEN, irodabérlet!",
        "3. Aranyszabály: Ha a jog INGATLANHOZ kapcsolódik -> TÁRGYI ESZKÖZ!"
      ],
      detailedWhy: "Óriási egyetemi vizsgacsapda! Bár a 'bérleti jog' egy megfoghatatlan jog, a Számviteli Törvény külön nevesíti: az ingatlanokhoz kapcsolódó vagyoni értékű jogok a TÁRGYI ESZKÖZÖK (A/II.1. Ingatlanok és kapcsolódó vagyoni értékű jogok) sorába tartoznak, NEM az immateriális javak közé!",
      confusedWith: "A diákok 70%-a Immateriális javaknak jelöli, mert a 'jog' elvont fogalom. De az ingatlankapcsolat miatt kivételként TÁRGYI!",
      trapAlert: "🚨 CSAPDA: Ingatlanhoz kötött bérleti jog = TÁRGYI ESZKÖZ!"
    },
    {
      id: 4,
      name: "Saját fejlesztésű szoftver",
      category: "IMM",
      decisionTree: [
        "1. Dologi, kézzelfogható eszköz? NEM, digitális szellemi termék.",
        "2. Tartósan, több mint 1 évig használja a cég? IGEN.",
        "3. Besorolás: Szellemi termék -> Immateriális javak (A/I.4)."
      ],
      detailedWhy: "A számítógépes programok, szoftverek, adatbázisok a Számviteli Törvény szerint 'Szellemi termékek', amelyek az Immateriális javak A/I. főcsoportjának önálló sorát képezik.",
      confusedWith: "Ne keverd a laptoppal/hardverrel! A laptop Tárgyi eszköz, de a rajta futó program Immateriális jószág.",
      trapAlert: null
    },
    {
      id: 5,
      name: "Folyamatban lévő épületfelújítás",
      category: "TARGYI",
      decisionTree: [
        "1. Ingatlanra, épületre fordított érték? IGEN.",
        "2. Kész van már, üzembe helyezték? NEM, folyamatban van.",
        "3. Aranyszabály: Számít az üzembe helyezés? NEM! A beruházások, felújítások is TÁRGYI ESZKÖZÖK!"
      ],
      detailedWhy: "A tárgyi eszközök definíciója kimondja: dologi eszközök, FÜGGETLENÜL ATTÓL, hogy üzembe helyezésre kerültek-e vagy sem. A folyamatban lévő beruházások és felújítások a Tárgyi eszközök (A/II.5.) sorában szerepelnek.",
      confusedWith: "Sokan költségként akarják elszámolni év közben. A felújítás tőkésítendő beruházás, mérlegtétel!",
      trapAlert: null
    },
    {
      id: 6,
      name: "Tenyészbika",
      category: "TARGYI",
      decisionTree: [
        "1. Élő állatról van szó? IGEN.",
        "2. Mi a célja? Tenyésztés, utódok nemzése éveken keresztül (tartós!).",
        "3. Aranyszabály: Tenyészállat = TÁRGYI ESZKÖZ!"
      ],
      detailedWhy: "A tenyészállatok (tenyészbika, tehén, anyakoca, mén) éveken át szolgálják a termelést, nem vágásra vagy azonnali eladásra tartják őket. Ezért a számvitelben gépekhez hasonlóan Tárgyi eszköznek (A/II.4.) minősülnek és értékcsökkenést számolnak el utánuk.",
      confusedWith: "Állat lévén sokan automatikusan készletnek hinnék. Csak a növendék és hízóállat készlet!",
      trapAlert: "🚨 CSAPDA: Tenyészállat = TÁRGYI ESZKÖZ!"
    },
    {
      id: 7,
      name: "Hízósertés (2 éve tartják)",
      category: "FORGO",
      decisionTree: [
        "1. Milyen állatról van szó? HÍZÓállat (vágásra, húsra szánt).",
        "2. Számít, hogy 2 éve tartják? NEM!",
        "3. Aranyszabály: A növendék-, hízó- és egyéb állatok A TARTÁS IDEJÉTŐL FÜGGETLENÜL KÉSZLETEK (Forgóeszköz)!"
      ],
      detailedWhy: "A számviteli törvény kifejezett kivételszabálya: a növendék-, hízó- és egyéb állatokat MINDIG a Készletek (Forgóeszköz, B/I.3.) között kell kimutatni, akkor is, ha a nevelés/hízlalás 1 évnél tovább tart!",
      confusedWith: "A diákok a '2 éve tartják' szöveg miatt azt hiszik, hogy mivel >1 év, át kell tenni Tárgyi eszközbe. NEM SZABAD! Hízóállat mindig Készlet!",
      trapAlert: "🚨 CSAPDA: Hízóállat akkor is FORGÓESZKÖZ (Készlet), ha 2 évig hizlalják!"
    },
    {
      id: 8,
      name: "Betétdíjas göngyöleg",
      category: "FORGO",
      decisionTree: [
        "1. Mi ez? Raklap, sörösrekesz, betétdíjas üveg.",
        "2. Milyen vagyonelem? Kereskedelmi forgalomban lévő vásárolt készlet.",
        "3. Besorolás: Készletek -> Áruk alcsoport -> Forgóeszköz (B/I)."
      ],
      detailedWhy: "A betétdíjas göngyölegek a termékek szállítását és értékesítését segítik, a vásárolt készletek között az Áruk csoportjában szerepelnek (Forgóeszköz).",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 9,
      name: "Raktáron lévő, még használatba nem vett munkaruha",
      category: "FORGO",
      decisionTree: [
        "1. Használatba vették már? NEM, a raktárban áll.",
        "2. Aranyszabály: Használatba vételig a szerszámok, műszerek, munkaruhák KÉSZLETEK (Forgóeszköz)!"
      ],
      detailedWhy: "A Számviteli Törvény előírja, hogy az 1 évnél rövidebb élettartamú eszközöket (kis értékű szerszámok, védőruhák) a használatba vételük pillanatáig a Készletek (Forgóeszköz, B/I.1. Anyagok) között kell kimutatni.",
      confusedWith: "Sokan költségként kezelnék már raktáron. Költség csak akkor lesz, amikor kiadják használatba a dolgozónak!",
      trapAlert: null
    },
    {
      id: 10,
      name: "Kereskedelmi áru",
      category: "FORGO",
      decisionTree: [
        "1. Mi a célja? Továbbértékesítés változatlan állapotban.",
        "2. Forgási sebesség: Gyors eladás a cél.",
        "3. Besorolás: Vásárolt készletek -> Áruk -> Forgóeszköz (B/I.5)."
      ],
      detailedWhy: "Az áruk olyan készletek, amelyeket a vállalkozó változatlan formában történő továbbértékesítés céljából vásárolt. Forgóeszköz.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 11,
      name: "Leányvállalati részesedés tartós céllal",
      category: "BPU",
      decisionTree: [
        "1. Pénzügyi befektetésről (részvény, üzletrész) van szó? IGEN.",
        "2. Mi a cél? Tartós tulajdonlás, irányítás, osztalékbevétel.",
        "3. Besorolás: Tartós részesedés -> Befektetett pénzügyi eszközök (A/III.1)."
      ],
      detailedWhy: "Mivel egy másik cégben (leányvállalatban) tartós tulajdoni részesedést szereztünk azzal a céllal, hogy irányítsuk és osztalékot kapjunk, ez Befektetett Pénzügyi Eszköz.",
      confusedWith: "Ne keverd a forgatási célú részvénnyel! A tőzsdei gyors adásvételi részvény Forgóeszköz, de a tartós leányvállalat BPÜ!",
      trapAlert: null
    },
    {
      id: 12,
      name: "Más vállalkozásnak 3 évre adott kölcsön",
      category: "BPU",
      decisionTree: [
        "1. Kölcsönt adtunk másnak? IGEN, követelés jellegű.",
        "2. Mennyi a futamidő? 3 év (>1 év!).",
        "3. Aranyszabály: 1 éven túlra adott kölcsön = Befektetett pénzügyi eszköz!"
      ],
      detailedWhy: "A tartósan (1 éven túlra) adott kölcsönök kamatbevételt hoznak hosszú távon, ezért a számvitel nem a normál követelések közé sorolja őket, hanem a Befektetett Pénzügyi Eszközök (A/III.4.) közé.",
      confusedWith: "Ha 6 hónapra adnánk kölcsönt, az Forgóeszköz (Követelés) lenne. Mivel 3 évre adtuk, ezért BPÜ!",
      trapAlert: null
    },
    {
      id: 13,
      name: "Forgatási célú államkötvény",
      category: "FORGO",
      decisionTree: [
        "1. Értékpapírról van szó? IGEN, államkötvény.",
        "2. Mi a tartás célja? FORGATÁS (átmeneti likviditás-lekötés, gyors eladás).",
        "3. Besorolás: Forgóeszközök -> Értékpapírok (B/III)."
      ],
      detailedWhy: "A forgatási célból, átmeneti jelleggel vásárolt értékpapírok a Forgóeszközök B/III. csoportjába tartoznak. Ha tartós befektetés lenne a cél, akkor tartozna a befektetett pénzügyi eszközök közé.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 14,
      name: "Visszavásárolt saját üzletrész",
      category: "FORGO",
      decisionTree: [
        "1. A cég visszavásárolta a saját részvényét/üzletrészét? IGEN.",
        "2. Hová sorolja a magyar számviteli törvény?",
        "3. Aranyszabály: A Forgóeszközök közötti Értékpapírok (B/III) soron kell kimutatni!"
      ],
      detailedWhy: "Óriási csapda! Bár a nemzetközi számvitelben (IFRS) a saját részvény a saját tőkét csökkenti, a magyar Számviteli Törvény szerint a visszavásárolt saját üzletrészt a FORGÓESZKÖZÖK közötti Értékpapírok sorában kell kimutatni! (A saját tőkében csak egy 'ebből' tájékoztató sor van).",
      confusedWith: "Sokan a Saját tőkéhez sorolnák negatív tételként. Magyar számvitelben: FORGÓESZKÖZ!",
      trapAlert: "🚨 CSAPDA: Visszavásárolt saját üzletrész = FORGÓESZKÖZ (Értékpapírok)!"
    },
    {
      id: 15,
      name: "Valutapénztár",
      category: "FORGO",
      decisionTree: [
        "1. Tényleges fizetőeszközről van szó? IGEN, külföldi készpénz (euró, dollár).",
        "2. Besorolás: Pénzeszközök -> Forgóeszköz (B/IV.1 Pénztár)."
      ],
      detailedWhy: "A készpénz, valutapénztár, csekk és bankszámlapénz a Forgóeszközök leglikvidebb csoportját, a Pénzeszközöket (B/IV) alkotja.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 16,
      name: "Vevőkövetelés (áruszállításból)",
      category: "FORGO",
      decisionTree: [
        "1. Árut adtunk el számlára, de még nem fizette ki a vevő? IGEN.",
        "2. Teljesítettünk már? IGEN. A partner elismerte? IGEN.",
        "3. Besorolás: Követelések áruszállításból -> Forgóeszköz (B/II.1)."
      ],
      detailedWhy: "A jogszerűen keletkezett fizetési igény, ahol már teljesítettünk és nekünk jár a pénz egy éven belül. A legtipikusabb forgóeszköz-követelés.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 17,
      name: "Dolgozónak adott fizetési előleg",
      category: "FORGO",
      decisionTree: [
        "1. Fizetési előleget adtunk a munkavállalónak? IGEN.",
        "2. Mivel tartozik a dolgozó? A munkájával vagy visszafizetéssel.",
        "3. Besorolás: Munkavállalói tartozás -> Követelések -> Forgóeszköz (B/II)."
      ],
      detailedWhy: "A munkavállalónak kifizetett munkabér-előleg követelés a dolgozóval szemben, amíg a havi bérszámfejtés során le nem vonják. Forgóeszköz (Egyéb követelések).",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 18,
      name: "Gépbeszerzésre adott előleg",
      category: "TARGYI",
      decisionTree: [
        "1. Előleget adtunk egy partnernek? IGEN.",
        "2. Mire adtuk? GÉPBERUHÁZÁSRA (Tárgyi eszközre)!",
        "3. Aranyszabály: Az adott előleg MINDIG az adott eszköz főcsoportjában szerepel! -> TÁRGYI ESZKÖZ!"
      ],
      detailedWhy: "A legnagyobb számviteli csapdák egyike! Gazdasági tartalma szerint bár követelés (fizettünk, de még nincs gépünk), a Számviteli Törvény előírja: a beruházásra adott előlegeket a TÁRGYI ESZKÖZÖK (A/II.6.) sorában kell kimutatni!",
      confusedWith: "Sokan a Követelések (Forgóeszköz) közé tennék. Hiba! A mérlegben a Tárgyi eszközöknél szerepel!",
      trapAlert: "🚨 CSAPDA: Beruházásra/gépre adott előleg = TÁRGYI ESZKÖZ!"
    },
    {
      id: 19,
      name: "Szoftverre adott előleg",
      category: "IMM",
      decisionTree: [
        "1. Előleget fizettünk szoftver fejlesztésére/vásárlására? IGEN.",
        "2. Mire adtuk? Immateriális jószágra!",
        "3. Aranyszabály: Rendeltetés helye szerinti eszközcsoport -> IMMATERIÁLIS JAVAK!"
      ],
      detailedWhy: "Az immateriális javakra adott előlegek az Immateriális javak (A/I.6.) önálló mérlegsorát képezik. Nem a forgó követeléseknél állnak!",
      confusedWith: "Követelésekkel keverik össze. Ne feledd: adott előleg mindig oda megy, amire adtad!",
      trapAlert: "🚨 CSAPDA: Szoftverre/licencre adott előleg = IMMATERIÁLIS JÓSZÁG!"
    },
    {
      id: 20,
      name: "Anyagbeszerzésre adott előleg",
      category: "FORGO",
      decisionTree: [
        "1. Előleget fizettünk a szállítónak anyagért? IGEN.",
        "2. Mire adtuk? Alapanyagra (Készletre)!",
        "3. Aranyszabály: Készletre adott előlegként a Készletek (Forgóeszköz B/I.6) között van!"
      ],
      detailedWhy: "A készletekre adott előlegek a Készletek mérlegcsoport (B/I) záró során szerepelnek. Tehát ez is Forgóeszköz.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 21,
      name: "Vevőtől kapott előleg",
      category: "RLK",
      decisionTree: [
        "1. Pénz érkezett a vevőtől, de még NEM szállítottuk le az árut? IGEN.",
        "2. Ki tartozik kinek? MI TARTOZUNK a vevőnek az áruval vagy a pénz visszaadásával!",
        "3. Aranyszabály: Kapott előleg = RÖVID LEJÁRATÚ KÖTELEZETTSÉG!"
      ],
      detailedWhy: "A vizsgák leggyakoribb bukó kérdése! A vevőtől KAPOTT előleg NEM követelés és NEM saját tőke. Mivel a vevő már fizetett, de mi még nem teljesítettünk, kötelezettségünk van felé: RÖVID LEJÁRATÚ KÖTELEZETTSÉG (F/III.3)!",
      confusedWith: "Sokan követelésnek vagy bevételnek hiszik. Követelés csak az ADOTT előleg lehet! A kapott előleg kötelezettség!",
      trapAlert: "🚨 CSAPDA: Vevőtől KAPOTT előleg = RÖVID LEJÁRATÚ KÖTELEZETTSÉG!"
    },
    {
      id: 22,
      name: "Szállítói tartozás",
      category: "RLK",
      decisionTree: [
        "1. Számlára vettünk anyagot/árut, és még nem fizettük ki? IGEN.",
        "2. A szállító teljesített, mi elfogadtuk? IGEN, tartozunk neki pénzzel.",
        "3. Besorolás: Szállítók -> Rövid lejáratú kötelezettség (F/III.1)."
      ],
      detailedWhy: "A vevőkövetelés tökéletes tükörképe. A szállító felé fennálló elismert fizetési kötelezettségünk, amely 1 éven belül esedékes. Rövid lejáratú kötelezettség.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 23,
      name: "Társasági adó tartozás",
      category: "RLK",
      decisionTree: [
        "1. Éves társasági adó fizetési kötelezettség a NAV felé? IGEN.",
        "2. Mikor kell megfizetni? Május 31-ig (egy éven belül!).",
        "3. Besorolás: Egyéb rövid lejáratú kötelezettség (F/III)."
      ],
      detailedWhy: "A költségvetéssel (állammal) szembeni adófizetési kötelezettségek 1 éven belül esedékesek, így a Rövid lejáratú kötelezettségek közé tartoznak.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 24,
      name: "10 évre felvett beruházási hitel",
      category: "HLK",
      decisionTree: [
        "1. Bankhitelt vettünk fel? IGEN, forrásoldal (tartozás).",
        "2. Mennyi a futamidő? 10 ÉV (>1 év!).",
        "3. Besorolás: Hosszú lejáratú kötelezettségek (F/II.3)."
      ],
      detailedWhy: "Az 1 évnél hosszabb lejáratra kapott hitelek és kölcsönök a Hosszú Lejáratú Kötelezettségek közé tartoznak.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 25,
      name: "Kötvénykibocsátásból eredő 5 éves tartozás",
      category: "HLK",
      decisionTree: [
        "1. Kötvényt bocsátottunk ki pénzszerzés céljából? IGEN, a kötvénytulajdonosok felé tartozunk.",
        "2. Mennyi a lejárata? 5 év (>1 év!).",
        "3. Besorolás: Hosszú lejáratú kötelezettség (F/II.2 Tartozások kötvénykibocsátásból)."
      ],
      detailedWhy: "Ha a cég kötvényt bocsát ki, idegen forráshoz jut, amit 1 éven túl kell visszafizetnie a befektetőknek. Hosszú lejáratú kötelezettség.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 26,
      name: "Várható garanciális kötelezettségre képzett összeg",
      category: "CELTART",
      decisionTree: [
        "1. Jövőbeli bizonytalan garanciális javítások fedezetére képeztük? IGEN.",
        "2. Az adózás előtti eredmény terhére képeztük forrásként? IGEN.",
        "3. Besorolás: Céltartalékok (E. főcsoport)."
      ],
      detailedWhy: "A céltartalék az adózás előtti eredmény terhére képzett forrás a várható veszteségekre és kötelezettségekre, hogy ne mutassunk ki bizonytalan nyereséget. A forrásoldal E. főcsoportja.",
      confusedWith: "Ne keverd a Saját tőke tartalékaival (eredménytartalék, tőketartalék)! A céltartalék önálló forrásfőcsoport!",
      trapAlert: null
    },
    {
      id: 27,
      name: "Jegyzett tőke",
      category: "TOKE",
      decisionTree: [
        "1. A cégbíróságon bejegyzett tulajdonosi alaptőke? IGEN.",
        "2. Besorolás: Saját tőke D/I. sora (+ előjellel)."
      ],
      detailedWhy: "A tulajdonosok által a vállalkozás alapításakor vagy tőkeemeléskor rendelkezésre bocsátott tőke névértéke. A Saját tőke alapvető eleme.",
      confusedWith: null,
      trapAlert: null
    },
    {
      id: 28,
      name: "Tárgyévi veszteség",
      category: "TOKE",
      decisionTree: [
        "1. Az üzleti év végén az összes ráfordítás meghaladta a bevételeket? IGEN, veszteség.",
        "2. Hol jelenik meg a mérlegben?",
        "3. Aranyszabály: A Saját tőkén belül a VII. Adózott eredmény sorban NEGATÍV (-) előjellel!"
      ],
      detailedWhy: "A veszteség csökkenti a saját vagyont. A mérleg forrásoldalán a Saját tőke (D/VII.) Adózott eredmény sorában szerepel negatív előjellel.",
      confusedWith: "Sokan kötelezettségnek vagy eszköznek nézik, mert negatív. A Saját tőkében áll mínusszal!",
      trapAlert: "🚨 CSAPDA: Veszteség = SAJÁT TŐKE (negatív Adózott eredmény)!"
    },
    {
      id: 29,
      name: "Előre kifizetett, a következő évet terhelő biztosítási díj",
      category: "AIE",
      decisionTree: [
        "1. Mi fizettünk ki pénzt idén? IGEN.",
        "2. Melyik évet terheli a költség? A JÖVŐ ÉVET!",
        "3. Aranyszabály: Költségek aktív időbeli elhatárolása -> AKTÍV IDŐBELI ELHATÁROLÁS (C.2)!"
      ],
      detailedWhy: "Mivel a pénz már kiment, de a biztosítás védelme a következő évre vonatkozik, az idei évi költséget csökkenteni kell, és a jövő évet terhelő részt Aktív Időbeli Elhatárolásként kell kimutatni az eszközök között.",
      confusedWith: "Gyakori hiba összekeverni a Passzívval. Ha MI FIZETÜNK előre = Aktív. Ha NEKÜNK FIZETNEK előre = Passzív!",
      trapAlert: null
    },
    {
      id: 30,
      name: "Előre kapott, a következő évre járó bérleti díj",
      category: "PIE",
      decisionTree: [
        "1. Pénzt kaptunk a bérlőtől idén? IGEN.",
        "2. Melyik év bevétele ez valójában? A KÖVETKEZŐ ÉVÉ!",
        "3. Aranyszabály: Bevételek passzív időbeli elhatárolása -> PASSZÍV IDŐBELI ELHATÁROLÁS (G.1)!"
      ],
      detailedWhy: "A pénz már megérkezett a bankszámlánkra, de még nem dolgoztunk meg érte, mert a bérleti időszak a következő évben esedékes. Ezért a forrásoldalon Passzív Időbeli Elhatárolásként (G.) szerepel.",
      confusedWith: "Aktívval keverik. Jegyezd meg: pénzt kaptunk jövő évi szolgáltatásért -> PIE!",
      trapAlert: null
    },
    {
      id: 31,
      name: "Jegyzett, de még be nem fizetett tőke",
      category: "TOKE",
      decisionTree: [
        "1. A tulajdonosok vállalták a tőke befizetését a cégbíróságnál, de még nem fizették be? IGEN.",
        "2. Hol jelenik meg a mérlegben?",
        "3. Aranyszabály: A Saját tőke D/II. sorában MINDIG KIVONANDÓ (-) tételként!"
      ],
      detailedWhy: "A tulajdonosok bejelentett, de még ténylegesen át nem utalt tőkerésze. Amíg nem fizetik be, levonandó tételként csökkenti a saját tőkét (D/II).",
      confusedWith: "Sokan a követelések közé akarják sorolni (mert a cég követeli a tulajdonostól). A mérlegben a SAJÁT TŐKÉT CSÖKKENTI!",
      trapAlert: "🚨 CSAPDA: Jegyzett be nem fizetett tőke = SAJÁT TŐKE (negatív előjellel)!"
    },
    {
      id: 32,
      name: "Üzleti vagy cégérték (Goodwill)",
      category: "IMM",
      decisionTree: [
        "1. Egy működő céget vásároltunk meg drágábban, mint a vagyona könyv szerinti értéke? IGEN.",
        "2. Megfogható fizikai dolog a jó hírnév és ügyfélkör? NEM.",
        "3. Besorolás: Üzleti vagy cégérték -> Immateriális javak (A/I.5)."
      ],
      detailedWhy: "A cégvásárláskor a piaci vételár és az átvett eszközök-források tiszta értéke közötti többlet a cég jó hírnevét, ügyfélkörét (Goodwill) jelenti. Ez a számvitelben önálló mérlegsor az Immateriális javak között.",
      confusedWith: null,
      trapAlert: null
    }
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
