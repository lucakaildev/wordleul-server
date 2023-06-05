const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/routes.js")

const server = express();
dotenv.config();
server.use(express.json());
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://wordleul-client-production.up.railway.app/");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.c0gud.mongodb.net/Cluster0?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("db connection sucessful");
  })
  .catch((err) => {
    console.log(err);
  });

server.use("/", router)

server.listen(process.env.PORT || 3000, (req, res) => {
  console.log("Server running");
});
