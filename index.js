const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

// app.use((req, res, next) => {
//   res.send("Sitio en mantenimiento");
// });

const fs = require("fs");
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hola Node.js");
});

app.get("/contacto", (req, res) => {
  res.send("Pagina de contacto");
});

app.get("/frutas/all", (req, res) => {
  const frutas = fs.readFileSync(path.join(__dirname, "frutas.json"), "utf-8");

  // const frutas = [{ id: 1, nombre: "Manzana" }];
  res.send(frutas);
});

app.get("*", (req, res) => {
  res.status(404).send("No existe ese recurso");
});

// app.use((req, res, next) => {
//   res.status(404).send("No existe esa ruta");
// });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
