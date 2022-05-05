package com.revature.bookwormlibrary.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Integer> {

}
