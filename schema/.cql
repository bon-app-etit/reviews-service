CREATE KEYSPACE "BONAPPETIT" WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 3};

USE BONAPPETIT;

-- Get reviews by restaurant id
CREATE TABLE IF NOT EXISTS restaurant_reviews (
  restaurant_id int,
  review_id int,
  user_id int,
  rating int,
  review_date text,
  review_text text,
  previous_review int,
  PRIMARY KEY (restaurant_id,review_id)
);

-- Get user info by review id
CREATE TABLE IF NOT EXISTS user_by_review (
  review_id int,
  user_id int,
  user_firstName text,
  user_lastName text,
  user_profile_pic text,
  user_profile_url text,
  user_city text,
  user_state text,
  user_creation_date text,
  user_friends_count int,
  user_photos_count int,
  user_elite_year int,
  PRIMARY KEY (review_id)
);

-- Get business reply by review id
CREATE TABLE IF NOT EXISTS business_reply_by_review (
  business_reply_id int,
  review_id int,
  name text,
  business_position text,
  business_avatar text,
  reply_date text,
  reply_text text,
  PRIMARY KEY (review_id)
);

-- Get photos by review id
CREATE TABLE IF NOT EXISTS photos_by_review (
  photo_id int,
  user_id int,
  review_id int,
  photo_url text,
  photo_text text,
  PRIMARY KEY (review_id)
);

-- Get votes by review
CREATE TABLE IF NOT EXISTS reviews_users_votes (
  review_id int,
  user_id int,
  voted_cool boolean,
  voted_funny boolean,
  voted_useful boolean,
  PRIMARY KEY (review_id)
);

-- Get votes by photo
CREATE TABLE IF NOT EXISTS photos_users_votes (
  photo_id int,
  user_id int,
  voted_helpful boolean,
  voted_unhelpful boolean,
  PRIMARY KEY (photo_id)
);