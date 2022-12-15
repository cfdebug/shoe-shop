// require mongoose
const mongoose = require("mongoose");
// creating shorthand for the Schema constructor
const { Schema } = mongoose


// links child schema
const linkSchema = new Schema({
    goat: String,
    flightClub: String,
    stadiumGoods: String
})
const Link = mongoose.model('Link', linkSchema)

// wish schema
const wishSchema = new Schema({
    brand: String,
    colorway: String,
    estimatedMarketValue: Number,
    gender: String,
    image: String,
    link: {
        type:{Link}
    },
    name: String,
    releaseDate: String,
    releaseYear: String,
    retailPrice: Number,
    silhouette: String,
    sku: String,
    story: String
})

const Wish = mongoose.model('Wish', wishSchema)
// const doc = await Wish.findOne().populate('link');
// doc.child
module.exports = Wish