package bookwormlibrary.dao;

import java.util.List;
import bookwormlibrary.entities.Book;

public interface BookDAO {
    /**
     * Creates new book in database
     * @param book contains information about book
     */
    public void createBook(Book book);

    /**
     * Retrieves specific book from database
     * @param id specific book's unique identifier
     * @return Information about specific book
     */
    public Book getBookById(int id);

    /**
     * Retrieves all books from database
     * @return list of all books
     */
    public List<Book> getAllBooks();

    /**
     * Updates book information in database
     * @param book Complete updated information for book
     */
    public void updateBook(Book book);

    /**
     * Deletes book record from database
     * @param id Unique identifier for book to be deleted
     */
    public void deleteBook(int id);
}
