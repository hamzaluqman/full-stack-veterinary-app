package com.example.finalProject607.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalProject607.model.User;
import com.example.finalProject607.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path="/user")
public class UserController {
	
	@Autowired
	UserService userService;
	
	public UserController(UserService userService) {
		this.userService = userService;
	}
	
	
	@GetMapping (path = "/{UCID}")
	public User getUser(@PathVariable int UCID){
		return userService.getUser(UCID);
	}
	
	@GetMapping (path = "/login") // http://localhost:8080/user/login?UCID=10036030&password=billy
	public User getLogin(@RequestParam int UCID, @RequestParam String password){
		return userService.getLogin(UCID, password);
	}
	
	@GetMapping
	public ArrayList<User> getAllUsers(){
		return userService.getAllUsers();
	}
	
	@GetMapping (path = "/students")
	public ArrayList<User> getStudents(){
		return userService.getStudents();
	}
	
	@GetMapping (path = "/current")
	public ArrayList<User> getCurrentUsers(){
		return userService.getCurrentUsers();
	}
	
	@GetMapping (path = "/pending")
	public ArrayList<User> getPendingUsers(){
		return userService.getPendingUsers();
	}
	
	@GetMapping (path = "/blocked")
	public ArrayList<User> getBlockedUsers(){
		return userService.getBlockedUsers();
	}
	
	@PostMapping (path = "/")
	public void createUser(@RequestBody User user){
		userService.createUsers(user);
	}
	
	@PutMapping (path = "/profile")
	public void updateUserProfile(@RequestBody User user){
		userService.updateUser(user);
	}

}
