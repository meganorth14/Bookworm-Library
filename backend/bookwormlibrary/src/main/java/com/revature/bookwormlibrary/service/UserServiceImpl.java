package com.revature.bookwormlibrary.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import com.revature.bookwormlibrary.dao.UserRepository;
import com.revature.bookwormlibrary.entity.User;


public class UserServiceImpl implements UserService {
	
	@Autowired
    UserRepository repository;

    @Override
    public User createUser(User user) {
        repository.save(user);
        return null;
    }

    @Override
    public Optional<User> getUserById(Integer id) {
        return repository.findById(id);
    }

    @Override
    public User getUserByUsername(String username) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return (List<User>)repository.findAll();
    }

    @Override
    public void updateUser(User user) {
        repository.save(user);
    }
    public void deleteUser(User user) {
        repository.save(user);
    }


    @Override
    public List<User> filterUsers(List<User> user) {
        // TODO Auto-generated method stub
        return null;
    }

	@Override
	public void deleteUser(Integer id) {
		// TODO Auto-generated method stub
		
	}


	@Override
	public String validateUser(User user) {
		// TODO Auto-generated method stub
		return null;
	}
    
}
