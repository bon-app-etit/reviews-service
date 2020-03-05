const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'admin',
  host: '54.153.25.3',
  database: 'bonappetit',
  port: 5432,
  max: 60,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  readAllReviews: (restaurantId, callback) => {
    const query = {
      text: 'SELECT reviews.review_id, reviews.rating, reviews.review_date, reviews.review_text, reviews.previous_review, users.first_name, users.last_name, users.user_id, users.profile_pic, users.profile_url, users.city, users.state, users.creation_date, users.friends_count, users.photos_count, users.elite_year, photo_id, photos.photo_url, photos.photo_text, business_replies.business_reply_id, business_replies.business_position, business_replies.business_avatar, business_replies.reply_date, business_replies.reply_text FROM reviews INNER JOIN users ON users.user_id = reviews.user_id LEFT JOIN photos ON photos.review_id = reviews.review_id LEFT JOIN business_replies ON business_replies.review_id = reviews.review_id WHERE reviews.restaurant_id = $1;',
      values: [restaurantId],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res.rows);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  addReview: (req, callback) => {
    const { userId } = req.params;
    const { restaurantId } = req.params;
    const { rating } = req.body;
    const { reviewDate } = req.body;
    const { reviewText } = req.body;
    const { previousReview } = req.body;
    const query = {
      text: 'INSERT INTO reviews(review_id,user_id,restaurant_id,rating,review_date,review_text,previous_review) VALUES (DEFAULT,$1,$2,$3,$4,$5,$6);',
      values: [userId, restaurantId, rating, reviewDate, reviewText, previousReview],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  updateReview: (req, callback) => {
    const { reviewId } = req.params;
    const { rating, reviewDate, reviewText } = req.body;
    const query = {
      text: 'UPDATE reviews SET rating = $1, review_date = $2, review_text = $3 WHERE review_id = $4;',
      values: [rating, reviewDate, reviewText, reviewId],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  deleteReview: (req, callback) => {
    const { reviewId } = req.params;
    const query = {
      text: 'DELETE FROM reviews WHERE review_id = $1',
      values: [reviewId],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  createUser: (req, callback) => {
    const {
      firstName, lastName, profilePic, profileUrl,
      city, state, creationDate, friendsCount, photosCount,
      eliteYear,
    } = req.body;
    const query = {
      text: 'INSERT INTO users(user_id,first_name,last_name,profile_pic,profile_url,city,state,creation_date,friends_count,photos_count,elite_year) VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8, $9, $10);',
      values: [
        firstName, lastName, profilePic, profileUrl,
        city, state, creationDate, friendsCount, photosCount, eliteYear,
      ],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  deleteUser: (req, callback) => {
    const { userId } = req.params;
    const query = {
      text: 'DELETE FROM users WHERE user_id = $1;',
      values: [userId],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  updateUser: (req, callback) => {
    const { userId } = req.params;
    const {
      firstName, lastName, profilePic,
      profileUrl, city, state, friendsCount, photosCount, eliteYear,
    } = req.body;
    const query = {
      text: 'UPDATE users SET first_name = $1, last_name = $2, profile_pic = $3, profile_url = $4, city = $5, state = $6, friends_count = $7, photos_count = $8, elite_year = $9 WHERE user_id = $10;',
      values: [
        firstName, lastName, profilePic, profileUrl, city, state,
        friendsCount, photosCount, eliteYear, userId,
      ],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  deletePhoto: (req, callback) => {
    const { photoId } = req.params;
    const query = {
      text: 'DELETE FROM photos WHERE photo_id = $1;',
      values: [photoId],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
  addReviewVotes: (req, callback) => {
    const { reviewId, userId } = req.params;
    const { votedCool, votedFunny, votedUseful } = req.body;
    const query = {
      text: 'INSERT INTO reviews_users_votes(review_id,user_id,voted_cool,voted_funny,voted_useful) VALUES ($1, $2, $3, $4, $5);',
      values: [reviewId, userId, votedCool, votedFunny, votedUseful],
    };
    pool
      .connect()
      .then((client) => {
        return client
          .query(query)
          .then((res) => {
            client.release();
            callback(null, res);
          })
          .catch((err) => {
            client.release();
            callback(err.stack);
          });
      });
  },
};
