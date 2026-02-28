# Portal Ogłoszeniowy CloudStack

Live demo: https://portal-ogloszeniowy.vercel.app

Aplikacja marketplace z panelem admina, publikacją ogłoszeń oraz integracją Firebase + Cloudinary.

## Funkcje
- Logowanie administratora (Firebase Auth).
- Dodawanie/wyświetlanie/usuwanie ogłoszeń (Firestore).
- Upload zdjęć przez Cloudinary (do 4 zdjęć na ogłoszenie).
- Filtrowanie ogłoszeń po kategorii.
- Podgląd zdjęć (modal + prosta karuzela).

## Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- Baza i auth: Firebase (Firestore, Auth)
- Media: Cloudinary

## Struktura projektu
- `Strona_9/public/index.html` - UI i logika frontendu.
- `Strona_9/public/style.css` - stylowanie interfejsu.
- `Strona_9/server.js` - serwer Express i endpoint `/config`.
- `Strona_9/package.json` - zależności backendu.

## Konfiguracja lokalna
1. Przejdź do `Strona_9`.
2. Utwórz plik `klucze.env` z kluczami Firebase:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
3. Zainstaluj zależności: `npm install`.
4. Uruchom serwer: `node server.js`.

## Bezpieczeństwo
- Nie commituj `klucze.env`.
- Ustaw reguły Firestore i Firebase Auth zgodnie z rolami dostępu.
