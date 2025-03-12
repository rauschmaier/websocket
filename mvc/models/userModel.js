// Eine Beispiel-Datenbank mit einigen Benutzern
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];

/**
 * Gibt alle vorhandenen Benutzer zurück.
 *
 * @returns {Array} Liste aller Benutzer.
 */
function getAllUsers() {
    return users;
}

/**
 * Fügt einen neuen Benutzer hinzu.
 *
 * @param {string} name - Der Name des neuen Benutzers.
 * @returns {Object} Der neu erstellte Benutzer.
 */
function addUser(name) {
    // Erstelle ein neues Benutzerobjekt mit einer automatisch generierten ID
    const newUser = { id: users.length + 1, name: name };
    users.push(newUser);
    return newUser;
}

// Exportiere die Funktionen, damit sie in anderen Dateien genutzt werden können
module.exports = {
    getAllUsers: getAllUsers,
    addUser: addUser
};

