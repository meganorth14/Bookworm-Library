package com.revature.bookwormlibrary.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {
	Optional<Book> findByIsbn13(String isbn13);
	Optional<Book> findByTitle(String title);
	List<Book> findByPages(int pages);
	List<Book> findByPublisher(String publisher);
	List<Book> findByPublishYear(int publishYear);
}
