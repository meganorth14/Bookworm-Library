package com.revature.bookwormlibrary.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.bookwormlibrary.dao.UserRepository;
import com.revature.bookwormlibrary.entity.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	UserRepository repository;
	
	@Override
	public void createUser(User user) {
		
		user.setRegistrationDate(LocalDate.now());
		user.setLastLogin(LocalDate.now());
		repository.save(user);
	}

	@Override
	public User getUserById(Integer id) {
		
		Optional<User> user = repository.findById(id);
		
		if(user.isEmpty()) {
			return null;
			
		} else {
			return user.get();
		}
	}

	@Override
	public User getUserByUsername(String username) {
		
		return repository.findUserByUsername(username);
	}

	@Override
	public List<User> getAllUsers() {
		
		return (List<User>)repository.findAll();
	}

	@Override
	public void updateUser(User user) {
		
		repository.save(user);
	}

	@Override
	public void deleteUser(User user) {
		
		repository.delete(user);
	}


	@Override
	public String validateUser(User u) {
		User user = repository.findUserByUsername(u.getUsername());
		
		if(user == null) {
			return "No user found";
		}
		
		if(!user.getPassword().equals(u.getPassword())) {
			
			return "Incorrect Password";
		}
		
		user.setLastLogin(LocalDate.now());
		
		repository.save(user);
		
		return "User found with role: " + user.getRoleType();
	}

}
