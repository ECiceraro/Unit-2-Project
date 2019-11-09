const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');

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
    User.create(req.body, (error, createdUser) => {
        res.redirect('/recipes')
    })
})

module.exports = router;
