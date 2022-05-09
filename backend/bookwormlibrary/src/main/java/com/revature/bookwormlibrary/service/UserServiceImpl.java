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
	public User createUser(User user) {
		
		user.setRegistrationDate(LocalDate.now());
		user.setLastLogin(LocalDate.now());
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
		
		return repository.findUserByUsername(username) != null;
	}

	@Override
	public List<User> getAllUsers() {
		
		return (List<User>)repository.findAll();
	}

	@Override
	public void updateUser(User userUpdate) {
		Optional<User> userFound = repository.findById(userUpdate.getUserid());
		System.out.println(userFound);
		if ( userFound.isPresent() ) {
			User user = userFound.get();
			user.setPassword(userUpdate.getPassword());
			user.setEmail(userUpdate.getEmail());
			user.setFirstName(userUpdate.getFirstName());
			user.setLastName(userUpdate.getLastName());
			
			repository.save(user);
		}
		
	}

	@Override
	public void deleteUser(User user) {
		
		repository.delete(user);
	}

	@Override
	public User validateUser(User u) {
		User user = repository.findUserByUsername(u.getUsername());
		
		if(user == null) {
			return null;
		}
		
		if(!user.getPassword().equals(u.getPassword())) {
			
			return null;
		}
		
		user.setLastLogin(LocalDate.now());
		
		repository.save(user);
		
		return user;
	}

}
