package com.example.finalProject607.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.example.finalProject607.model.Reminder;

@Repository
public class ReminderRepository {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	

	public void createReminder(int animalID, String entryDate, String reminderDescription, String dueDate, int ucid) {
		String sqlQuery = "INSERT INTO reminder (AnimalID, EntryDate, ReminderDescription, DueDate, UCID)\r\n"
				+ "VALUES\r\n"
				+ "(?, ?, ?, ?, ?);";
		
	    jdbcTemplate.update(sqlQuery, animalID, entryDate, reminderDescription, dueDate, ucid);
		
	}
		

	public ArrayList<Reminder> getReminders() {
		
		ArrayList <Reminder> allReminders = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM reminder;";
		
		allReminders.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<Reminder>>(){  
		    public ArrayList <Reminder> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <Reminder> list=new ArrayList<Reminder>();  
		        while(rs.next()){  
		        	Reminder reminder = new Reminder();  
		        	reminder.setAnimalID(rs.getInt(1));
		        	reminder.setEntryDate(rs.getString(2));
		        	reminder.setReminderDescription(rs.getString(3));
		        	reminder.setDueDate(rs.getString(4));
		        	reminder.setUcid(rs.getInt(5));
		        	list.add(reminder);  
		        }  
		        return list;  
		    }  
		    }));
		
		return allReminders;
	}

}
