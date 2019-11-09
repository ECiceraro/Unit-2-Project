// Bringing in required app and variables
const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes.js')

//_______________________
// Routes
//_______________________

// New Recipe Route
router.get('/new', (req,res) => {
    res.render(
        'recipes/new.ejs',
        {
            username: req.session.username
        }
    )
})

// Recipe Index Page
router.get('/', (req,res) => {
    Recipes.find({}, (error, allRecipes) => {
        res.render(
            'recipes/index.ejs',
            {
                recipes: allRecipes,
                username: req.session.username
            }
        );
    })
})

// Show Routes
router.get('/:id', (req,res) => {
    Recipes.findById(req.params.id, (error, foundRecipe) => {
        res.render(
            'recipes/show.ejs',
            {
                recipe: foundRecipe,
                username: req.session.username
            }
        )
    })
})

// Create/Post Route
router.post('/', (req,res) => {
    Recipes.create(req.body, (error, createdRecipe) => {
        res.redirect('/recipes')
    })
})

// Edit Route
router.get('/:id/edit', (req,res) => {
    Recipes.findById(req.params.id, (error, editedRecipe) => {
        res.render(
            'recipes/edit.ejs',
            {
                recipe: editedRecipe,
                username: req.session.username
            }
        )
    })
})

// Update Route
router.put('/:id', (req,res) => {
    Recipes.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}, (error, updatedRecipe) => {
            res.redirect('/recipes')
        }
    )
})

// Delete Route
router.delete('/:id', (req,res) => {
    Recipes.findByIdAndRemove(
        req.params.id,
        (error, deletedRecipe) => {
            res.redirect('/recipes')
        })
})


module.exports = router;
