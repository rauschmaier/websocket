# WebSocket-Aufgabe

Die beiden Node-Anwendungen (serverjson.js & index.html) und (socketserverjson.js & socketindex.html) zeigen jeweils den Inhalt der JSON-Datei angestellte.json an. Wenn Änderungen an der Datei vorgenommen werden, werden diese automatisch auf der Website angezeigt. Dies geschieht durch unterschiedliche Implementierungsansätze.
Untersuchen Sie beide Anwendungen hinsichtlich ihrer Implementierung. Nennen Sie wesentliche Unterschiede und erläutern Sie, welche der beiden Ansätze unter welchen Umständen vorzuziehen ist.

## Aufgabe:
In der dritten Anwendung (websocket.js & indexaufgabe.html) hat der Client die Möglichkeit, mit dem Server zu kommunizieren.
Ändern Sie den Servercode so, dass:

    - Auf eine Nachricht mit dem Inhalt „ping“ eine Antwort mit „pong“ gesendet wird,
    - Auf eine Nachricht mit dem Inhalt „data“ die Antwort „some Data“ gesendet wird,
    - Auf alle anderen Nachrichten eine Antwort mit „unknown message“ gesendet wird.
