# Számvitel Alapjai ZH1 – Interaktív Mestertréner & Vizsgaszimulátor

Egyetemi szintű (BGE / Corvinus / ELTE / BME) interaktív számvitel ZH felkészítő webalkalmazás, amely nulláról segít felkészülni az elméleti beugrókra, a mérlegtétel-besorolásra, a gazdasági események típusaira és a számításos mérleg-/eredménykimutatás feladatokra.

## 🚀 Főbb funkciók

1. **Elméleti Villámtréner & Csapdavadász:**
   - 20 darab típusvizsga Igaz/Hamis kérdés azonnali válasszal és részletes indoklással.
   - Összecsukható Kulcsfogalom- és Memóriakártyák (számvitel céljai, leltár vs. mérleg, vagyonelemek).
2. **Mérlegtétel-besoroló Tréner:**
   - 32 valós egyetemi mérlegtétel besorolása a 10 mérlegfőcsoportba egyetlen kattintással.
   - Szűrők: Hátralévő, Tévesztett és Összes tétel.
3. **Gazdasági Események Típusmeghatározója:**
   - 18 gazdasági esemény 4 alaptípus és 2 összetett típus szerinti besorolása.
   - Képlet, mérlegfőösszeg változása (+, -, 0) és érintett könyvviteli számlák részletes magyarázata.
4. **Interaktív Számítások & Mérlegek:**
   - Hiányos mérlegek levezetése a mérlegegyenlőség alapján ($Eszközök = Források$).
   - Negatív adózott eredmény és saját tőke kalkuláció.
   - Összköltség és forgalmi költség eljárású eredménykimutatások.
   - Az eredmény 3 fajtája (számított, realizált, pénzügyileg realizált).
   - Mezőnkénti validáció és lépésről lépésre levezetés megtekintése.
5. **Éles Próba-ZH Szimulátor:**
   - 20 feladatos vizsga véletlenszerű feladatokkal (5 elmélet, 6 besorolás, 5 esemény, 4 számítás).
   - 45 perces visszaszámláló időzítő.
   - Egyetemi osztályzat (1–5), százalékos értékelés és tételes hiba-áttekintő.
6. **Mindig elérhető Puskasáv (Drawer):**
   - Mérlegséma (A–G), képletgyűjtemény és a 8 leggyakoribb egyetemi vizsgacsapda.

## 💾 Adatmentés
- A kitöltött feladatok automatikusan mentésre kerülnek a böngésző helyi tárhelyében (`localStorage`), így frissítés (reload) után sem vesznek el.
- Bármikor nullázható a fejlécben lévő *Reset* gombbal.

## 🌐 Telepítés és Futtatás
Az alkalmazás tiszta HTML/CSS/JavaScript, közvetlenül megnyitható vagy deployolható Vercelre:
```bash
npx vercel
```
vagy helyi szerverrel:
```bash
python -m http.server 3000
```
