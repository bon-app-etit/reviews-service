const faker = require('faker');
const fs = require('fs');

const writeRestaurants = fs.createWriteStream('restaurantsPostGres.csv');
writeRestaurants.write('id,name,address_1,address_2,city,state,zip,review_count,cuisine_type,phone_number,website\n', 'utf8');

const writeTwoMillion = (writer, encoding, callback) => {
  let i = 2000000;
  let id = 0;
  const write = () => {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const name = faker.commerce.productName();
      const address1 = faker.address.streetAddress();
      const address2 = faker.address.secondaryAddress();
      const city = faker.address.city();
      const state = faker.address.state();
      const zip = faker.address.zipCode();
      const reviewCount = faker.random.number();
      const cuisineType = faker.commerce.department();
      const phoneNumber = faker.phone.phoneNumberFormat(0);
      const website = faker.internet.url();
      const data = `${id},${name},${address1},${address2},${city},${state},${zip},${reviewCount},${cuisineType},${phoneNumber},${website}\n`;
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

writeTwoMillion(writeRestaurants, 'utf-8', () => {
  console.log('data generation complete');
  writeRestaurants.end();
});
