# reviews-service

## API Documentation

* **URL**: _/restaurants/:name_
  * **Method:** _`GET`_
  * **URL Params:** `name=[string]`
  * **Notes:** Route to handle retrieving all reviews for a single restaurant

* **URL**: _/restaurants/:name/review_
  * **Method:** _`POST`_
  * **URL Params:** `name=[string]`
  * **Notes:** Route to handle adding a new review for a given restaurant

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
