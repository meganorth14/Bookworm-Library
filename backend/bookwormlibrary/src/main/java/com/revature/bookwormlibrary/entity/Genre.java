package com.revature.bookwormlibrary.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * Genre class defines the unique identifier and name of each genre
 */
@Entity
@Table(name="genres")
public class Genre {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
    private int genre_id;
    private String name;
    
    @ManyToMany(mappedBy="category")
    private List<Book> books;

    //constructors
    public Genre(){
    	
    }

    public Genre(int genre_id, String name) {
        this.genre_id = genre_id;
        this.name = name;
    }

    //getters and setters
    public int getGenreId() {
        return genre_id;
    }

    public void setGenreId(int genre_id) {
        this.genre_id = genre_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    //toString
    @Override
    public String toString() {
        return "Genre [genre_id=" + genre_id + ", name=" + name + "]";
    }

    // hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + genre_id;
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        Genre other = (Genre) obj;
        if (genre_id != other.genre_id)
            return false;
        return true;
    }
    
}

