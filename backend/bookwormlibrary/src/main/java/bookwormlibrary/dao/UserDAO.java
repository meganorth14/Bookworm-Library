package bookwormlibrary.dao;

import java.util.List;
import bookwormlibrary.entities.User;

public interface UserDAO {

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
    public void deleteUser(Integer id);
}
