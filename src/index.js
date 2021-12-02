require("dotenv").config();

const express = require("express");
// const cookieParser = require("cookie-parser");
const cors = require("cors");

const routes = require("./routes");
const app = express();
// require("../config/dbConnection");

app.use(cors({ credentials: true, origin: [`${process.env.FRONTEND}`]}));
// app.use(cookieParser());
app.use(routes);


const server = app.listen(process.env.PORT, function () {
  console.log(`Server on em: http://localhost:${process.env.PORT}/`);
});

const socket = require("socket.io")(server, {
  cors: {
    origin: `${process.env.FRONTEND}`,
    methods: ["GET", "POST"]
  }
});
const socketRouter = require('./namespaces')(socket)

module.exports = app;



