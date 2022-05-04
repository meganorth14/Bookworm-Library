package com.revature.bookwormlibrary.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.Order;
import com.revature.bookwormlibrary.service.OrderService;

@RestController
public class OrderController {
    
    @Autowired
    OrderService orderService;

    @RequestMapping("/orders")
    public List<Order> getOrders(){
        return orderService.getAllOrders();
    }
}