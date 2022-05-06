package com.revature.bookwormlibrary.entity;

import java.time.LocalDate;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int order_id;
    private int user_id;
    private LocalDate order_date;

    @ManyToMany
    @JoinTable(
        name="selection", 
        joinColumns = @JoinColumn(name="order_id"),
        inverseJoinColumns = @JoinColumn(name="book_id"))
    private List<Book> books;

    //constructors
    public Order(){}

    public Order(int order_id, int user_id, LocalDate order_date, List<Book> books) {
        this.order_id = order_id;
        this.user_id = user_id;
        this.order_date = order_date;
        this.books = books;
    }

    //getters and setters
    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public LocalDate getOrder_date() {
        return order_date;
    }

    public void setOrder_date(LocalDate order_date) {
        this.order_date = order_date;
    }

    public List<Book> getBooks() {
        return books;
    }

    public void setBooks(List<Book> books) {
        this.books = books;
    }

    //toString
    @Override
    public String toString() {
        return "Order [books=" + books + ", order_date=" + order_date + ", order_id=" + order_id
                + ", user_id=" + user_id + "]";
    }

    //hashCode and equals
    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result = prime * result + order_id;
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
        Order other = (Order) obj;
        if (order_id != other.order_id)
            return false;
        return true;
    }
}

