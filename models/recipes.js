const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    sides: { type: String, required: true },
    ingredients: { type: String },
    img: { type: String},
    cooking1: { type: String},
    cooking2: { type: String},
    cooking3: { type: String},
    cooking4: { type: String},
    cooking5: { type: String}
});

const Recipe = mongoose.model('Recipe', recipeSchema);


module.exports = Recipe;
