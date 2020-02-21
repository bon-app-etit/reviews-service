const faker = require('faker');
const fs = require('fs');

const writeReviews = fs.createWriteStream('reviewsPostGres.csv');
writeReviews.write('review_id,user_id,restaurant_id,rating,review_date,review_text,previous_review\n', 'utf8');

const randomUserId = () => Math.floor(Math.random() * (3000000)) + 1;

const randomRestaurantId = () => Math.floor(Math.random() * (2000000)) + 1;

const randomRating = () => Math.floor(Math.random() * Math.floor(5));

const randomReviewId = () => Math.floor(Math.random() * (10000000)) + 1;

const randomPreviousReviewId = () => {
  const chanceOfNoReview = Math.random();
  if (chanceOfNoReview < 0.9) {
    return '';
  }
  return randomReviewId();
};

const writeTenMillion = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const userId = randomUserId();
      const restaurantId = randomRestaurantId();
      const rating = randomRating();
      const reviewDate = faker.date.past();
      const reviewText = faker.lorem.paragraph();
      const previousReview = randomPreviousReviewId();
      const data = `${id},${userId},${restaurantId},${rating},${reviewDate},${reviewText},${previousReview}\n`;
      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  };
  write();
};

writeTenMillion(writeReviews, 'utf-8', () => {
  console.log('data generation complete');
  writeReviews.end();
});
