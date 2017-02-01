// server/index.js
'use strict';
const express = require('express');
const mongoose = require('mongoose');
const app = require('./app');
const router = express.Router();
const recipes = require('./recipes');

const PORT = process.env.PORT || 9000;

const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://default:asdf@ds139619.mlab.com:39619/chefbuddy', (err, db) => {
  app.locals.db = db;
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
  app.use('/api', recipes);
})
