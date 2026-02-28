# 🛒 Portal Ogłoszeniowy CloudStack

Aplikacja marketplace z panelem administratora, publikacją ogłoszeń i integracją usług chmurowych (`Firebase + Cloudinary`).

## 🌍 Live Demo
🔗 https://portal-ogloszeniowy.vercel.app

## ✨ Funkcje
- ✅ Logowanie administratora (Firebase Auth).
- ✅ Dodawanie, wyświetlanie i usuwanie ogłoszeń (Firestore).
- ✅ Upload zdjęć przez Cloudinary (max 4 zdjęcia).
- ✅ Filtrowanie ogłoszeń po kategorii.
- ✅ Modal podglądu zdjęć + prosta karuzela.

## 🧰 Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js + Express
- Baza danych i auth: Firebase (Firestore, Auth)
- Media: Cloudinary
- Hosting/Deploy: Vercel

## 📁 Struktura projektu
- `Strona_9/public/index.html` - interfejs i logika frontendu.
- `Strona_9/public/style.css` - stylowanie aplikacji.
- `Strona_9/server.js` - serwer Express + endpoint `/config`.
- `Strona_9/package.json` - zależności backendu.

## ⚙️ Konfiguracja lokalna
1. Przejdź do katalogu `Strona_9`.
2. Utwórz plik `klucze.env` i dodaj:
   - `FIREBASE_API_KEY`
   - `FIREBASE_AUTH_DOMAIN`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_STORAGE_BUCKET`
   - `FIREBASE_MESSAGING_SENDER_ID`
   - `FIREBASE_APP_ID`
3. Zainstaluj zależności: `npm install`.
4. Uruchom serwer: `node server.js`.

## 🔐 Bezpieczeństwo
- Nie commituj pliku `klucze.env`.
- Ustaw reguły Firebase Auth i Firestore zgodnie z wymaganymi rolami.

## 🗺️ Roadmap
- [ ] Podział kodu JS na mniejsze moduły.
- [ ] Lepsze logowanie błędów w backendzie.
- [ ] Rozszerzenie panelu admina o edycję istniejących ogłoszeń.

## 👤 Autor
Mateusz User

## 📄 Licencja
MIT
