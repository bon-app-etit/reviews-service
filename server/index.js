const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const PORT = 3007;

app.use(morgan('dev'));

// Get all reviews
app.get('/restaurants/:name', controller.getReviews);

// Create a review
app.post('/restaurants/:name/review', controller.postReview);

// Update a review
app.put('/review/:id', controller.putReview);

// Delete a review
app.delete('/review/:id', controller.deleteReview);

// Get a user
app.get('/users/:id', controller.getUser);

// Create a user
app.post('/user', controller.postUser);

// Update a user
app.put('/user/:id', controller.putUser);

// Delete a user
app.delete('/user/:id', controller.deleteUser);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
