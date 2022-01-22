package com.example.finalProject607.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalProject607.model.Booking;
import com.example.finalProject607.service.BookingService;

@RestController
@RequestMapping(path = "/booking")
public class BookingController {
	
	@Autowired
	private BookingService bookingService;
	
	public BookingController(BookingService bookingService) {
		this.bookingService = bookingService;
	}

	@GetMapping(path = "/currentbookings/{animalID}")
	public ArrayList <Booking> getCurrentBookings(@PathVariable int animalID) {
		return bookingService.getCurrentBookings(animalID);
	}
	
	@PostMapping(path = "/")
	public void bookAnimal(@RequestBody Booking booking) {
		bookingService.bookAnimal(booking);
	}
	
	
	@DeleteMapping(path = "/delete")
	public void cancelBooking(@RequestBody Booking booking) {
		bookingService.cancelBooking(booking);
	}
	
}
