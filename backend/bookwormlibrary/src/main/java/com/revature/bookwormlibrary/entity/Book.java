package com.revature.bookwormlibrary.entity;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Book class contains all information about an individual book
 */
@Entity
@Table(name="books")
public class Book {

    @Id
    private int book_id;
    private String isbn;
    private String title;
    private int pages;
    private String publisher;
    private int publish_year;
    private String description;
    private String cover;

    private List<Author> authors;
    private List<Genre> genres;

    //constructors
    public Book(){}

    public Book(int book_id, String isbn, String title, int pages, String publisher, int publish_year,
            String description, String cover, List<Author> authors, List<Genre> genres) {
        this.book_id = book_id;
        this.isbn = isbn;
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
    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
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

    public int getPublish_year() {
        return publish_year;
    }

    public void setPublish_year(int publish_year) {
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
                + ", description=" + description + ", genres=" + genres + ", isbn=" + isbn + ", pages="
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
