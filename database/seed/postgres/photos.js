const faker = require('faker');
const fs = require('fs');

const writePhotos = fs.createWriteStream('photosPostGres.csv');
writePhotos.write('id,user_id,review_id,photo_url,photo_text\n', 'utf8');

const randomUserId = () => Math.floor(Math.random() * Math.floor(4000000));

const randomReviewId = () => Math.floor(Math.random() * Math.floor(10000000));

const writeFourMillion = (writer, encoding, callback) => {
  let i = 1000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const user_id = randomUserId();
      const review_id = randomReviewId();
      const photo_url = faker.image.imageUrl();
      const photo_text = faker.lorem.sentence();
      const data = `${id},${user_id},${review_id},${photo_url},${photo_text}\n`;
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

writeFourMillion(writePhotos, 'utf-8', () => {
  writePhotos.end();
});
