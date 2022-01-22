package com.example.finalProject607.model;

public class Booking {
	
	private int AnimalID;
	private String bookingDate;
	private String returnDate;
	private int ucid;
	
	public Booking() {}
	
	
	public Booking(int animalID, String bookingDate, String returnDate, int ucid) {
		AnimalID = animalID;
		this.bookingDate = bookingDate;
		this.returnDate = returnDate;
		this.ucid = ucid;
	}


	public int getAnimalID() {
		return AnimalID;
	}


	public void setAnimalID(int animalID) {
		AnimalID = animalID;
	}


	public String getBookingDate() {
		return bookingDate;
	}


	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}


	public String getReturnDate() {
		return returnDate;
	}


	public void setReturnDate(String returnDate) {
		this.returnDate = returnDate;
	}


	public int getUcid() {
		return ucid;
	}


	public void setUcid(int ucid) {
		this.ucid = ucid;
	}
		
}
