const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');

const app = express();
const PORT = 3007;

app.use(morgan('dev'));

//READ
app.get('/restaurants/:name', controller.getReviews);

//CREATE
app.post('/review', controller.addReview);

//UPDATE
app.put('/review/:id', controller.updateReview);

//DELETE
app.delete('/review/:id', controller.deleteReview);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
