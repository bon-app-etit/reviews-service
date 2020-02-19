CREATE DATABASE BONAPPETIT;

-- connect to database
\c BONAPPETIT

CREATE SCHEMA IF NOT EXISTS restaurant_reviews;
    CREATE TABLE restaurant_reviews.users(
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(80) NOT NULL,
      last_name text NOT NULL,
      profile_pic VARCHAR NOT NULL,
      profile_url VARCHAR NOT NULL,
      city VARCHAR NOT NULL,
      state VARCHAR NOT NULL,
      creation_date VARCHAR NOT NULL,
      friends_count INTEGER NOT NULL,
      photos_count INTEGER NOT NULL,
      elite_year INTEGER
    );
    CREATE TABLE restaurant_reviews.restaurants(
      id SERIAL PRIMARY KEY,
      name VARCHAR NOT NULL,
      address_1 VARCHAR NOT NULL,
      address_2 VARCHAR NOT NULL,
      city VARCHAR NOT NULL,
      state VARCHAR NOT NULL,
      zip VARCHAR NOT NULL,
      review_count INTEGER NOT NULL,
      cuisine_type VARCHAR NOT NULL,
      phone_number VARCHAR NOT NULL,
      website VARCHAR
    );
    CREATE TABLE restaurant_reviews.reviews(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      restaurant_id INTEGER REFERENCES restaurants(id) NOT NULL,
      rating INTEGER NOT NULL,
      review_date VARCHAR NOT NULL,
      review_text VARCHAR NOT NULL,
      previous_review INTEGER REFERENCES reviews(id)
    );
    CREATE TABLE restaurant_reviews.photos(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      review_id INTEGER REFERENCES reviews(id) NOT NULL,
      photo_url VARCHAR NOT NULL,
      photo_text VARCHAR
    );
    CREATE TABLE restaurant_reviews.business_replies(
      id SERIAL PRIMARY KEY,
      review_id INTEGER REFERENCES reviews(id) NOT NULL,
      name VARCHAR NOT NULL,
      business_position TEXT NOT NULL,
      business_avatar TEXT NOT NULL,
      reply_date VARCHAR NOT NULL,
      reply_text VARCHAR NOT NULL
    );
    CREATE TABLE restaurant_reviews.reviews_users_votes(
      review_id INTEGER REFERENCES reviews(id) NOT NULL,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      voted_cool BOOLEAN NOT NULL,
      voted_funny BOOLEAN NOT NULL,
      voted_useful BOOLEAN NOT NULL
    );
    CREATE TABLE restaurant_reviews.photos_users_votes(
      photo_id INTEGER REFERENCES photos(id),
      user_id INTEGER REFERENCES users(id),
      voted_helpful BOOLEAN NOT NULL,
      voted_unhelpful BOOLEAN NOT NULL
    );