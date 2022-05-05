package com.revature.bookwormlibrary.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.AuthorRepository;
import com.revature.bookwormlibrary.entity.Author;

@Service
public class AuthorServiceImpl implements AuthorService {
	
	@Autowired
	AuthorRepository authorRepo;

	@Override
	public void createAuthor(Author author) {
		authorRepo.save(author);
	}

	@Override
	public Optional<Author> getAuthorById(int id) {
		return authorRepo.findById(id);
	}

	@Override
	public List<Author> getAllAuthors() {
		return (List<Author>) authorRepo.findAll();
	}

	@Override
	public void updateAuthor(Author author) {
		// TODO Auto-generated method stub
	}

	@Override
	public void deleteAuthor(int id) {
		if(authorRepo.existsById(id)) authorRepo.delete(authorRepo.findById(id).get());
	}

	@Override
	public List<Author> sortAuthorsByName(List<Author> authors) {
		Comparator<Author> byName = Comparator.comparing(Author::getName);
		return authors.stream().sorted(byName).toList();
	}

}
