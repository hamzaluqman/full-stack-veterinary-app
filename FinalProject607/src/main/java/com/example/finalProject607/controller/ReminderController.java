package com.example.finalProject607.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalProject607.model.Reminder;
import com.example.finalProject607.service.ReminderService;

@RestController
@RequestMapping(path = "/reminder")
public class ReminderController {
	
	@Autowired
	private ReminderService reminderService;
	
	public ReminderController(ReminderService reminderService) {
		this.reminderService = reminderService;
	}
	
	@GetMapping
	public ArrayList <Reminder> getReminders(){
		return reminderService.getReminders();
	}

	@PostMapping(path = "/")
	public void createReminder(@RequestBody Reminder reminder) {
		reminderService.createReminder(reminder);
	}
	
}
