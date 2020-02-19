const faker = require('faker');
const fs = require('fs');

const writeUsers = fs.createWriteStream('userByReviewCql.csv');
writeUsers.write('review_id,user_id,user_firstName,user_lastName,user_profile_pic,user_profile_url,user_city,user_state,user_creation_date,user_friends_count,user_photos_count,user_elite_year\n', 'utf8');

const randomUserId = () => Math.floor(Math.random() * (3000000)) + 1;

const randomReviewId = () => Math.floor(Math.random() * (10000000)) + 1;

const eliteYears = [2018, 2019, 2020];

const randomEliteYear = () => {
  const randomChance = Math.random();
  if (randomChance < 0.02) {
    return eliteYears[Math.floor(Math.random() * Math.floor(3))];
  }
  return '';
};

const writeThreeMillion = (writer, encoding, callback) => {
  let i = 3000000;

  const write = () => {
    let ok = true;
    do {
      i -= 1;
      const reviewId = randomReviewId();
      const userId = randomUserId();
      const firstName = faker.name.firstName();
      const lastName = faker.name.lastName();
      const profilePic = faker.image.avatar();
      const profileUrl = faker.internet.url();
      const city = faker.address.city();
      const state = faker.address.state();
      const creationDate = faker.date.past();
      const friendsCount = faker.random.number();
      const photosCount = faker.random.number();
      const eliteYear = randomEliteYear();
      const data = `${reviewId},${userId},${firstName},${lastName},${profilePic},${profileUrl},${city},${state},${creationDate},${friendsCount},${photosCount},${eliteYear}\n`;
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

writeThreeMillion(writeUsers, 'utf-8', () => {
  console.log('data generation complete');
  writeUsers.end();
});
