package bookwormlibrary.service;

import java.util.List;
import bookwormlibrary.entities.Book;

public interface BookService {
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

    /**
     * Sorts collection of books by author
     * @param books unsorted list of books
     * @return sorted list of books
     */
    public List<Book> sortBooksByAuthor(List<Book> books);

    /**
     * Sorts collection of books by genre
     * @param books unsorted list of books
     * @return sorted list of books
     */
    public List<Book> sortBooksByGenre(List<Book> books);

    /**
     * Sorts collection of books by title
     * @param books unsorted list of books
     * @return sorted list of books
     */
    public List<Book> sortBooksByTitle(List<Book> books);

    /**
     * Filters collection of books by author
     * @param books unfiltered list of books
     * @return filtered list of books
     */
    public List<Book> filterBooksByAuthor(List<Book> books);

    /**
     * Filters collection of books by genre
     * @param books unfiltered list of books
     * @return filtered list of books
     */
    public List<Book> filterBooksByGenre(List<Book> books);

    /**
     * Filters collection of books by title
     * @param books unfiltered list of books
     * @return filtered list of books
     */
    public List<Book> filterBooksByTitle(List<Book> books);
}
