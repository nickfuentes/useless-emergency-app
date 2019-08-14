const express = require("express");
const app = express();
const session = require("express-session");
const http = require("http");
const path = require("path");

const indexRouter = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

global.__basedir = __dirname;
app.set("views", path.join(__dirname, "views"));
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
