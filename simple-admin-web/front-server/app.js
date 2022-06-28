const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("./routes/admin");

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", admin);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});