require('dotenv').config({ path: './klucze.env' });                       // Ładuje klucze z pliku .env do pamięci serwera
const express = require('express');                 // Importuje framework do budowy serwera
const cors = require('cors');                       // Pozwala Twojej stronie (Frontend) gadać z serwerem (Backend)
const path = require('path');                       // Narzędzie do zarządzania ścieżkami plików

const app = express();                              // Tworzy aplikację serwerową
const PORT = process.env.PORT || 3000;              // Ustawia port (3000 lub taki z .env)

app.use(cors());                                    // Włącza system przepustek (bezpieczeństwo)
// Mówimy serwerowi, że Twoja strona jest w folderze public
app.use(express.static(path.join(__dirname, 'public')));

// --- TRASA KONFIGURACYJNA ---
// To jest "okienko", przez które Twoja strona pobierze klucze
app.get('/config', (req, res) => {
    res.json({
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID, // <--- TA LINIA JEST KLUCZOWA
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID
    });
});

// Uruchomienie serwera
app.listen(PORT, () => {
    console.log(`--- SERWER DZIAŁA! ---`);
    console.log(`Link: http://localhost:${PORT}`);
    console.log(`Środowisko: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Firebase projectId: ${process.env.FIREBASE_PROJECT_ID ? 'OK' : 'BRAK (sprawdź klucze.env)'}`);
});
