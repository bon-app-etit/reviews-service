const newrelic = require('newrelic');
const express = require('express');
const morgan = require('morgan');


const controller = require('./controller.js');

const app = express();
const PORT = 3007;

app.use(express.json());
app.use(morgan('dev'));

// Get all reviews
app.get('/restaurant/:id/reviews', controller.getReviews);

// Create a review
app.post('/restaurant/:restaurantId/user/:userId/review', controller.postReview);

// Update a review
app.patch('/review/:reviewId', controller.patchReview);

// Delete a review
app.delete('/review/:reviewId', controller.deleteReview);

// Create a user
app.post('/user', controller.postUser);

// Update a user
app.patch('/user/:userId', controller.patchUser);

// Delete a user
app.delete('/user/:userId', controller.deleteUser);

// // Add a photo to a review
// app.post('/review/:id/photo', controller.postReviewPhoto);

// // Update a photo for a review
// app.put('/photo/:id', controller.putReviewPhoto);

// Delete a photo from a review
app.delete('/photo/:photoId', controller.deleteReviewPhoto);

// // Add a business reply for a review
// app.post('/review/:id/business_reply', controller.postBusinessReply);

// // Update a business reply for a review
// app.put('/business_reply/:id', controller.putBusinessReply);

// // Delete a business reply from a review
// app.delete('/business_reply/:id', controller.deleteBusinessReply);

// Add votes from a user for a review
app.post('/review/:reviewId/user/:userId/votes', controller.postReviewVotes);

// // Update votes from a user for a review
// app.put('/review/:review_id/user/:user_id/votes', controller.putReviewVotes);

// // Delete votes from a user for a review
// app.delete('/review/:review_id/user/:user_id/votes', controller.deleteReviewVotes);

// // Add vote from a user for a photo
// app.post('/photo/:photo_id/user/:user_id/vote', controller.addPhotoVotes);

// // Update vote from a user for a photo
// app.put('/photo/:photo_id/user/:user_id/vote', controller.putPhotoVotes);

// // Delete votes from a user for a photo
// app.delete('/photo/:photo_id/user/:user_id/votes', controller.deletePhotoVotes);


const server = app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
server.keepAliveTimeout = 45000;
server.headersTimeout = 50000;
