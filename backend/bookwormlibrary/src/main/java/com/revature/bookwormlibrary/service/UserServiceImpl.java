package com.revature.bookwormlibrary.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
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
	public User createUser(User user) {
		
		user.setRegistrationDate(LocalDate.now());
		user.setLastLogin(LocalDateTime.now());
		return repository.save(user);
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
	public boolean getUserByUsername(String username) {
		
		return repository.findUserByUsernameIgnoreCase(username) != null;
	}

	@Override
	public List<User> getAllUsers() {
		
		return (List<User>)repository.findAll();
	}

	@Override
	public User updateUser(User user) {
		
		return repository.save(user);
	}

	@Override
	public void deleteUser(int id) {
		
		if(repository.existsById(id)) repository.delete(repository.findById(id).get());
	}

	@Override
	public User validateUser(User u) {
		User user = repository.findUserByUsernameIgnoreCase(u.getUsername());
		
		if(user == null) {
			return null;
		}
		
		if(user.getPassword() == null || !user.getPassword().equals(u.getPassword())) {
			
			return null;
		}
		
		user.setLastLogin(LocalDateTime.now());
		
		repository.save(user);
		
		return user;
	}

}
