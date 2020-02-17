const faker = require('faker');
const fs = require('fs');

const eliteYears = [
  2020, null, null, null, null, null, null, null, null, 2019,
  null, null, null, null, null, 2018, null, null, null, null, null,
];

const randomEliteYear = () => eliteYears[Math.floor(Math.random() * Math.floor(20))];

const writeUsers = fs.createWriteStream('usersPostGres.csv');
writeUsers.write('id,first_name,last_name,profile_pic,profile_url,city,state,creation_date,friends_count,photos_count,elite_year\n', 'utf8');

const writeTenMillion = (writer, encoding, callback) => {
  let i = 1000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const first_name = faker.name.firstName();
      const last_name = faker.name.lastName();
      const profile_pic = faker.image.avatar();
      const profile_url = faker.internet.url();
      const city = faker.address.city();
      const state = faker.address.state();
      const creation_date = faker.date.past();
      const friends_count = faker.random.number();
      const photos_count = faker.random.number();
      const elite_year = randomEliteYear();
      const data = `${id},${first_name},${last_name},${profile_pic},${profile_url},${city},${state},${creation_date},${friends_count},${photos_count},${elite_year}\n`;
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

writeTenMillion(writeUsers, 'utf-8', () => {
  writeUsers.end();
});
