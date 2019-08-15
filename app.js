const functions = require("firebase-functions");
const express = require("express");
const app = express();
const session = require("express-session");
const http = require("http");
const path = require("path");

const mustacheExpress = require("mustache-express");
const VIEWS_PATH = path.join(__dirname, "/views");

const indexRouter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.engine("mustache", mustacheExpress(VIEWS_PATH + "/partials", ".mustache"));
app.set("views", VIEWS_PATH);
app.set("view engine", "mustache");

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true
  })
);

app.use("/", indexRouter);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

const port = normalizePort(process.env.PORT || "3000");
app.set("port", port);
app.listen(port);
exports.app = functions.https.onRequest(app);
