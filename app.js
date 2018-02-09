const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
module.exports = app;

const options = {
  url: "https://api.github.com/zen",
  headers: {
    "User-Agent": "request"
  }
};

app.set("port", process.env.PORT || 3000);
app.set("view engine", "pug");
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  request(options, (err, response, body) => {
    res.render("index", {
      title: "Kubezen: Dev Wisom",
      message: body
    });
  });
});
