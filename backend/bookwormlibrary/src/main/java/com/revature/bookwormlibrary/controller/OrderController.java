package com.revature.bookwormlibrary.controller;

import java.util.List;
<<<<<<< HEAD

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
=======
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
import org.springframework.web.bind.annotation.RestController;

import com.revature.bookwormlibrary.entity.Order;
import com.revature.bookwormlibrary.service.OrderService;

@RestController
public class OrderController {
    
    @Autowired
    OrderService orderService;

<<<<<<< HEAD
    @RequestMapping("/orders")
    public List<Order> getOrders(){
        return orderService.getAllOrders();
    }
=======
    //http:localhost:8080/newOrder
    @PostMapping("/newOrder")
    public void newOrder(@RequestBody Order order) {
    	
    	orderService.createOrder(order);
    }
    
    //http:localhost:8080/order/1
    @GetMapping("/order/{id}")
    public Order getOrderById(@PathVariable Integer id) {
    	
    	Optional<Order> order = orderService.getOrderById(id);
    	
    	if(order.isEmpty()) { 		
    		return null;
    		
    	} else {
    		return order.get();
    	}	
    }
    
    //http:localhost:8080/order/1
    @GetMapping("/orders/{id}")
    public List<Order> getOrderByUserid(@PathVariable Integer id) {
    	
    	return orderService.getOrderByUserid(id);
    	
    }
    
    @GetMapping("/orders")
    public List<Order> getOrders(){
        return orderService.getAllOrders();
    }
    
    
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
}