package com.example.finalProject607.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalProject607.model.Booking;
import com.example.finalProject607.repository.AnimalRepository;
import com.example.finalProject607.repository.BookingRepository;

import java.time.LocalDate;
import java.util.ArrayList;

@Service
public class BookingService {

    private BookingRepository bookingRepository;
    private AnimalRepository animalRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository, AnimalRepository animalRepository) {
        this.bookingRepository = bookingRepository;
        this.animalRepository = animalRepository;
    }


    public ArrayList<Booking> getCurrentBookings(int animalID) {
        ArrayList<Booking> theBookings = new ArrayList<>();
        theBookings.addAll(bookingRepository.getCurrentBookings(animalID));
        return theBookings;
    }
    

    public void bookAnimal(Booking booking) {
        int ucid = booking.getUcid();
        int animalID = booking.getAnimalID();
        String bookingDate = booking.getBookingDate();
        String status = "Booked";
        String returnDate = booking.getReturnDate();
        
        LocalDate dateFormatBookingDate = LocalDate.parse(bookingDate);
        LocalDate latestReturnDate = bookingRepository.returnLatestDate(animalID);
        
        if(latestReturnDate.compareTo(dateFormatBookingDate) > 0) {
        	System.out.println("Booking date before return date");
        } else {
            bookingRepository.createBooking(animalID, bookingDate, returnDate, ucid);
            animalRepository.updateAnimalAvailability(status, animalID);
        }

    }

    public void cancelBooking(Booking booking) {
        int animalID = booking.getAnimalID();
        String date = booking.getBookingDate();
        bookingRepository.deleteBooking(animalID, date);
    }

}