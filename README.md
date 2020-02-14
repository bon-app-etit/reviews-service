# reviews-service

## API Documentation

* **URL**: _/restaurants/:name_
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
  }
]
```

* **URL**: _/restaurant/:restaurant_id/user/:user_id/review_
  * **Notes:** Route to handle adding a new review for a given restaurant
  * **Method:** _`POST`_
  * **URL Params:** `restaurant_id=[integer], user_id=[integer]`
  * **Request Body**
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
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Notes:** Route to handle updating a given review

* **URL**: _/restaurants/:name_
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Notes:** Route to handle delete a given review

* **URL**: _/users/:id_
  * **Method:** _`GET`_
  * **URL Params:** `id=[integer]`
  * **Notes:** Route to handle retrieving a given user

* **URL**: _/user_
  * **Method:** _`POST`_
  * **URL Params:** `N/A`
  * **Notes:** Route to handle adding a new user

* **URL**: _/user/:id_
  * **Method:** _`PUT`_
  * **URL Params:** `id=[integer]`
  * **Notes:** Route to handle updating a given user

* **URL**: _/user/:id_
  * **Method:** _`DELETE`_
  * **URL Params:** `id=[integer]`
  * **Notes:** Route to handle deleting a given user
