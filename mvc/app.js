const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

app.set("view engine", "ejs"); // EJS als Template-Engine
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.get("/", (req, res) => {
    res.redirect("/users");
});
app.get("/", (req, res) => {
    res.render("index", { title: "Home" });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server läuft auf Port ${PORT}`));
