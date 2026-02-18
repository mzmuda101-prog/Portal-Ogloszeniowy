1.1 - Live Demo https://portal-ogloszeniowy.vercel.app
# 🚀 Multi-Cloud Marketplace Portal
Zaawansowany portal ogłoszeniowy wykorzystujący architekturę rozproszoną w chmurze.

## 🛠️ Stack Technologiczny
- **Frontend:** JavaScript / CSS3
- **Baza Danych (Tekst):** Firebase Firestore (Real-time updates)
- **Media Storage (Zdjęcia):** Cloudinary API (Automatyczna optymalizacja obrazów)
- **Hosting:** Vercel (CI/CD zintegrowane z GitHub)

## 🔐 Kluczowe Rozwiązania
- **Bezpieczeństwo:** Pełna separacja kluczy API przy użyciu zmiennych środowiskowych (`.env`).
- **Cloud Integration:** Dynamiczne przesyłanie zdjęć do zewnętrznej chmury Cloudinary z natychmiastowym zapisem linku w bazie Firestore.
- **Responsive Design:** Strona w pełni dostosowana do urządzeń mobilnych.

## 📖 Jak uruchomić lokalnie?
1. Sklonuj repozytorium.
2. Stwórz plik `.env` i dodaj swoje klucze Firebase oraz Cloudinary.
3. Uruchom `npm install` oraz `npm start`.
