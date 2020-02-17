const faker = require('faker');
const fs = require('fs');

const writeReviews = fs.createWriteStream('reviewsPostGres.csv');
writeReviews.write('id,user_id,restaurant_id,rating,review_date,review_text,previous_review\n', 'utf8');

const randomUserId = () => Math.floor(Math.random() * Math.floor(4000000));

const randomRestaurantId = () => Math.floor(Math.random() * Math.floor(3000000));

const randomRating = () => Math.floor(Math.random() * Math.floor(5));

const randomReview = () => Math.floor(Math.random() * Math.floor(10000000));

const randomPreviousReviewId = () => {
  const chanceOfNoReview = Math.random();
  if (chanceOfNoReview < 0.9) {
    return null;
  }
  return randomReview();
};

const writeTenMillion = (writer, encoding, callback) => {
  let i = 1000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const user_id = randomUserId();
      const restaurant_id = randomRestaurantId();
      const rating = randomRating();
      const review_date = faker.date.past();
      const review_text = faker.lorem.paragraph();
      const previous_review = randomPreviousReviewId();
      const data = `${id},${user_id},${restaurant_id},${rating},${review_date},${review_text},${previous_review}\n`;
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
  writeReviews.end();
});
