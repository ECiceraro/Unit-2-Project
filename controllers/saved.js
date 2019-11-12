// Bringing in required app and variables
const express = require('express');
const router = express.Router();
const Recipes = require('../models/recipes.js');
const User = require('../models/users.js');


// Save Route
router.patch('/', (req,res) => {
    User.findByIdAndUpdate(req.session.userId, {$push: {saved:req.body}}, (err, foundUser) => {
        res.redirect('/saved')
    })
})

// Index of saved
router.get('/', (req,res) => {
    User.findById(req.session.userId, (err,foundUser) => {
        res.render(
            'saved/saved.ejs',
            {
                username: req.session.username,
                savedRecipes: foundUser.saved,
                userId: req.session.userId
            }
        )
    })
})

// Saved Recipe Show Page
router.get('/:indexOfSavedRecipe/show', (req,res) => {
    User.findById(req.session.userId, (err, foundUser) => {
        res.render(
            'saved/show.ejs',
            {
                username: req.session.username,
                userId: req.session.userId,
                recipe: foundUser.saved[req.params.indexOfSavedRecipe]
            }
        )
    })
})

// Saved Delete Route
router.delete('/:id', (req,res) => {
    User.findByIdAndUpdate(req.session.userId, {$pull: {saved: {_id: req.params.id}}}, (err, foundUser) => {
        res.redirect('/recipes')
    });
})

//Saved Edit Route
router.get('/:id/edit', (req,res) => {
    User.findById(req.session.userId, (err, foundUser) => {
        res.render('saved/edit.ejs',
            {
                recipe: foundUser.saved.filter((foundRecipe) => {
                    return req.params.id === foundRecipe.id
                })[0],
                username: req.session.username,
                userId: req.session.userId
            }
        )
    })
})

// Saved Update Route
router.patch('/:id/edit', (req,res) => {
    User.findByIdAndUpdate(req.session.userId, {$pull: {saved: {_id: req.params.id}}}, (err, foundUser) => {
        User.findByIdAndUpdate(req.session.userId, {$push: {saved: req.body}}, (err, foundUser) => {
            res.redirect('/saved')
        })
    })
})




module.exports = router;
