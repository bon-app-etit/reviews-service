CREATE DATABASE BONAPPETIT;

CREATE SCHEMA IF NOT EXISTS restaurant_reviews;
    CREATE TABLE users(
      id SERIAL,
      name VARCHAR(80) NOT NULL,
      profile_pic VARCHAR NOT NULL,
      profileURL VARCHAR NOT NULL,
      city VARCHAR NOT NULL,
      state VARCHAR NOT NULL,
      creation_date TIMESTAMP NOT NULL,
      friends_count INT NOT NULL,
      photos_count INT NOT NULL,
      elite_year INT,
    )
    CREATE TABLE restaurants(
      id SERIAL,
      name VARCHAR NOT NULL,
      address_1 VARCHAR NOT NULL,
      address_2 VARCHAR NOT NULL,
      city VARCHAR NOT NULL,
      state VARCHAR NOT NULL,
      zip INT NOT NULL,
      review_count INT NOT NULL,
      cuisine_type VARCHAR NOT NULL,
      phone_number INT NOT NULL,
      website VARCHAR
    )
    CREATE TABLE reviews(
      id SERIAL,
      user_id INT NOT NULL,
      restaurant_id INT NOT NULL,
      rating INT NOT NULL,
      review_date TIMESTAMP NOT NULL,
      review_text VARCHAR NOT NULL,
      user_voted_cool INT,
      user_voted_funny INT,
      user_voted_useful INT,
      previous_review INT
    )
    CREATE TABLE photos(
      id SERIAL,
      user_id INT NOT NULL,
      review_id INT NOT NULL,
      photo_url VARCHAR NOT NULL,
      photo_text VARCHAR,
      user_voted_helpful INT,
      user_voted_unhelpful INT
    )
    CREATE TABLE business_replies(
      id SERIAL,
      review_id INT NOT NULL,
      name VARCHAR NOT NULL,
      reply_date TIMESTAMP NOT NULL,
      reply_text VARCHAR NOT NULL
    )
