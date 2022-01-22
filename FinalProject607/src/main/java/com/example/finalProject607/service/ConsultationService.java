package com.example.finalProject607.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalProject607.model.Consultation;
import com.example.finalProject607.repository.ConsultationRepository;


@Service
public class ConsultationService {
	
	@Autowired
	private ConsultationRepository consultationRepo;
	
	
	public ConsultationService(ConsultationRepository consultationRepo) {
		this.consultationRepo = consultationRepo;
	}


	public void createConsultation(Consultation consultation) {
		int animalID = consultation.getAnimalID();
		String consultationDate = consultation.getConsultationDate();
		String diagnosis = consultation.getDiagnosis();
		String treatment = consultation.getTreatment();
		String prescription = consultation.getPrescription();
		int ucid = consultation.getUcid();
		consultationRepo.createConsultation(animalID, consultationDate, diagnosis, treatment, prescription,
				ucid);
		
	}

	public ArrayList<Consultation> getConsultation() {
		return consultationRepo.getConsultations();		
	}


}
