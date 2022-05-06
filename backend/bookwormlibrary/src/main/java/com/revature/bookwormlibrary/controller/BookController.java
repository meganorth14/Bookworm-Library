package com.revature.bookwormlibrary.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.Book;
import com.revature.bookwormlibrary.service.BookService;

@RestController
public class BookController {
	
	@Autowired
	BookService bookService;
	
	// http://localhost:8080/allBooks
	@GetMapping("/book/{isbn13}")
	public Book getBookByIsbn13(String isbn13) {
		Optional<Book> bookFound = bookService.getBookByIsbn13(isbn13);
		if(bookFound.isEmpty())  return null;
		return bookFound.get();
	}
	
	// http://localhost:8080/allBooks
	@GetMapping("/allBooks")
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	// http://localhost:8080/addBook
	@PostMapping("/addBook")
	public void addBook(@RequestBody Book book) {
		bookService.createBook(book);
	}
	
	// http://localhost:8080/deleteBook
	@DeleteMapping("/deleteBook")
	public void deleteBook(int id) {
		bookService.deleteBook(id);
	}
	
}
