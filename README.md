1.1 - Live Demo https://portal-ogloszeniowy.vercel.app
# 🚀 Portal Ogłoszeniowy CloudStack
Zaawansowana aplikacja webowa typu marketplace z pełną integracją chmurową.

## 🌟 Główne Funkcje
- **Dynamiczne Ogłoszenia:** Wyświetlanie treści w czasie rzeczywistym z bazy NoSQL.
- **Multi-Cloud Storage:** Separacja danych tekstowych (Firebase) od multimediów (Cloudinary).
- **Admin Panel:** Zabezpieczony system logowania dla administratora (Firebase Auth).
- **Cloudinary Integration:** Automatyczny upload i optymalizacja zdjęć bezpośrednio do chmury.

## 🛠️ Stack Technologiczny
- **Frontend:** HTML5, CSS3 (Custom Styling), JavaScript (ES6+)
- **Backend-as-a-Service:** Firebase (Firestore, Auth)
- **Media Cloud:** Cloudinary API
- **Deployment:** Vercel (CI/CD)

## 🔒 Bezpieczeństwo i Dobre Praktyki
- **Environment Variables:** Wrażliwe dane (API Keys) są w pełni odizolowane w pliku `.env` i nie są publikowane w repozytorium.
- **Security Rules:** Zastosowano reguły dostępu Firebase ograniczające uprawnienia do bazy.
- **Secure Delivery:** Wszystkie media serwowane są przez protokół HTTPS.

## 📁 Struktura Projektu
Projekt znajduje się w folderze `Strona_9/public`. 
- `index.html` - Główna struktura i logika aplikacji.
- `style.css` - Warstwa wizualna.
- `klucze.env` - Konfiguracja środowiskowa (lokalnie).

---

## 📝 Author
**Mateusz User**  
© 2026  

## 📄 License
MIT License - see LICENSE file for details.

---
*Projekt stworzony jako element profesjonalnego portfolio programistycznego.*
