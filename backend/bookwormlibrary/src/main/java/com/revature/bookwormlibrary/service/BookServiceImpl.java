package com.revature.bookwormlibrary.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.function.Predicate;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.BookRepository;
import com.revature.bookwormlibrary.entity.Author;
import com.revature.bookwormlibrary.entity.Book;
import com.revature.bookwormlibrary.entity.Genre;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	BookRepository bookRepo;
	
	@Override
	public void createBook(Book book) {
		bookRepo.save(book);
	}

	@Override
	public Optional<Book> getBookById(int id) {
		return bookRepo.findById(id);
	}

	@Override
	public List<Book> getAllBooks() {
		return (List<Book>) bookRepo.findAll();
	}

	@Override
	public void updateBook(Book book) {
		bookRepo.save(book);
	}

	@Override
	public void deleteBook(int id) {
		if(bookRepo.existsById(id)) bookRepo.delete(bookRepo.findById(id).get());
	}
	
	@Override
	public List<Book> sortBooksByISBN13(List<Book> books) {
		Comparator<Book> byISBN13 = Comparator.comparing(Book::getIsbn13);
		return books.stream().sorted(byISBN13).toList();
	}

	@Override
	public List<Book> sortBooksByTitle(List<Book> books) {
		Comparator<Book> byTitle = Comparator.comparing(Book::getTitle);
		return books.stream().sorted(byTitle).toList();
	}
	
	@Override
	public List<Book> sortBooksByPages(List<Book> books) {
		Comparator<Book> byPages = Comparator.comparing(Book::getPages);
		return books.stream().sorted(byPages).toList();
	}

	@Override
	public List<Book> sortBooksByPublisher(List<Book> books) {
		Comparator<Book> byPublisher = Comparator.comparing(Book::getPublisher);
		return books.stream().sorted(byPublisher).toList();
	}

	@Override
	public List<Book> sortBooksByPublishYear(List<Book> books) {
		Comparator<Book> byPublishYear = Comparator.comparing(Book::getPublishYear);
		return books.stream().sorted(byPublishYear).toList();
	}

	@Override
	public List<Book> filterBooksByAuthor(List<Book> books, Author author) {
		Predicate<Book> hasAuthor = book -> (book.getAuthors().contains(author));
		return books.stream().filter(hasAuthor).toList();
	}

	@Override
	public List<Book> filterBooksByGenre(List<Book> books, Genre genre) {
		Predicate<Book> hasGenre = book -> (book.getGenres().contains(genre));
		return books.stream().filter(hasGenre).toList();
	}

	@Override
	public List<Book> filterBooksByTitle(List<Book> books, String title) {
		Predicate<Book> hasTitle = book -> (book.getTitle().equals(title));
		return books.stream().filter(hasTitle).toList();
	}

}
