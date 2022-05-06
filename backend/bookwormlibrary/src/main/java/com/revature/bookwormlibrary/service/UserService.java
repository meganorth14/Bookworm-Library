package com.revature.bookwormlibrary.service;

import java.util.List;

import com.revature.bookwormlibrary.entity.User;


public interface UserService {

    /**
     * Create a new user in the database
     * @param user user information
     */
    public void createUser(User user);

    /**
     * Retrieve specific user's information from database
     * @param id user's unique id
     * @return User object with information
     */
    public User getUserById(Integer id);

    /**
     * Retrieve specific user's information from database (for login)
     * @param username user's unique username
     * @return User object with information
     */
    public User getUserByUsername(String username);

    /**
     * Retrieves list of all users in database
     * @return list of all users
     */
    public List<User> getAllUsers();

    /**
     * Updates specific user's information in database
     * @param user User object that contains all up-to-date information
     */
    public void updateUser(User user);

    /**
     * Deletes user from database
     * @param id Unique id of user to delete
     */
    public void deleteUser(User user);

    /**
     * Validates user login credentials against database
     * Creates access token for exisiting user based on role type
     * @param user - login information taken from form
     * @return access token
     */
    public String validateUser(User user);
}
