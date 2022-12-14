const express = require("express");
const wishListRoutes = express.Router();
const dbo = require("./models");
const ObjectId = require("mongodb").ObjectId;

wishListRoutes.post("/add", (req, res) => {
    
    dbo.Wish.create(req.body)
    .then(res.send("Hi"))
    console.log("Hello"+ req.body.brand)
   });

wishListRoutes.get("/",(req, res)=> {
    dbo.Wish.find()
    .then((wishes) => {
        res.json(wishes)
    })
})



   module.exports = wishListRoutes