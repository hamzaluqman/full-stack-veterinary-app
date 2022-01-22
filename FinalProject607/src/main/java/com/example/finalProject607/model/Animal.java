package com.example.finalProject607.model;

public class Animal {
	
	private int animalID;
	private String name;
	private double weight;
	private int tattooNum;
	private String birthDate;
	private String animalType;
	private String animalStatus;
	private String availability;
	private String breed;
	private String sex;
	private String coatColor;
	private String RFID;
	
	public Animal() {}


	public Animal(int animalID, String name, double weight, int tattooNum, String birthDate, String animalType,
			String animalStatus, String availability, String breed, String sex, String coatColor, String RFID) {
		this.animalID = animalID;
		this.name = name;
		this.weight = weight;
		this.tattooNum = tattooNum;
		this.birthDate = birthDate;
		this.animalType = animalType;
		this.animalStatus = animalStatus;
		this.availability = availability;
		this.breed = breed;
		this.sex = sex;
		this.coatColor = coatColor;
		this.RFID = RFID;
	}


	public int getAnimalID() {
		return animalID;
	}


	public void setAnimalID(int animalID) {
		this.animalID = animalID;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public double getWeight() {
		return weight;
	}


	public void setWeight(double weight) {
		this.weight = weight;
	}


	public int getTattooNum() {
		return tattooNum;
	}


	public void setTattooNum(int tattooNum) {
		this.tattooNum = tattooNum;
	}


	public String getBirthDate() {
		return birthDate;
	}


	public void setBirthDate(String birthDate) {
		this.birthDate = birthDate;
	}


	public String getAnimalType() {
		return animalType;
	}


	public void setAnimalType(String animalType) {
		this.animalType = animalType;
	}


	public String getAnimalStatus() {
		return animalStatus;
	}


	public void setAnimalStatus(String animalStatus) {
		this.animalStatus = animalStatus;
	}


	public String getAvailability() {
		return availability;
	}


	public void setAvailability(String availability) {
		this.availability = availability;
	}


	public String getBreed() {
		return breed;
	}


	public void setBreed(String breed) {
		this.breed = breed;
	}


	public String getSex() {
		return sex;
	}


	public void setSex(String sex) {
		this.sex = sex;
	}


	public String getCoatColor() {
		return coatColor;
	}


	public void setCoatColor(String coatColor) {
		this.coatColor = coatColor;
	}


	public String getRFID() {
		return RFID;
	}


	public void setRFID(String rfid) {
		this.RFID = rfid;
	}
	
}
