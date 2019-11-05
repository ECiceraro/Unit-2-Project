//_______________________
//Dependencies
//_______________________
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const app = express();
const db = mongoose.connection;
require('dotenv').config();

//_______________________
//Port
//_______________________
const PORT = process.env.PORT;
console.log(PORT);

//_______________________
//Database
//_______________________
const MONGODB_URI = process.env.MONGODB_URI;
console.log(MONGODB_URI);

mongoose.connect(MONGODB_URI, { useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify:false, useCreateIndex: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//_______________________
//Middleware
//_______________________
// use public folder for static assets
app.use(express.static('public'));

// populate req.body with parsed info from forms
app.use(express.urlencoded({extended: true}))

// be able to use delet and put routes
app.use(methodOverride('_method'))

//_______________________
//Routes
//_______________________
app.get('/', (req,res) => {
    res.send('Hello World!')
})

//_______________________
//Listener
//_______________________
app.listen(PORT, () => {
    console.log('Hello World!');
})
