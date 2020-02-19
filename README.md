# reviews-service

## API Documentation

* **URL**: _/restaurants/:id/reviews_
  * **Notes:** Route to handle retrieving all reviews for a single restaurant
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
reviews = [
  {
    id: integer,
    user_id: integer,
    restaurant_id: integer,
    rating: integer,
    review_date: string,
    review_text: string,
    previous_review: integer
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
    user_id: integer,
    restaurant_id: integer,
    rating: integer,
    review_date: string,
    review_text: string,
    previous_review: integer
  }
```

* **URL**: _/review/:id_
  * **Notes:** Route to handle updating a given review
  * **Method:** _`PATCH`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
  {
    rating: integer,
    review_text: string,
    previous_review: integer
  }
```

* **URL**: _/review/:id_
  * **Notes:** Route to handle delete a given review
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  null
```

* **URL**: _/user/:id_
  * **Notes:** Route to handle retrieving a given user
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  {
    id: integer,
    first_name: string,
    last_name: string,
    profile_pic: string,
    profile_url: string,
    city: string,
    state: string,
    creation_date: string,
    friends_count: integer,
    photos_count: integer,
    elite_year: integer
  }
```

* **URL**: _/user_
  * **Notes:** Route to handle adding a new user
  * **Method:** _`POST`_
  * **URL Params:** `N/A`
  * **Request Body:**
```javascript
  {
    name: string,
    profile_pic: string,
    profile_url: string,
    city: string,
    state: string,
    creation_date: string,
    friends_count: integer,
    photos_count: integer,
    elite_year: integer
  }
```

* **URL**: _/user/:id_
  * **Notes:** Route to handle updating a given user
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
  {
    id: integer,
    name: string,
    profile_pic: string,
    profile_url: string,
    city: string,
    state: string,
    creation_date: string,
    friends_count: integer,
    photos_count: integer,
    elite_year: integer
  }
```

* **URL**: _/user/:id_
  * **Notes:** Route to handle deleting a given user
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  null
```

* **URL**: _/review/:id/photos_
  * **Notes:** Route to handle getting all photos for a given review
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  photos = [
    {
      id: integer,
      user_id: integer,
      review_id: integer,
      photo_url: string,
      photo_text: string
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
    user_id: integer,
    review_id: integer,
    photo_url: string,
    photo_text: string
  }
```

* **URL**: _/photo/:id_
  * **Notes:** Route to handle updating a photo for a given review
  * **Method:** _`PATCH`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
    {
      photo_url: string,
      photo_text: string
    }
```

* **URL**: _/photo/:id_
  * **Notes:** Route to handle deleting a photo for a given review
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  null
```

* **URL**: _/review/:id/business_reply_
  * **Notes:** Route to handle getting a business reply for a given review
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
    {
      id: integer,
      review_id: integer,
      name: string,
      business_position: string,
      business_avatar: string,
      reply_date: string,
      reply_text: string
    }
```

* **URL**: _/review/:id/business_reply_
  * **Notes:** Route to handle adding a business reply for a given review
  * **Method:** _`POST`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
    {
      review_id: integer,
      name: string,
      business_position: string,
      business_avatar: string,
      reply_date: string,
      reply_text: string
    }
```

* **URL**: _/business_reply/:id_
  * **Notes:** Route to handle updating a business reply for a given review
  * **Method:** _`PATCH`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
    {
      name: string,
      business_position: string,
      business_avatar: string,
      reply_date: string,
      reply_text: string
    }
```

* **URL**: _/business_reply/:id_
  * **Notes:** Route to handle deleting a business reply for a given review
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  null
```

* **URL**: _/restaurant/:id_
  * **Notes:** Route to handle getting a restaurant
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  {
    id: integer,
    name: string,
    address_1: string,
    address_2: string,
    city: string,
    state: string,
    zip: integer,
    review_count: integer,
    cuisine_type: string,
    phone_number: string,
    website: string
  }
```

* **URL**: _/restaurant/_
  * **Notes:** Route to handle adding a restaurant
  * **Method:** _`POST`_
  * **URL Params:** `none`
  * **Request Body:**
```javascript
  {
    name: string,
    address_1: string,
    address_2: string,
    city: string,
    state: string,
    zip: integer,
    review_count: integer,
    cuisine_type: string,
    phone_number: string,
    website: string
  }
```

* **URL**: _/restaurant/:id_
  * **Notes:** Route to handle updating a restaurant
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Request Body:**
```javascript
  {
    id: integer,
    name: string,
    address_1: string,
    address_2: string,
    city: string,
    state: string,
    zip: integer,
    review_count: integer,
    cuisine_type: string,
    phone_number: string,
    website: string
  }
```

* **URL**: _/restaurant/:id_
  * **Notes:** Route to handle deleting a restaurant
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  null
```

* **URL**: _/review/:id/votes_
  * **Notes:** Route to handle getting all votes for a review
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Response Body:**
```javascript
  votes = [
    {
      review_id: integer,
      user_id: integer,
      voted_cool: boolean,
      voted_funny: boolean,
      voted_useful: boolean
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
    review_id: integer,
    user_id: integer,
    voted_cool: boolean,
    voted_funny: boolean,
    voted_useful: boolean
  }
```

* **URL**: _/review/:review_id/user/:user_id/votes_
  * **Notes:** Route to handle updating votes from a user for a review
  * **Method:** _`PATCH`_
  * **URL Params:** `review_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    voted_cool: boolean,
    voted_funny: boolean,
    voted_useful: boolean
  }
```

* **URL**: _/review/:review_id/user/:user_id/votes_
  * **Notes:** Route to handle deleting votes from a user for a review
  * **Method:** _`DELETE`_
  * **URL Params:** `review_id=[integer], user_id=[integer]`
  * **Response Body:**
```javascript
  null
```

* **URL**: _/photo/:photo_id/user/:user_id/vote_
  * **Notes:** Route to handle getting a vote from a user for a photo
  * **Method:** _`GET`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Response Body:**
```javascript
  {
    photo_id: integer,
    user_id: integer,
    voted_helpful: boolean,
    voted_unhelpful: boolean
  }
```

* **URL**: _/photo/:photo_id/user/:user_id/vote_
  * **Notes:** Route to handle adding a vote from a user for a photo
  * **Method:** _`POST`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    photo_id: integer,
    user_id: integer,
    voted_helpful: boolean,
    voted_unhelpful: boolean
  }
```

* **URL**: _/photo/:photo_id/user/:user_id/vote_
  * **Notes:** Route to handle updating a vote from a user for a photo
  * **Method:** _`PATCH`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Request Body:**
```javascript
  {
    voted_helpful: boolean,
    voted_unhelpful: boolean
  }
```

* **URL**: _/photo/:photo_id/user/:user_id/votes_
  * **Notes:** Route to handle deleteing votes from a user for a photo
  * **Method:** _`DELETE`_
  * **URL Params:** `photo_id=[integer], user_id=[integer]`
  * **Response Body:**
```javascript
  null
```