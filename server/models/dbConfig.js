// require mongoose
const mongoose= require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose

// wishlist schema

const linkSchema = new Schema({
    goat: String,
    flightClub: String,
    stadiumGoods: String
})

const wishSchema = new Schema({
    brand: String,
    colorway: String,
    estimatedMarketValue: Number,
    gender: String,
    image: String,
    links: { type: linkSchema },
    name: String,
    releaseDate: String,
    releaseYear: String,
    retailPrice: Number,
    silhouette: String,
    sku: String,
    story: String 
})

// const Link = mongoose.model('Link', linkSchema)
module.exports = mongoose.model('Wish', wishSchema)