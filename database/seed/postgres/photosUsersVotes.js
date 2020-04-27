const fs = require('fs');

const writePhotosUsersVotes = fs.createWriteStream('photosUsersVotesPostGres.csv');
writePhotosUsersVotes.write('photo_id,user_id,voted_helpful,voted_unhelpful\n', 'utf8');

const randomUserId = () => Math.floor(Math.random() * (3000000)) + 1;

const randomPhotoId = () => Math.floor(Math.random() * (3000000)) + 1;

const randomBoolean = () => Math.random() < 0.05;

const writeOneMillion = (writer, encoding, callback) => {
  let i = 1000000;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      const photoId = randomPhotoId();
      const userId = randomUserId();
      const votedHelpful = randomBoolean();
      const votedUnhelpful = randomBoolean();
      const data = `${photoId},${userId},${votedHelpful},${votedUnhelpful}\n`;
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

writeOneMillion(writePhotosUsersVotes, 'utf-8', () => {
  console.log('data generation completed');
  writePhotosUsersVotes.end();
});
