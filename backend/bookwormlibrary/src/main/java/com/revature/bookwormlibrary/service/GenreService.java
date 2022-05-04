package com.revature.bookwormlibrary.service;

import java.util.List;

import com.revature.bookwormlibrary.entity.Genre;

public interface GenreService {
    /**
     * Creates new genre record in database
     * @param genre
     */
    public void createGenre(Genre genre);

    /**
     * Retrieves specific genre from database
     * @param id Unique identifier for genre
     * @return Information about the genre
     */
    public Genre getGenreById(int id);

    /**
     * Retrieves all genre records from database
     * @return List of all records
     */
    public List<Genre> getAllGenres();
}