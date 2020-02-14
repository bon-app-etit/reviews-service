const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const controller = './controller.js';

const app = express();
const PORT = 3007;

app.use(morgan('dev'));

// Get all reviews
app.get('/restaurant/:name/reviews', controller.getReviews);

// Create a review
app.post('/restaurant/:restaurant_id/user/:user_id/review', controller.postReview);

// Update a review
app.put('/review/:id', controller.putReview);

// Delete a review
app.delete('/review/:id', controller.deleteReview);

// Get a user
app.get('/user/:id', controller.getUser);

// Create a user
app.post('/user', controller.postUser);

// Update a user
app.put('/user/:id', controller.putUser);

// Delete a user
app.delete('/user/:id', controller.deleteUser);

// Get all photos for a review
app.get('/review/:id/photos', controller.getReviewPhotos);

// Add a photo to a review
app.post('/review/:id/photo', controller.postReviewPhoto);

// Update a photo for a review
app.put('/photo/:id', controller.putReviewPhoto);

// Delete a photo from a review
app.delete('/photo/:id', controller.deleteReviewPhoto);

// Get a business reply for a review
app.get('/review/:id/business_reply', controller.getBusinessReply);

// Add a business reply for a review
app.post('/review/:id/business_reply', controller.postBusinessReply);

// Update a business reply for a review
app.put('/business_reply/:id', controller.putBusinessReply);

// Delete a business reply from a review
app.delete('/business_reply/:id', controller.deleteBusinessReply);

// Get a restaurant
app.get('/restaurant/:id', controller.getRestaurant);

// Create a restaurant
app.post('/restaurant', controller.postRestaurant);

// Update a restaurant
app.put('/restaurant/:id', controller.putRestaurant);

// Delete a restaurant
app.delete('/restaurant/:id', controller.deleteRestaurant);

// Get all votes for a review
app.get('/review/:id/votes', controller.getReviewVotes);

// Add votes from a user for a review
app.post('/review/:review_id/user/:user_id/votes', controller.addReviewVotes);

// Update votes from a user for a review
app.put('/review/:review_id/user/:user_id/votes', controller.putReviewVotes);

// Delete votes from a user for a review
app.delete('/review/:review_id/user/:user_id/votes', controller.deleteReviewVotes);

// Get vote for a photo from a user
app.get('/photo/:photo_id/user/:user_id/vote', controller.getPhotoVotes);

// Add vote from a user for a photo
app.post('/photo/:photo_id/user/:user_id/vote', controller.addPhotoVotes);

// Update vote from a user for a photo
app.put('/photo/:photo_id/user/:user_id/vote', controller.putPhotoVotes);

// Delete votes from a user for a photo
app.delete('/photo/:photo_id/user/:user_id/votes', controller.deletePhotoVotes);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// Use cases
  // Reviews
    // Get all reviews
    // Create a review
    // Update a review
    // Delete a review
  // Users
    // Get a user
    // Create a user
    // Update a user
    // Delete a user
  // Photos
    // Get all photos for a review
    // Add a photo to a review
    // Update a photo to a review
    // Delete a photo from a review
  // Business Replies
    // Get a business reply for a review
    // Add a business reply to a review
    // Update a business reply to a review
    // Delete a business reply from a review
  // Restaurants
    // Get a restaurant
    // Create a restaurant
    // Update a restaurant
    // Delete a restaurant
  // Review Votes
    // Get votes for a review
    // Add votes from a user for a review
    // Update votes from a user for a review
    // Delete votes from a user for a review
  // Photo Votes (Only displays if user voted, doesn't display all votes from other users)
    // Get vote for a photo from a user
    // Add votes from a user for a photo
    // Update votes from a user for a photo
    // Delete votes from a user for a photo
