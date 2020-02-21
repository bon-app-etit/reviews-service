const faker = require('faker');
const fs = require('fs');

const writePhotos = fs.createWriteStream('photosPostGres.csv');
writePhotos.write('photo_id,user_id,review_id,photo_url,photo_text\n', 'utf8');

const randomUserId = () => Math.floor(Math.random() * (3000000)) + 1;

const randomReviewId = () => Math.floor(Math.random() * (10000000)) + 1;

const writeThreeMillion = (writer, encoding, callback) => {
  let i = 3000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const userId = randomUserId();
      const reviewId = randomReviewId();
      const photoUrl = faker.image.imageUrl();
      const photoText = faker.lorem.sentence();
      const data = `${id},${userId},${reviewId},${photoUrl},${photoText}\n`;
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

writeThreeMillion(writePhotos, 'utf-8', () => {
  console.log('data generation completed');
  writePhotos.end();
});
