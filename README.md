# todoNest

todoNest is a project I created to familiarize myself with Nest.js and backend concepts. It provides a simple RESTful API for managing TODO items. The API supports the following HTTP methods: GET, POST, PATCH, and DELETE.

## Endpoints

### Get All Todos

Retrieves a list of all TODO items.

- Method: GET
- URL: `/todos`

### Get Todo by ID

Retrieves a specific TODO item by its ID.

- Method: GET
- URL: `/todos/:id`

### Create a New Todo

Creates a new TODO item.

- Method: POST
- URL: `/todos`
- Body: JSON object representing the new TODO item

### Update Todo

Updates an existing TODO item by its ID.

- Method: PATCH
- URL: `/todos/:id`
- Body: JSON object with the properties to update

### Delete Todo

Deletes a TODO item by its ID.

- Method: DELETE
- URL: `/todos/:id`

## Testing with Postman

You can use Postman to test the API endpoints. Here is the link to import the Postman collection:

[![Run in Postman](https://run.pstmn.io/button.svg)](https://www.getpostman.com)

Clicking the button will open Postman and import the collection, which contains all the necessary requests for testing the todoNest API.

Feel free to explore and experiment with the API using Postman!

## Conclusion

todoNest has provided me with valuable hands-on experience in working with Nest.js and implementing backend functionality. It serves as a solid foundation for further exploration and development in the backend realm.
