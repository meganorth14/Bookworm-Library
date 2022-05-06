package com.revature.bookwormlibrary.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.OrderRepository;
import com.revature.bookwormlibrary.entity.Order;

@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    OrderRepository repository;

    @Override
    public void createOrder(Order order) {
        repository.save(order);
    }

    @Override
    public Optional<Order> getOrderById(int id) {
        return repository.findById(id);
    }

    @Override
    public List<Order> getOrderByUserid(int id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Order> getAllOrders() {
        return (List<Order>)repository.findAll();
    }

    @Override
    public List<Order> filterByDate(List<Order> orders) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<Order> filterByUser(List<Order> orders) {
        // TODO Auto-generated method stub
        return null;
    }
    
}
