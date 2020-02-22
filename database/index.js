const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  database: 'bonappetit',
  port: 5432,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

module.exports = {
  readAllReviews: (restaurantId, callback) => {
    const query = {
      text: 'SELECT * FROM reviews INNER JOIN users ON users.user_id = reviews.user_id LEFT JOIN photos ON photos.review_id = reviews.review_id LEFT JOIN reviews_users_votes ON reviews_users_votes.review_id = reviews.review_id LEFT JOIN photos_users_votes ON photos_users_votes.photo_id = photos.photo_id LEFT JOIN business_replies ON business_replies.review_id = reviews.review_id WHERE reviews.restaurant_id = $1;',
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
};
