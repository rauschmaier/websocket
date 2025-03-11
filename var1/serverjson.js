const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

// Statische Dateien ausliefern (setzt voraus, dass index.html im gleichen Ordner liegt)
app.use(express.static(path.join(__dirname)));

// Weiterleitung von "/" zu "index.html"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API-Endpunkt zum Abrufen der Angestellten aus der JSON-Datei
app.get('/angestellte', (req, res) => {
    fs.readFile(path.join(__dirname, 'angestellte.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Fehler beim Lesen der JSON-Datei:', err);
            res.status(500).json({ error: 'Fehler beim Laden der Daten' });
            return;
        }
        try {
            const angestellte = JSON.parse(data);
            res.json(angestellte);
        } catch (parseErr) {
            console.error('Fehler beim Parsen der JSON-Datei:', parseErr);
            res.status(500).json({ error: 'Fehler beim Verarbeiten der Daten' });
        }
    });
});

app.listen(3000, () => {
    console.log('Server läuft auf http://localhost:3000');
});
