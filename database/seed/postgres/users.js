const faker = require('faker');
const fs = require('fs');

const eliteYears = [2018, 2019, 2020];

const randomEliteYear = () => {
  const randomChance = Math.random();
  if (randomChance < 0.02) {
    return eliteYears[Math.floor(Math.random() * Math.floor(3))];
  }
  return '';
};

const writeUsers = fs.createWriteStream('usersPostGres.csv');
writeUsers.write('user_id,first_name,last_name,profile_pic,profile_url,city,state,creation_date,friends_count,photos_count,elite_year\n', 'utf8');

const writeThreeMillion = (writer, encoding, callback) => {
  let i = 3000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
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
      const data = `${id},${firstName},${lastName},${profilePic},${profileUrl},${city},${state},${creationDate},${friendsCount},${photosCount},${eliteYear}\n`;
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
  writeUsers.end();
});
