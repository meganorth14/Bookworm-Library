package bookwormlibrary.dao;

import java.util.List;

import bookwormlibrary.entities.Author;

public interface AuthorDAO {
    /**
     * Creates new author record in database
     * @param author Information about author
     */
    public void createAuthor(Author author);

    /**
     * Retrieves specific author from database
     * @param id Specific author's unique identifier
     * @return Author information
     */
    public Author getAuthorById(int id);

    /**
     * Retrieves all author records from database
     * @return List of all records
     */
    public List<Author> getAllAuthors();

    /**
     * Updates specific author's information in database
     * @param author Completed updates author information
     */
    public void updateAuthor(Author author);

    /**
     * Deletes author record from database
     * @param id Author's unique id
     */
    public void deleteAuthor(int id);
}