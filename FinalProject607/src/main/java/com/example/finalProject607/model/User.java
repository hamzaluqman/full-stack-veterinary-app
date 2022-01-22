package com.example.finalProject607.model;

public class User {
	
	private int ucid;
	private String fName;
	private String lname;
	private String email;
	private String occupancy;
	private String userStatus;
	private String userPassword;
	
	
	public User() {}
	public User(int ucid, String fName, String lname, String email, String occupancy, String userStatus,
			String userPassword) {
		this.ucid = ucid;
		this.fName = fName;
		this.lname = lname;
		this.email = email;
		this.occupancy = occupancy;
		this.userStatus = userStatus;
		this.userPassword = userPassword;
	}
	
	
	public int getUcid() {
		return ucid;
	}
	public void setUcid(int ucid) {
		this.ucid = ucid;
	}
	public String getFName() {
		return fName;
	}
	public void setFName(String fName) {
		this.fName = fName;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String fname) {
		this.lname = fname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getOccupancy() {
		return occupancy;
	}
	public void setOccupancy(String occupancy) {
		this.occupancy = occupancy;
	}
	public String getUserStatus() {
		return userStatus;
	}
	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}
	public String getUserPassword() {
		return userPassword;
	}
	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}
	

}
