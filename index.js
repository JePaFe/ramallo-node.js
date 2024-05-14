const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Hola Node.js");
});

app.get("/contacto", (req, res) => {
  res.send("Pagina de contacto");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
