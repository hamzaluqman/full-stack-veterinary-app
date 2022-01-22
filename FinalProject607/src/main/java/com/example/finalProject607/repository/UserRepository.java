package com.example.finalProject607.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.example.finalProject607.model.User;

@Repository
public class UserRepository {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public ArrayList<String> getAllUserNames(){
		ArrayList<String>userNameList = new ArrayList<>();
		userNameList.addAll(jdbcTemplate.queryForList("SELECT * FROM user;", String.class ));
		return userNameList;
	}

	public User getUser(int uCID) {
		
		String sqlQuery = "SELECT * FROM users WHERE UCID = " + String.valueOf(uCID) + ";";
		
		return jdbcTemplate.query(sqlQuery, new ResultSetExtractor<User>(){  
		    public User extractData(ResultSet rs) throws SQLException, DataAccessException {  
		    	
		    	rs.next();
	        	User user = new User();  
	        	user.setUcid(rs.getInt(1));
	        	user.setFName(rs.getString(2));
	        	user.setLname(rs.getString(3));
	        	user.setEmail(rs.getString(4));
	        	user.setOccupancy(rs.getString(5));
	        	user.setUserStatus(rs.getString(6));
	        	user.setUserPassword(rs.getString(7));
	        	
	        	return user;
		    }  
		});
	}

	public ArrayList<User> getAllUsers() {
		
		ArrayList <User> allUsers = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM users;";
		
		allUsers.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<User>>(){  
		    public ArrayList <User> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <User> list = new ArrayList<User>();  
		        while(rs.next()){  
		        	User user = new User();  
		        	user.setUcid(rs.getInt(1));
		        	user.setFName(rs.getString(2));
		        	user.setLname(rs.getString(3));
		        	user.setEmail(rs.getString(4));
		        	user.setOccupancy(rs.getString(5));
		        	user.setUserStatus(rs.getString(6));
		        	user.setUserPassword(rs.getString(7));
		        	list.add(user);  
		        }  
		        return list;  
		    }  
		    }));
		
		return allUsers;
	}


	public void createUser(int ucid, String fName, String lname, String email, String occupancy, String userStatus,
			String userPassword) {
		String sqlQuery = "INSERT INTO users (UCID, FName, LName, Email, Occupancy, UserStatus, UserPassword)\r\n"
				+ "VALUES\r\n"
				+ "(?, ?, ?, ?, ?, ?, ?);";
		
	    jdbcTemplate.update(sqlQuery, ucid, fName, lname, email, occupancy, userStatus, userPassword);
		
	}

	public void updateUser(int ucid, String fName, String lname, String email, String occupancy, String userStatus) {
		
		String sqlQuery = "UPDATE users SET FName = ?, LName = ?, Email = ?, Occupancy = ?, UserStatus = ? "
				+ "WHERE UCID = ?;" ;
		
	    jdbcTemplate.update(sqlQuery, fName, lname, email, occupancy, userStatus, ucid);
		
	}

	public ArrayList<User> getStudents() {
		
		ArrayList <User> allStudents = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM users WHERE Occupancy = 'Student';";
		
		allStudents.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<User>>(){  
		    public ArrayList <User> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <User> list = new ArrayList<User>();  
		        while(rs.next()){  
		        	User user = new User();  
		        	user.setUcid(rs.getInt(1));
		        	user.setFName(rs.getString(2));
		        	user.setLname(rs.getString(3));
		        	user.setEmail(rs.getString(4));
		        	user.setOccupancy(rs.getString(5));
		        	user.setUserStatus(rs.getString(6));
		        	user.setUserPassword(rs.getString(7));
		        	list.add(user);  
		        }  
		        return list;  
		    }  
		    }));
		
		return allStudents;
	}

	public User userLogin(int uCID, String password) {
		String sqlQuery = "SELECT * FROM users WHERE UCID = " + String.valueOf(uCID) + " AND UserPassword = '" + password + "';";
		
		return jdbcTemplate.query(sqlQuery, new ResultSetExtractor<User>(){  
		    public User extractData(ResultSet rs) throws SQLException, DataAccessException {  
		    	
		    	rs.next();
	        	User user = new User();  
	        	user.setUcid(rs.getInt(1));
	        	user.setFName(rs.getString(2));
	        	user.setLname(rs.getString(3));
	        	user.setEmail(rs.getString(4));
	        	user.setOccupancy(rs.getString(5));
	        	user.setUserStatus(rs.getString(6));
	        	user.setUserPassword(rs.getString(7));
	        	
	        	return user;
		    }  
		});
	}

	public ArrayList<User> getCurrentUsers() {
		ArrayList <User> currentUsers = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM users WHERE UserStatus = 'Current';";
		
		currentUsers.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<User>>(){  
		    public ArrayList <User> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <User> list = new ArrayList<User>();  
		        while(rs.next()){  
		        	User user = new User();  
		        	user.setUcid(rs.getInt(1));
		        	user.setFName(rs.getString(2));
		        	user.setLname(rs.getString(3));
		        	user.setEmail(rs.getString(4));
		        	user.setOccupancy(rs.getString(5));
		        	user.setUserStatus(rs.getString(6));
		        	user.setUserPassword(rs.getString(7));
		        	list.add(user);  
		        }  
		        return list;  
		    }  
		    }));
		
		return currentUsers;
	}

	public ArrayList<User> getPendingUsers() {
		ArrayList <User> pendingUsers = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM users WHERE UserStatus = 'Pending';";
		
		pendingUsers.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<User>>(){  
		    public ArrayList <User> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <User> list = new ArrayList<User>();  
		        while(rs.next()){  
		        	User user = new User();  
		        	user.setUcid(rs.getInt(1));
		        	user.setFName(rs.getString(2));
		        	user.setLname(rs.getString(3));
		        	user.setEmail(rs.getString(4));
		        	user.setOccupancy(rs.getString(5));
		        	user.setUserStatus(rs.getString(6));
		        	user.setUserPassword(rs.getString(7));
		        	list.add(user);  
		        }  
		        return list;  
		    }  
		    }));
		
		return pendingUsers;
	}

	public ArrayList<User> getBlockedUsers() {
		ArrayList <User> blockedUsers = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM users WHERE UserStatus = 'Blocked';";
		
		blockedUsers.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<User>>(){  
		    public ArrayList <User> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <User> list = new ArrayList<User>();  
		        while(rs.next()){  
		        	User user = new User();  
		        	user.setUcid(rs.getInt(1));
		        	user.setFName(rs.getString(2));
		        	user.setLname(rs.getString(3));
		        	user.setEmail(rs.getString(4));
		        	user.setOccupancy(rs.getString(5));
		        	user.setUserStatus(rs.getString(6));
		        	user.setUserPassword(rs.getString(7));
		        	list.add(user);  
		        }  
		        return list;  
		    }  
		    }));
		
		return blockedUsers;
	}


}
