package com.revature.bookwormlibrary.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 * Book class contains all information about an individual book
 */
@Entity
@Table(name="books")
public class Book {
	
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private int book_id;
    private String isbn13;
    private String title;
    private int pages;
    private String publisher;
    private int publish_year;
    private String description;
    private String cover;
    
    @ManyToMany(mappedBy="selection")
    private List<Order> orders;
    
    @ManyToMany
    @JoinTable(
    	name="credit",
    	joinColumns = @JoinColumn(name="author_id"),
    	inverseJoinColumns = @JoinColumn(name="book_id"))
    private List<Author> authors;
    
    @ManyToMany
    @JoinTable(
    	name="category",
    	joinColumns = @JoinColumn(name="genre_id"),
    	inverseJoinColumns = @JoinColumn(name="book_id"))
    private List<Genre> genres;

    //constructors
    public Book(){
    	
    }

    public Book(int book_id, String isbn13, String title, int pages, String publisher, int publish_year,
            String description, String cover, List<Author> authors, List<Genre> genres) {
        this.book_id = book_id;
        this.isbn13 = isbn13;
        this.title = title;
        this.pages = pages;
        this.publisher = publisher;
        this.publish_year = publish_year;
        this.description = description;
        this.cover = cover;
        this.authors = authors;
        this.genres = genres;
    }

    //getters and setters
    public int getBookId() {
        return book_id;
    }

    public void setBookId(int book_id) {
        this.book_id = book_id;
    }

    public String getIsbn13() {
        return isbn13;
    }

    public void setIsbn13(String isbn13) {
        this.isbn13 = isbn13;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPages() {
        return pages;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public int getPublishYear() {
        return publish_year;
    }

    public void setPublishYear(int publish_year) {
        this.publish_year = publish_year;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCover() {
        return cover;
    }

    public void setCover(String cover) {
        this.cover = cover;
    }

    public List<Author> getAuthors() {
        return authors;
    }

    public void setAuthors(List<Author> authors) {
        this.authors = authors;
    }

    public List<Genre> getGenres() {
        return genres;
    }

    public void setGenres(List<Genre> genres) {
        this.genres = genres;
    }

    //toString
    @Override
    public String toString() {
        return "Book [authors=" + authors + ", book_id=" + book_id + ", cover=" + cover
                + ", description=" + description + ", genres=" + genres + ", isbn=" + isbn13 + ", pages="
                + pages + ", publish_year=" + publish_year + ", publisher=" + publisher + ", title=" + title + "]";
    }

    //hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + book_id;
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
        Book other = (Book) obj;
        if (book_id != other.book_id)
            return false;
        return true;
    }
    
}
