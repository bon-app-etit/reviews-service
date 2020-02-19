const fs = require('fs');

const writeReviewsUsersVotes = fs.createWriteStream('reviewsUsersVotesPostGres.csv');
writeReviewsUsersVotes.write('review_id,user_id,voted_cool,voted_funny,voted_useful\n', 'utf8');

const randomUserId = () => Math.floor(Math.random() * Math.floor(3000000));

const randomReviewId = () => Math.floor(Math.random() * Math.floor(10000000));

const randomBoolean = () => Math.random() < 0.05;

const writeOneMillion = (writer, encoding, callback) => {
  let i = 1000;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      const reviewId = randomReviewId();
      const userId = randomUserId();
      const votedCool = randomBoolean();
      const votedFunny = randomBoolean();
      const votedUseful = randomBoolean();
      const data = `${reviewId},${userId},${votedCool},${votedFunny},${votedUseful}\n`;
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

writeOneMillion(writeReviewsUsersVotes, 'utf-8', () => {
  writeReviewsUsersVotes.end();
});
