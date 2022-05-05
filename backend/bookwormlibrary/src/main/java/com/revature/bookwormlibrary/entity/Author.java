package com.revature.bookwormlibrary.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * Author class defines the unique identifier and name of each author
 */
@Entity
@Table(name="authors")
public class Author {
	
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int author_id;
    private String name;
    
    @ManyToMany(mappedBy="credit")
    private List<Book> books;

    //constructors
    public Author(){
    	
    }

    public Author(int id, String name){
        this.author_id = id;
        this.name = name;
    }

    //getters and setters
    public int getAuthorId() {
        return author_id;
    }

    public void setAuthorId(int author_id) {
        this.author_id = author_id;
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
        return "Author [author_id=" + author_id + ", name=" + name + "]";
    }

    //hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + author_id;
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
        Author other = (Author) obj;
        if (author_id != other.author_id)
            return false;
        if (name == null) {
            if (other.name != null)
                return false;
        } else if (!name.equals(other.name))
            return false;
        return true;
    }
    
}

