package com.example.finalProject607.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalProject607.model.Reminder;
import com.example.finalProject607.repository.ReminderRepository;


@Service
public class ReminderService {
	
	
	@Autowired
	private ReminderRepository reminderRepo;
	
	public ReminderService(ReminderRepository reminderRepo) {
		this.reminderRepo = reminderRepo;
	}
	

	public void createReminder(Reminder reminder) {
		
		int animalID = reminder.getAnimalID();
		String entryDate = reminder.getEntryDate();
		String reminderDescription = reminder.getReminderDescription();
		String dueDate = reminder.getDueDate();
		int ucid = reminder.getUcid();
		
		reminderRepo.createReminder(animalID, entryDate, reminderDescription, dueDate, ucid);
	}

	public ArrayList<Reminder> getReminders() {
		return reminderRepo.getReminders();
	}

}
