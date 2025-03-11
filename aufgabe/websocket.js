const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3001 });

wss.on('connection', ws => {
    console.log('Ein neuer WebSocket-Client verbunden');

    // Wenn eine Nachricht empfangen wird, wird die message-Funktion aufgerufen
    ws.on('message', (message) => messageHandler(message, ws));

    ws.on('close', () => {
        console.log('WebSocket-Client getrennt');
    });
});

// Die messageHandler Funktion verarbeitet die empfangene Nachricht
function messageHandler(data, ws) {
    try {
        const decodedMessage = data.toString();
        console.log('Nachricht vom Client erhalten:', decodedMessage );

    } catch (err) {
        console.error('Fehler beim Verarbeiten der Nachricht:', err);
        ws.send(JSON.stringify({
            status: 'error',
            message: 'Fehler beim Verarbeiten der Nachricht'
        }));
    }
}

