package com.revature.bookwormlibrary.dao;

<<<<<<< HEAD
=======
import java.util.List;

import org.springframework.data.jpa.repository.Query;
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.revature.bookwormlibrary.entity.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order, Integer> {
<<<<<<< HEAD
    
=======
    @Query("SELECT o FROM Order WHERE o.user_id = ?1")
    List<Order> getOrderByUserid(Integer id);
>>>>>>> a495280298d51afe1b8fee26c327b0067fed0b71
}