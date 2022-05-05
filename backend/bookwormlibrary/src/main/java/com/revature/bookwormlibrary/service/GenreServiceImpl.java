package com.revature.bookwormlibrary.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.GenreRepository;
import com.revature.bookwormlibrary.entity.Genre;

@Service
public class GenreServiceImpl implements GenreService {
	
	@Autowired
	GenreRepository genreRepo;
	
	@Override
	public void createGenre(Genre genre) {
		genreRepo.save(genre);
	}

	@Override
	public Optional<Genre> getGenreById(int id) {
		return genreRepo.findById(id);
	}

	@Override
	public List<Genre> getAllGenres() {
		return (List<Genre>) genreRepo.findAll();
	}

	@Override
	public void updateGenre(Genre genre) {
		// TODO Auto-generated method stub
	}

	@Override
	public List<Genre> sortGenresByName(List<Genre> genres) {
		Comparator<Genre> byName = Comparator.comparing(Genre::getName);
		return genres.stream().sorted(byName).toList();
	}

}
