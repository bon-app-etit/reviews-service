CREATE DATABASE BONAPPETIT;

-- connect to database
\c BONAPPETIT

CREATE SCHEMA IF NOT EXISTS restaurant_reviews;
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      name VARCHAR(80) NOT NULL,
      profile_pic VARCHAR NOT NULL,
      profile_url VARCHAR NOT NULL,
      city VARCHAR NOT NULL,
      state VARCHAR NOT NULL,
      creation_date TIMESTAMP NOT NULL,
      friends_count INTEGER NOT NULL,
      photos_count INTEGER NOT NULL,
      elite_year INTEGER,
    )
    CREATE TABLE restaurants(
      id SERIAL PRIMARY KEY,
      name VARCHAR NOT NULL,
      address_1 VARCHAR NOT NULL,
      address_2 VARCHAR NOT NULL,
      city VARCHAR NOT NULL,
      state VARCHAR NOT NULL,
      zip INTEGER NOT NULL,
      review_count INTEGER NOT NULL,
      cuisine_type VARCHAR NOT NULL,
      phone_number INTEGER NOT NULL,
      website VARCHAR
    )
    CREATE TABLE reviews(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      restaurant_id INTEGER REFERENCES restaurants(id) NOT NULL,
      rating INTEGER NOT NULL,
      review_date TIMESTAMP NOT NULL,
      review_text VARCHAR NOT NULL,
      user_voted_cool INTEGER REFERENCES users(id),
      user_voted_funny INTEGER REFERENCES users(id),
      user_voted_useful INTEGER REFERENCES users(id),
      previous_review INTEGER REFERENCES reviews(id)
    )
    CREATE TABLE photos(
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES users(id) NOT NULL,
      review_id INTEGER REFERENCES reviews(id) NOT NULL,
      photo_url VARCHAR NOT NULL,
      photo_text VARCHAR,
      user_voted_helpful INTEGER REFERENCES users(id),
      user_voted_unhelpful INTEGER REFERENCES users(id)
    )
    CREATE TABLE business_replies(
      id SERIAL PRIMARY KEY,
      review_id INTEGER REFERENCES reviews(id) NOT NULL,
      name VARCHAR NOT NULL,
      reply_date TIMESTAMP NOT NULL,
      reply_text VARCHAR NOT NULL
    )
