package com.revature.bookwormlibrary.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {
    
}