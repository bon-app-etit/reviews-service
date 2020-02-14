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


