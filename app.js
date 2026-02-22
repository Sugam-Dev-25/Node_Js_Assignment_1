require('dotenv').config();
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const DatabaseConnection = require('./app/config/db');

const app = express();   
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

DatabaseConnection();


app.use(express.static('uploads'));
app.use(express.static('public'));

const CrudRoute = require('./app/router/crudRoute');
app.use('/api', CrudRoute);

const HomeRoute = require('./app/router/homeRoute');
app.use(HomeRoute);


const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});