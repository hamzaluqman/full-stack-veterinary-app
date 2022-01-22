package com.example.finalProject607.repository;

import java.time.LocalDate;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.example.finalProject607.model.Booking;


@Repository
public class BookingRepository {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	// Instructor
	
	public ArrayList<Booking> getCurrentBookings(int animalID){
		ArrayList <Booking> bookingList = new ArrayList<>();
		String sqlQuery = "SELECT * FROM booking WHERE booking.AnimalID = " + String.valueOf(animalID) + ";";
		bookingList.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<Booking>>(){  
		    public ArrayList <Booking> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <Booking> list = new ArrayList<Booking>();  
		        while(rs.next()){  
		        	Booking Booking = new Booking();  
		        	Booking.setAnimalID(rs.getInt(1)); 
		        	Booking.setBookingDate(rs.getString(2));  
		        	Booking.setReturnDate(rs.getString(3));
		        	Booking.setUcid(rs.getInt(4));  
		        	list.add(Booking);  
		        }  
		        return list;  
		    }  
		    }));
		return bookingList;
	}
	
	
	public void deleteBooking(int AnimalID, int UCID, LocalDate bookingDate) {
		String sqlQuery = "DELETE FROM booking WHERE (AnimalID = ? AND UCID = ? AND BookingDate = ?);";
	    jdbcTemplate.update(sqlQuery, AnimalID, UCID, bookingDate);
	    return;
	}


	public void createBooking(int animalID, String bookingDate, String returnDate, int ucid) {
		String sqlQuery = "INSERT INTO booking (AnimalID, BookingDate, ReturnDate, UCID)\r\n"
				+ "VALUES\r\n"
				+ "(?, ?, ?, ?);";
		
	    jdbcTemplate.update(sqlQuery, animalID, bookingDate, returnDate, ucid);
		
	}

	public void deleteBooking(int animalID, String date) {
		
		String sqlQuery = "DELETE FROM booking WHERE booking.animalID = ? AND booking.BookingDate = ?;";
		
	    jdbcTemplate.update(sqlQuery, animalID, date);
		
	}
	

	public LocalDate returnLatestDate(int animalID) {
		
		ArrayList <Booking> bookingList = new ArrayList<>();
		
		bookingList = getCurrentBookings(animalID);
		
		if (bookingList.size() == 0) {
			LocalDate dateNow = LocalDate.now();
			return dateNow.minusDays(1);
		} else {
			
			ArrayList <LocalDate> allReturnDates = new ArrayList <>();
			
			for (int i = 0; i < bookingList.size(); i++) {
				LocalDate date = LocalDate.parse(bookingList.get(i).getReturnDate());
				allReturnDates.add(date);
			}

			return Collections.max(allReturnDates);
			
		}

	}
	
}
