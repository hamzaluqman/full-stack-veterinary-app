package com.example.finalProject607.model;

public class Comment {
	
	private int animalID;			
	private String entryDate;			
	private String comment;		
	private int ucid;
	
	public Comment() {}
	
	
	public Comment(int animalID, String entryDate, String comment, int ucid) {
		this.animalID = animalID;
		this.entryDate = entryDate;
		this.comment = comment;
		this.ucid = ucid;
	}


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


	public String getComment() {
		return comment;
	}


	public void setComment(String comment) {
		this.comment = comment;
	}


	public int getUcid() {
		return ucid;
	}


	public void setUcid(int ucid) {
		this.ucid = ucid;
	}


}
