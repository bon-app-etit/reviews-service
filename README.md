# reviews-service

## API Documentation

* **URL**: _/restaurants/:name/reviews_
  * **Notes:** Route to handle retrieving all reviews for a single restaurant
  * **Method:** _`GET`_
  * **URL Params:** `name=[string]`
  * **Returns:**
```javascript
reviews = [
  {
    id: INT NOT NULL,
    user_id: INT NOT NULL,
    restaurant_id: INT NOT NULL,
    rating: INT NOT NULL,
    review_date: STRING NOT NULL,
    review_text: STRING NOT NULL,
    previous_review: INT
  },
]
```

* **URL**: _/restaurant/:restaurant_id/user/:user_id/review_
  * **Notes:** Route to handle adding a new review for a given restaurant
  * **Method:** _`POST`_
  * **URL Params:** `restaurant_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    user_id: INT NOT NULL,
    restaurant_id: INT NOT NULL,
    rating: INT NOT NULL,
    review_date: STRING NOT NULL,
    review_text: STRING NOT NULL,
    previous_review: INT
  }
```

* **URL**: _/review/:id_
  * **Notes:** Route to handle updating a given review
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
  {
    id: INT NOT NULL,
    user_id: INT NOT NULL,
    restaurant_id: INT NOT NULL,
    rating: INT NOT NULL,
    review_date: STRING NOT NULL,
    review_text: STRING NOT NULL,
    previous_review: INT
  }
```

* **URL**: _/review/:id_
  * **Notes:** Route to handle delete a given review
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  null
```

* **URL**: _/user/:id_
  * **Notes:** Route to handle retrieving a given user
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  {
    id: INT NOT NULL,
    name: STRING NOT NULL,
    profile_pic: STRING,
    profile_url: STRING NOT NULL,
    city: STRING NOT NULL,
    state: STRING NOT NULL,
    creation_date: STRING NOT NULL,
    friends_count: INT NOT NULL,
    photos_count: INT NOT NULL,
    elite_year: INT
  }
```

* **URL**: _/user_
  * **Notes:** Route to handle adding a new user
  * **Method:** _`POST`_
  * **URL Params:** `N/A`
  * **Request Body:**
```javascript
  {
    name: STRING NOT NULL,
    profile_pic: STRING,
    city: STRING NOT NULL,
    state: STRING NOT NULL,
    creation_date: STRING NOT NULL,
  }
```

* **URL**: _/user/:id_
  * **Notes:** Route to handle updating a given user
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
  {
    id: INT NOT NULL,
    name: STRING NOT NULL,
    profile_pic: STRING,
    profile_url: STRING NOT NULL,
    city: STRING NOT NULL,
    state: STRING NOT NULL,
    creation_date: STRING NOT NULL,
    friends_count: INT NOT NULL,
    photos_count: INT NOT NULL,
    elite_year: INT
  }
```

* **URL**: _/user/:id_
  * **Notes:** Route to handle deleting a given user
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  null
```

* **URL**: _/review/:id/photos_
  * **Notes:** Route to handle getting all photos for a given review
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  photos = [
    {
      id: INT NOT NULL,
      user_id: INT NOT NULL,
      review_id: INT NOT NULL,
      photo_url: STRING NOT NULL,
      photo_text: STRING
    }
  ]
```

* **URL**: _/review/:id/photo_
  * **Notes:** Route to handle adding a photo for a given review
  * **Method:** _`POST`_
  * **URL Params:** `id=[integer]`
  * **Requst Body:**
```javascript
  {
    user_id: INT NOT NULL,
    review_id: INT NOT NULL,
    photo_url: STRING NOT NULL,
    photo_text: STRING
  }
```

* **URL**: _/photo/:id_
  * **Notes:** Route to handle updating a photo for a given review
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
    {
      id: INT NOT NULL,
      user_id: INT NOT NULL,
      review_id: INT NOT NULL,
      photo_url: STRING NOT NULL,
      photo_text: STRING
    }
```

* **URL**: _/photo/:id_
  * **Notes:** Route to handle deleting a photo for a given review
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  null
```

* **URL**: _/review/:id/business_reply_
  * **Notes:** Route to handle getting a business reply for a given review
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
    {
      id: INT NOT NULL,
      review_id: INT NOT NULL,
      name: STRING NOT NULL,
      reply_date: STRING NOT NULL,
      reply_text: STRING NOT NULL
    }
```

* **URL**: _/review/:id/business_reply_
  * **Notes:** Route to handle adding a business reply for a given review
  * **Method:** _`POST`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
    {
      review_id: INT NOT NULL,
      name: STRING NOT NULL,
      reply_date: STRING NOT NULL,
      reply_text: STRING NOT NULL
    }
```

* **URL**: _/business_reply/:id_
  * **Notes:** Route to handle updating a business reply for a given review
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
    {
      id: INT NOT NULL,
      review_id: INT NOT NULL,
      name: STRING NOT NULL,
      reply_date: STRING NOT NULL,
      reply_text: STRING NOT NULL
    }
