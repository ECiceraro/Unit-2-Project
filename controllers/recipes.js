// Bringing in required app and variables
const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes.js')







//_______________________
// Routes
//_______________________

// New Recipe Route
router.get('/new', (req,res) => {
    res.render('recipes/new.ejs')
})

// Recipe Index Page
router.get('/', (req,res) =>{
    res.render('recipes/index.ejs');
})

// Show Routes
router.get('/:id', (req,res) => {
    res.render('recipes/show.ejs')
})

// Create/Post Route
router.post('/', (req,res) => {
    Recipes.create(req.body, (error, createdRecipe) => {
        res.redirect('recipes/index.ejs')
    })
})






module.exports = router;
