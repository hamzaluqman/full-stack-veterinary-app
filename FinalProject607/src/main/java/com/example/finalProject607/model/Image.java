package com.example.finalProject607.model;

public class Image {
	
	private int animalID;
	private String imagePath;
	private int ucid;
	
	public Image(int animalID, String imagePath, int ucid) {
		this.animalID = animalID;
		this.imagePath = imagePath;
		this.ucid = ucid;
	}
	

	public int getAnimalID() {
		return animalID;
	}
	public void setAnimalID(int animalID) {
		this.animalID = animalID;
	}
	public String getImagePath() {
		return imagePath;
	}
	public void setImagePath(String imagePath) {
		this.imagePath = imagePath;
	}
	public int getUcid() {
		return ucid;
	}
	public void setUcid(int ucid) {
		this.ucid = ucid;
	}
	
}
