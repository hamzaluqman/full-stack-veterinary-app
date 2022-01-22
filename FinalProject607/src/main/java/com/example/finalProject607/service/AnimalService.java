package com.example.finalProject607.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalProject607.model.Animal;
import com.example.finalProject607.repository.AnimalRepository;

@Service
public class AnimalService {
	
	@Autowired
	private AnimalRepository animalRepo;
	
	
	public AnimalService(AnimalRepository animalRepo) {
		this.animalRepo = animalRepo;
	}


	public ArrayList<Animal> getAvailableAnimals() {
		return animalRepo.getAvailableAnimals();
	}

	public void updateAnimalAvailability(Animal animal) {
		int animalID = animal.getAnimalID();
		String availability = animal.getAvailability();
		animalRepo.updateAnimalAvailability(availability, animalID);
	}


	public Animal getAnimal(int animalID) {
		return animalRepo.getAnimal(animalID);
	}


	public void updateAnimalStatus(Animal animal) {
		int animalID = animal.getAnimalID();
		String status = animal.getAnimalStatus();
		animalRepo.updateAnimalStatus(animalID, status);
	}


	public void createAnimal(Animal animal) {
		int animalID = animal.getAnimalID();
		String name = animal.getName();
		double weight = animal.getWeight();
		int tattooNum = animal.getTattooNum();
		String birthDate = animal.getBirthDate();
		String animalType = animal.getAnimalType();
		String animalStatus = animal.getAnimalStatus();
		String availability = animal.getAvailability();
		String breed = animal.getBreed();
		String sex = animal.getSex();
		String coatColor = animal.getCoatColor();
		String RFID = animal.getRFID();
		animalRepo.createAnimal(animalID, name, weight, tattooNum, birthDate,
				animalType, animalStatus, availability, breed, sex, coatColor, RFID);		
	}


	public void updateAnimalProfile(Animal animal) {
		int animalID = animal.getAnimalID();
		String name = animal.getName();
		double weight = animal.getWeight();
		int tattooNum = animal.getTattooNum();
		String birthDate = animal.getBirthDate();
		String animalType = animal.getAnimalType();
		String animalStatus = animal.getAnimalStatus();
		String availability = animal.getAvailability();
		String breed = animal.getBreed();
		String sex = animal.getSex();
		String coatColor = animal.getCoatColor();
		String RFID = animal.getRFID();
		animalRepo.updateAnimalProfile(animalID, name, weight, tattooNum, birthDate,
				animalType, animalStatus, availability, breed, sex, coatColor, RFID);
	}


	public ArrayList<Animal> getAnimals() {
		return animalRepo.getAnimals();
	}

}
