package com.revature.bookwormlibrary.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.saml2.Saml2RelyingPartyProperties.Identityprovider.Verification;
import org.springframework.http.HttpStatus;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.revature.bookwormlibrary.entity.User;
import com.revature.bookwormlibrary.service.UserService;



public class UserController {
	

		@Autowired
		UserService userService;
		
		//Retrieve all employees
		@GetMapping("/getAllUsers")
		public ModelAndView getAllEmployees() {
			List<User> listOfUsers = userService.getAllUsers();
			Map<String, Object> userModel = new HashMap<String, Object>();
			
			if (!listOfUsers.isEmpty()) {
				userModel.put("listOfUsers", listOfUsers);
				return new ModelAndView("allemployee", userModel, HttpStatus.OK);
			} else {
				userModel.put("message", "No user found");
				return new ModelAndView("nodatafound", userModel, HttpStatus.NOT_FOUND);
			}

		}
		
		// GetEmployeeForm
			@GetMapping("/userById")
			public ModelAndView getUserById(@ModelAttribute User user) {
				ModelAndView modelAndView = new ModelAndView("getUser");
				return modelAndView;
			}
			
			// Create
			@PostMapping("/addUser")
			public ModelAndView createUser(User user) {
				User newUser = userService.createUser(user);
				ModelAndView modelAndView;
				// Model in Spring Web MVC is a map
				Map<String, Object> messageModel = new HashMap<String, Object>();
				if (newUser != null) {
					messageModel.put("emplData", newUser);
					modelAndView = new ModelAndView("user created succesfully", messageModel);
				} else {
					messageModel.put("errormsg", "Unable to add user");
					modelAndView = new ModelAndView("errorMsg", messageModel);
				}
				return modelAndView;
			}
	


			@RequestMapping(value="/users/{id}", method = RequestMethod.PUT)
			public void getUser(@PathVariable String id, @RequestBody User user) {

				userService.updateUser(user);

	}
			
			@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)
			 public void deleteUser(@PathVariable Integer id) {
			      userService.deleteUser(id);
			 }
			
}



