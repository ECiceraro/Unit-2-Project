const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    sides: String,
    ingredients: String,
    img: String,
    cooking1: String,
    cooking2: String,
    cooking3: String,
    cooking4: String,
    cooking5: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);


module.exports = Recipe;
