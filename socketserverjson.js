const express = require('express');
const WebSocket = require('ws');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Route für Weiterleitung auf index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'socketindex.html'));
});

// API-Endpunkt für Angestellte (für die SetInterval-Variante)
app.get('/angestellte', (req, res) => {
    fs.readFile(path.join(__dirname, 'angestellte.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Fehler beim Laden der Daten');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// WebSocket-Server für Echtzeit-Updates
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', ws => {
    console.log('Neuer WebSocket-Client verbunden');

    // Daten aus der JSON-Datei abrufen und senden
    const sendData = () => {
        fs.readFile(path.join(__dirname, 'angestellte.json'), 'utf8', (err, data) => {
            if (err) {
                console.error('Fehler beim Lesen der JSON-Datei:', err);
                return;
            }
            ws.send(data);
        });
    };

    sendData(); // Beim ersten Verbinden direkt Daten senden

    // Überwachung auf Änderungen in der Datei (alle 5 Sekunden als Beispiel)
    setInterval(sendData, 5000);

    ws.on('close', () => console.log('WebSocket-Client getrennt'));
});

// Server starten
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
