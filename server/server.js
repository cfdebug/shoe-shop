const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/wishList", require("./wishList_controller"));
app.use(express.urlencoded({ extended: false }))

app.get("/", (req, res) => {
    res.send("Express on Vercel");
  });
 
app.listen(5000)
