const express = require("express");
const wishListRoutes = express.Router();
const dbo = require("./models");

wishListRoutes.post("/add", (req, res) => {
    // This correctly logs the brand name, so the structure is present
    console.log("Data "+ req.body.brand) 
    
    dbo.Wish.create(req.body)
    .then(res.send="Hi")

   });

wishListRoutes.get("/",(req, res)=> {
    dbo.Wish.find()
    .then((wishes) => {
        res.json(wishes)
    })
})



   module.exports = wishListRoutes