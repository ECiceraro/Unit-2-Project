const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');
const Recipes = require('../models/recipes.js');

// New User Route
router.get('/new', (req, res) => {
    res.render(
        'users/new.ejs',
        {
            username: req.session.username
        }
    )
})

// New User being created and password being encrypted
router.post('/', (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
    req.body.saved = [];
    User.create(req.body, (error, createdUser) => {
        console.log(error);
        console.log(req.body);
        console.log(createdUser);
        res.redirect('/recipes')
    })
})

module.exports = router;
