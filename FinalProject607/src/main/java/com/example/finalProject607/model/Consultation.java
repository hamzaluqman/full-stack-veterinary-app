package com.example.finalProject607.model;

public class Consultation {
	
	private int animalID;
	private String consultationDate;
	private String diagnosis;
	private String treatment;
	private String prescription;
	private int ucid;
	
	
	public Consultation(int animalID, String consultationDate, String diagnosis, String treatment, String prescription,
			int ucid) {
		this.animalID = animalID;
		this.consultationDate = consultationDate;
		this.diagnosis = diagnosis;
		this.treatment = treatment;
		this.prescription = prescription;
		this.ucid = ucid;
	}


	public Consultation() {}


	public int getAnimalID() {
		return animalID;
	}


	public void setAnimalID(int animalID) {
		this.animalID = animalID;
	}


	public String getConsultationDate() {
		return consultationDate;
	}


	public void setConsultationDate(String consultationDate) {
		this.consultationDate = consultationDate;
	}


	public String getDiagnosis() {
		return diagnosis;
	}


	public void setDiagnosis(String diagnosis) {
		this.diagnosis = diagnosis;
	}


	public String getTreatment() {
		return treatment;
	}


	public void setTreatment(String treatment) {
		this.treatment = treatment;
	}


	public String getPrescription() {
		return prescription;
	}


	public void setPrescription(String prescription) {
		this.prescription = prescription;
	}


	public int getUcid() {
		return ucid;
	}


	public void setUcid(int ucid) {
		this.ucid = ucid;
	}
	
}
