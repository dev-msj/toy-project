const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const signin = require("./routes/signin");
const dashboard = require("./routes/dashboard");

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use("/", signin);
app.use("/dashboard", dashboard);

app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});