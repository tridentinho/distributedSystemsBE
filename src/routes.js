const express = require("express");
const routes = express();

routes.use(express.json());

routes.get("/", (req, res) => {
    return res.json({ message: "Hello World" });
});

module.exports = routes;