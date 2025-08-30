const express = require("express");
const cors = require("cors");
require("dotenv").config();

var path = require("path");

const app = express();

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// EJS Views for SSR rendering
// app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

var corsOptions = {
  origin: "http://localhost:5173",
};

app.use(cors(corsOptions));

const routes = require("./routesConfig.js");
// const db = require('./models')

// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db");
// });

Object.entries(routes).forEach(([route, handler]) => {
  app.use(route, handler);
});

// Ruta de bienvenida
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Coffe Shop application" });
});

// Middleware de manejo de errores
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({ error: true, message: "Algo salió mal en el servidor." });
// });

module.exports = app;
