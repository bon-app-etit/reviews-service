const faker = require('faker');
const fs = require('fs');

const writeBusinessReplies = fs.createWriteStream('Business_RepliesPostGres.csv');
writeBusinessReplies.write('id,review_id,name,business_position,business_avatar,reply_date,reply_text\n', 'utf8');

const randomReviewId = () => Math.floor(Math.random() * Math.floor(10000000));

const writeOneMillion = (writer, encoding, callback) => {
  let i = 1000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const reviewId = randomReviewId();
      const name = faker.name.firstName();
      const businessPosition = faker.name.jobTitle();
      const businessAvatar = faker.image.avatar();
      const replyDate = faker.date.past();
      const replyText = faker.lorem.sentences();
      const data = `${id},${reviewId},${name},${businessPosition},${businessAvatar}, ${replyDate},${replyText}\n`;
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

writeOneMillion(writeBusinessReplies, 'utf-8', () => {
  console.log('data generation completed');
  writeBusinessReplies.end();
});
