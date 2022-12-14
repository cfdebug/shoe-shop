const express = require("express");
const wishListRoutes = express.Router();
const dbo = require("./models");
const ObjectId = require("mongodb").ObjectId;

wishListRoutes.get("/",(req, res)=> {
    dbo.Wish.find()
    .then((wishs) => {
        res.json(wishs)
    })
})

wishListRoutes.post("/add", (req, res) => {
    dbo.Wish.create(req.body)
    console.log(req.body)
   });

   module.exports = wishListRoutes