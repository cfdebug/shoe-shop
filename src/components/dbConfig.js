// require mongoose
import mongoose from 'mongoose';
// creating shorthand for the Schema constructor
const {Schema} = mongoose

// wishlist schema

const wishSchema = new Schema ({
    brand : String,
    colorway: String,
    estimatedMarketValue: Number,
    gender: String,
    image:{type: String, default: 'No image available for this product'},
    links: {
        goat: {String, default:'item not available now'},
        flightClub: {String, default:'item not available now'},
        stadiumGoods: {String, default:'item not available now'}
    },
    name: String,
    releaseDate: String,
    releaseYear: String,
    retailPrice: Number,
    silhouette: String,
    sku: String,
    story: {String, default: 'No story available for this product'}
})
// create models and export
const Wish = mongoose.model('Wish', wishSchema)
module.exports = Wish