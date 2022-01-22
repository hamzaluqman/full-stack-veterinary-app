package com.example.finalProject607.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalProject607.model.User;
import com.example.finalProject607.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepo;
	
	public UserService(UserRepository userRepo) {
		this.userRepo = userRepo;
	}

	public User getUser(int uCID) {
		return userRepo.getUser(uCID);
	}

	public ArrayList<User> getAllUsers() {
		return userRepo.getAllUsers();
	}

	public void createUsers(User user) {
		int ucid = user.getUcid();
		String fName = user.getFName();
		String lname = user.getLname();
		String email = user.getEmail();
		String occupancy = user.getOccupancy();
		String userStatus = user.getOccupancy();
		String userPassword = user.getUserPassword();
		userRepo.createUser(ucid, fName, lname, email, occupancy,  userStatus,
				userPassword);
	}

	public void updateUser(User user) {
		int ucid = user.getUcid();
		String fName = user.getFName();
		String lname = user.getLname();
		String email = user.getEmail();
		String occupancy = user.getOccupancy();
		String userStatus = user.getUserStatus();
		String userPassword = user.getUserPassword();
		System.out.println(userPassword);
		userRepo.updateUser(ucid, fName, lname, email, occupancy,  userStatus);
		
	}

	public ArrayList<User> getStudents() {
		return userRepo.getStudents();
	}

	public User getLogin(int uCID, String password) {
		return userRepo.userLogin(uCID, password);
	}

	public ArrayList<User> getCurrentUsers() {
		return userRepo.getCurrentUsers();
	}

	public ArrayList<User> getPendingUsers() {
		return userRepo.getPendingUsers();
	}

	public ArrayList<User> getBlockedUsers() {
		return userRepo.getBlockedUsers();
	}

}
