const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

// New Session Route
router.get('/new', (req,res) => {
    res.render(
        'sessions/new.ejs',
        {
            username: req.session.username
        }
    )
})

// Logging In and Setting cookie/session Route
router.post('/', (req,res) => {
    User.findOne({username:req.body.username}, (error, foundUser) => {
        if (foundUser === null) {
            res.redirect('/sessions/new');
        } else {
            const doesPasswordMatch = bcrypt.compareSync(req.body.password, foundUser.password);
            if (doesPasswordMatch){
                req.session.username = foundUser.username;
                res.redirect('/recipes')
            } else {
                res.redirect('/sessions/new');
            }
        }
    })
})

// End Session Route
router.post('/end', (req,res) => {
    req.session.destroy((error) => {
        if (error){
            console.log(error);
            res.send('You have an error');
        } else {
            res.redirect('/recipes')
        }
    })
})


module.exports = router;
