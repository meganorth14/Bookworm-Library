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
<<<<<<< HEAD
    public Optional<Order> getOrderById(int id) {
=======
    public Optional<Order> getOrderById(Integer id) {
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
        return repository.findById(id);
    }

    @Override
<<<<<<< HEAD
    public List<Order> getOrderByUserid(int id) {
        // TODO Auto-generated method stub
        return null;
=======
    public List<Order> getOrderByUserid(Integer id) {
        return repository.getOrderByUserid(id);
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
    }

    @Override
    public List<Order> getAllOrders() {
        return (List<Order>)repository.findAll();
    }
<<<<<<< HEAD

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
=======
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
    
}
