package com.revature.bookwormlibrary.service;
import java.util.List;
import java.util.Optional;

import com.revature.bookwormlibrary.entity.Order;


public interface OrderService {
    /**
     * Creates new order record in database
     * @param order Information about order
     */
    public void createOrder(Order order);

    /**
     * Retrieves specific order from database
     * @param id Unique order identifier
     * @return Order details
     */
<<<<<<< HEAD
    public Optional<Order> getOrderById(int id);
=======
    public Optional<Order> getOrderById(Integer id);
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71

    /**
     * Retrieves orders for specific user from database
     * @param id User identifier
     * @return List of all orders for a user
     */
<<<<<<< HEAD
    public List<Order> getOrderByUserid(int id);
=======
    public List<Order> getOrderByUserid(Integer id);
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71

    /**
     * Retrieves all order records from database
     * @return List of all records
     */
    public List<Order> getAllOrders();
<<<<<<< HEAD

    /**
     * Filters order records based on order date
     * @param orders unfiltered list of orders
     * @return filtered list of orders
     */
    public List<Order> filterByDate(List<Order> orders);
    
    /**
     * Filters order records based on user that placed order
     * @param orders unfiltered list of orders
     * @return filtered list of orders
     */
    public List<Order> filterByUser(List<Order> orders);
=======
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
}