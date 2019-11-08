const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/users.js');


router.get('/new', (req, res) => {
    res.render('users/new.ejs')
})

router.post('/', (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.passord, bcrypt.genSaltSync(10));
    User.create(req.body, (error, createdUser) => {
        res.redirect('/recipes')
    })
})









module.exports = router;
