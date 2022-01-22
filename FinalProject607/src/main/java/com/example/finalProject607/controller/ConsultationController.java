package com.example.finalProject607.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalProject607.model.Consultation;
import com.example.finalProject607.service.ConsultationService;

@RestController
@RequestMapping(path = "/consultation")
public class ConsultationController {
	
	@Autowired
	private ConsultationService consultationService;
	
	public ConsultationController(ConsultationService consultationService) {
		this.consultationService = consultationService;
	}
	
	
	@GetMapping
	public ArrayList <Consultation> getConsultation() {
		return consultationService.getConsultation();
	}

	
	@PostMapping(path = "/")
	public void createConsultation(@RequestBody Consultation consultation) {
		consultationService.createConsultation(consultation);
	}
	
	
}
