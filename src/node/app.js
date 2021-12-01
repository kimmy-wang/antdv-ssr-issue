const express = require("express");
const path = require("path");
const fs = require("fs");
const { renderToString } = require("vue/server-renderer");
const cors = require("cors");
const manifest = require("../../dist/node/ssr-manifest.json");
const homePath = path.join(
  __dirname,
  "../../dist",
  "node",
  manifest["home.js"]
);
const createHomeApp = require(homePath).default;

const app = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options("*", cors());

app.use(
  "/img",
  express.static(path.join(__dirname, "../../dist/client", "img"))
);
app.use("/js", express.static(path.join(__dirname, "../../dist/client", "js")));
app.use(
  "/video",
  express.static(path.join(__dirname, "../../dist/client", "video"))
);
app.use(
  "/css",
  express.static(path.join(__dirname, "../../dist/client", "css"))
);
app.use(
  "/favicon.ico",
  express.static(path.join(__dirname, "../../dist/client", "favicon.ico"))
);
app.use(
  "/manifest.json",
  express.static(path.join(__dirname, "../../dist/client", "manifest.json"))
);

const homeTemplate = fs.readFileSync(
  path.join(__dirname, "../../dist/client/home.html"),
  "utf-8"
);

app.get("/", async (req, res) => {
  const { app } = createHomeApp();

  const appContent = await renderToString(app);

  const html = homeTemplate
    .toString()
    .replace('<div id="app">', `<div id="app">${appContent}`);

  res.setHeader("Content-Type", "text/html");
  res.send(html);
});

module.exports = app;
