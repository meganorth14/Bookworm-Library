package com.revature.bookwormlibrary.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.Genre;

@Repository
public interface GenreRepository extends CrudRepository<Genre, Integer> {

}
