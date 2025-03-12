const UserModel = require("../models/userModel");

/**
 * Rendert die Benutzerliste.
 *
 * @param {Object} req - Das Request-Objekt.
 * @param {Object} res - Das Response-Objekt.
 */
function getUsers(req, res) {
    const users = UserModel.getAllUsers();
    res.render("index", { title: "User List", users });
}

/**
 * Fügt einen neuen Benutzer hinzu und leitet zur Benutzerliste weiter.
 *
 * @param {Object} req - Das Request-Objekt mit den Formulardaten.
 * @param {Object} res - Das Response-Objekt.
 */
function addUser(req, res) {
    const name = req.body.name;
    
    if (name) {
        UserModel.addUser(name);
    }

    res.redirect("/users");
}

// Export der Funktionen
module.exports = {
    getUsers: getUsers,
    addUser: addUser
};

