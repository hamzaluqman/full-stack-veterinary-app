package com.example.finalProject607.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalProject607.model.Animal;
import com.example.finalProject607.service.AnimalService;


@RestController
@RequestMapping(path="/animal")
public class AnimalController {
	
	AnimalService animalService;
	
	@Autowired
	public AnimalController(AnimalService animalService) {
		this.animalService = animalService;
	}
	
	@GetMapping // Tested
	public ArrayList<Animal> getAnimals(){
		return animalService.getAnimals();
	}
	
	@GetMapping (path = "/available-animals") // Tested
	public ArrayList<Animal> getAvailableAnimals(){
		return animalService.getAvailableAnimals();
	}
	
	@GetMapping (path = "/profile/{animalID}") // Tested
	public Animal getAnimal(@PathVariable int animalID){
		return animalService.getAnimal(animalID);
	}
	
	@PutMapping(path = "/availability") // Tested
	public void updateAnimalAvailability(@RequestBody Animal animal) {
		animalService.updateAnimalAvailability(animal);
	}
	
	@PutMapping(path = "/status") // Tested
	public void updateAnimalStatus(@RequestBody Animal animal) {
		animalService.updateAnimalStatus(animal);
	}
	
	@PutMapping(path = "/profile") // Tested
	public void updateAnimalProfile(@RequestBody Animal animal) {
		animalService.updateAnimalProfile(animal);
	}
	
	@PostMapping(path = "/") // Tested
	public void createAnimal(@RequestBody Animal animal) {
		animalService.createAnimal(animal);
	}
	
}
