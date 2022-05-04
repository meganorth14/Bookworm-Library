package bookwormlibrary.dao;

import java.util.List;

import bookwormlibrary.entities.Order;

public interface OrderDAO {
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
    public Order getOrderById(int id);

    /**
     * Retrieves orders for specific user from database
     * @param id User identifier
     * @return List of all orders for a user
     */
    public List<Order> getOrderByUserid(int id);

    /**
     * Retrieves all order records from database
     * @return List of all records
     */
    public List<Order> getAllOrders();
}