```

* **URL**: _/business_reply/:id_
  * **Notes:** Route to handle deleting a business reply for a given review
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  null
```

* **URL**: _/restaurant/:id_
  * **Notes:** Route to handle getting a restaurant
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  {
    id: INT NOT NULL,
    name: STRING NOT NULL,
    address_1: STRING NOT NULL,
    address_2: STRING NOT NULL,
    city: STRING NOT NULL,
    state: STRING NOT NULL,
    zip: INT NOT NULL,
    review_count: INT NOT NULL,
    cuisine_type: STRING NOT NULL,
    phone_number: STRING NOT NULL,
    website: STRING NOT NULL
  }
```

* **URL**: _/restaurant/_
  * **Notes:** Route to handle adding a restaurant
  * **Method:** _`POST`_
  * **URL Params:** `none`
  * **Request Body:**
```javascript
  {
    name: STRING NOT NULL,
    address_1: STRING NOT NULL,
    address_2: STRING NOT NULL,
    city: STRING NOT NULL,
    state: STRING NOT NULL,
    zip: INT NOT NULL,
    review_count: INT NOT NULL,
    cuisine_type: STRING NOT NULL,
    phone_number: STRING NOT NULL,
    website: STRING NOT NULL
  }
```

* **URL**: _/restaurant/:id_
  * **Notes:** Route to handle updating a restaurant
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
  {
    id: INT NOT NULL,
    name: STRING NOT NULL,
    address_1: STRING NOT NULL,
    address_2: STRING NOT NULL,
    city: STRING NOT NULL,
    state: STRING NOT NULL,
    zip: INT NOT NULL,
    review_count: INT NOT NULL,
    cuisine_type: STRING NOT NULL,
    phone_number: STRING NOT NULL,
    website: STRING NOT NULL
  }
```

* **URL**: _/restaurant/:id_
  * **Notes:** Route to handle deleting a restaurant
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  null
```

* **URL**: _/review/:id/votes_
  * **Notes:** Route to handle getting all votes for a review
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Returns:**
```javascript
  votes = [
    {
      review_id: INT NOT NULL,
      user_id: INT NOT NULL,
      voted_cool: BOOLEAN NOT NULL,
      voted_funny: BOOLEAN NOT NULL,
      voted_useful BOOLEAN NOT NULL
    },
  ]
```

* **URL**: _/review/:review_id/user/:user_id/votes_
  * **Notes:** Route to handle adding votes from a user for a review
  * **Method:** _`POST`_
  * **URL Params:** `review_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    review_id: INT NOT NULL,
    user_id: INT NOT NULL,
    voted_cool: BOOLEAN NOT NULL,
    voted_funny: BOOLEAN NOT NULL,
    voted_useful BOOLEAN NOT NULL
  }
```

* **URL**: _/review/:review_id/user/:user_id/votes_
  * **Notes:** Route to handle updating votes from a user for a review
  * **Method:** _`PUT`_
  * **URL Params:** `review_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    review_id: INT NOT NULL,
    user_id: INT NOT NULL,
    voted_cool: BOOLEAN NOT NULL,
    voted_funny: BOOLEAN NOT NULL,
    voted_useful BOOLEAN NOT NULL
  }
```

* **URL**: _/review/:review_id/user/:user_id/votes_
  * **Notes:** Route to handle deleting votes from a user for a review
  * **Method:** _`DELETE`_
  * **URL Params:** `review_id=[integer], user_id=[integer]`
  * **Return:**
```javascript
  null
```

* **URL**: _/photo/:photo_id/user/:user_id/vote_
  * **Notes:** Route to handle getting a vote from a user for a photo
  * **Method:** _`GET`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Return:**
```javascript
  {
    photo_id: INT NOT NULL,
    user_id: INT NOT NULL,
    voted_helpful: BOOLEAN NOT NULL,
    voted_unhelpful: BOOLEAN NOT NULL
  }
```

* **URL**: _/photo/:photo_id/user/:user_id/vote_
  * **Notes:** Route to handle adding a vote from a user for a photo
  * **Method:** _`POST`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    photo_id: INT NOT NULL,
    user_id: INT NOT NULL,
    voted_helpful: BOOLEAN NOT NULL,
    voted_unhelpful: BOOLEAN NOT NULL
  }
```

* **URL**: _/photo/:photo_id/user/:user_id/vote_
  * **Notes:** Route to handle updating a vote from a user for a photo
  * **Method:** _`PUT`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    photo_id: INT NOT NULL,
    user_id: INT NOT NULL,
    voted_helpful: BOOLEAN NOT NULL,
    voted_unhelpful: BOOLEAN NOT NULL
  }
```

* **URL**: _/photo/:photo_id/user/:user_id/votes_
  * **Notes:** Route to handle deleteing votes from a user for a photo
  * **Method:** _`DELETE`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Returns:**
```javascript
  null
```