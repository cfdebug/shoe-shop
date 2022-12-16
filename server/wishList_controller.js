const express = require("express");
const wishListRoutes = express.Router();
const dbo = require("./models");

wishListRoutes.post("/add", (req, res) => {
    
    dbo.Wish.create(req.body)
    .then(res.send("Add Successful"))
   });

wishListRoutes.get("/", async (req, res)=> {
     await dbo.Wish.find()
    .then((wishes) => {
        res.json(wishes)
    })
})

wishListRoutes.delete("/delete/:id", async (req, res)=> {
    await dbo.Wish.findByIdAndDelete(req.params.id)
   .then(() => {
       res.send("Item Deleted from Wishlist")
   })
})



   module.exports = wishListRoutes