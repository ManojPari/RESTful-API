# RESTful-API
Endpoints
1. Fetch User Details
  GET /user-details

  Description: Retrieves the list of all users.
  
    Response:
      200: Success, returns the user data.
      400: Failure, no user data available.

3. Add a New User
  POST /add-user
  
  Description: Adds a new user to the system.
  Body Parameters:
  
    {  
        "name": "string",  
        "age": "number"  
    }  
  Response:
    200: Success, user added.
    400: Failure, invalid data.
    
  3. Delete a User
  DELETE /delete-user/:id
  
  Description: Deletes a user by their ID.
    Path Parameters:
    id: The ID of the user to delete.
    
    Response:
      200: Success, user deleted.
      400: Failure, user not found.


4. Update a User
  PUT /update-user/:id
  
  Description: Updates a user's details by their ID.
  Path Parameters:
  id: The ID of the user to update.
  Body Parameters:

    {  
        "name": "string",  
        "age": "number"  
    }  
  Response:
    
    200: Success, user updated.
    400: Failure, user not found.
