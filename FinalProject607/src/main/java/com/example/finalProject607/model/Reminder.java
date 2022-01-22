package com.example.finalProject607.model;

public class Reminder {
	
	private int animalID;
	private String entryDate;
	private String reminderDescription;
	private String dueDate;
	private int ucid;
	
	
	public Reminder(int animalID, String entryDate, String reminderDescription, String dueDate, int ucid) {
		this.animalID = animalID;
		this.entryDate = entryDate;
		this.reminderDescription = reminderDescription;
		this.dueDate = dueDate;
		this.ucid = ucid;
	}


	public Reminder() {}


	public int getAnimalID() {
		return animalID;
	}


	public void setAnimalID(int animalID) {
		this.animalID = animalID;
	}


	public String getEntryDate() {
		return entryDate;
	}


	public void setEntryDate(String entryDate) {
		this.entryDate = entryDate;
	}


	public String getReminderDescription() {
		return reminderDescription;
	}


	public void setReminderDescription(String reminderDescription) {
		this.reminderDescription = reminderDescription;
	}


	public String getDueDate() {
		return dueDate;
	}


	public void setDueDate(String dueDate) {
		this.dueDate = dueDate;
	}


	public int getUcid() {
		return ucid;
	}


	public void setUcid(int ucid) {
		this.ucid = ucid;
	}

}
