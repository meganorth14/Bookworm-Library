package com.revature.bookwormlibrary.service;

import java.util.Collection;
import java.util.List;
<<<<<<< HEAD
import java.util.Optional;
=======
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71

import com.revature.bookwormlibrary.entity.User;


public interface UserService {

    /**
     * Create a new user in the database
     * @param user user information
     * @return 
     */
    public User createUser(User user);

    /**
     * Retrieve specific user's information from database
     * @param id user's unique id
     * @return User object with information
     */
    public Optional<User> getUserById(Integer id);

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
    @SuppressWarnings("null")
	public default void deleteUser(Integer id) {
        Collection<User> user = null;
		user.removeIf(u -> u.getId().equals(id));		
   }
    /**
     * Filters users based on a condition
     * @return List of users that meet condition
     */
    public List<User> filterUsers(List<User> user);
    // public List<User> filterUsersById(int id);
    // public List<User> filterUsersByUsername(String username);
    // public List<User> filterUsersByRole(String role);

    /**
     * Validates user login credentials against database
     * Creates access token for exisiting user based on role type
     * @param user - login information taken from form
     * @return access token
     */
    public String validateUser(User user);

//	List<User> filterUsers(List<User> user);
}
