package com.example.finalProject607.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.example.finalProject607.model.Animal;


@Repository
public class AnimalRepository {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	public ArrayList<Animal> getAvailableAnimals(){
		
		ArrayList <Animal> availableAnimalList = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM animal WHERE animal.Availability = 'Available';";
		
		availableAnimalList.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<Animal>>(){  
		    public ArrayList <Animal> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <Animal> list=new ArrayList<Animal>();  
		        while(rs.next()){  
		        	Animal animal = new Animal();  
		        	animal.setAnimalID(rs.getInt(1));  
		        	animal.setName(rs.getString(2));  
		        	animal.setWeight(rs.getDouble(3));
		        	animal.setTattooNum(rs.getInt(4));
		        	animal.setBirthDate(rs.getString(5));
		        	animal.setAnimalType(rs.getString(6));
		        	animal.setAnimalStatus(rs.getString(7)); 
		        	animal.setAvailability(rs.getString(8));  
		        	animal.setBreed(rs.getString(9)); 
		        	animal.setSex(rs.getString(10)); 
		        	animal.setCoatColor(rs.getString(11)); 
		        	animal.setRFID(rs.getString(12)); 
		        	list.add(animal);  
		        }  
		        return list;  
		    }  
		    }));
		
		return availableAnimalList;
	}
	
	public void updateAnimalAvailability(String availability, int AnimalID) {
		String sqlQuery = "UPDATE animal SET Availability = ? WHERE AnimalID = ?;";
	    jdbcTemplate.update(sqlQuery, availability, AnimalID);
	}

	public Animal getAnimal(int animalID) {
		    	
		String sqlQuery = "SELECT * FROM animal WHERE AnimalID = " + String.valueOf(animalID) + ";";
		
		return jdbcTemplate.query(sqlQuery, new ResultSetExtractor<Animal>(){  
		    public Animal extractData(ResultSet rs) throws SQLException, DataAccessException {  
		    	
		    	rs.next();
	        	Animal animal = new Animal();  
	        	animal.setAnimalID(rs.getInt(1));  
	        	animal.setName(rs.getString(2));  
	        	animal.setWeight(rs.getDouble(3));
	        	animal.setTattooNum(rs.getInt(4));
	        	animal.setBirthDate(rs.getString(5));
	        	animal.setAnimalType(rs.getString(6));
	        	animal.setAnimalStatus(rs.getString(7)); 
	        	animal.setAvailability(rs.getString(8));  
	        	animal.setBreed(rs.getString(9)); 
	        	animal.setSex(rs.getString(10)); 
	        	animal.setCoatColor(rs.getString(11)); 
	        	animal.setRFID(rs.getString(12)); 
	        	
	        	return animal;
		    }  
		});
	}

	public void updateAnimalStatus(int animalID, String status) {
		String sqlQuery = "UPDATE animal SET AnimalStatus = ? WHERE animal.AnimalID = ?;";
	    jdbcTemplate.update(sqlQuery, status, animalID);
	}
	
	

	public void createAnimal(int animalID, String name, double weight, int tattooNum, String birthDate,
			String animalType, String animalStatus, String availability, String breed, String sex, String coatColor,
			String rFID) {
		
		String sqlQuery = "INSERT INTO animal (AnimalName, Weight, TattooNum, BirthDate, AnimalType, AnimalStatus, Availability, Breed, Sex, CoatColor, RFID)\r\n"
				+ "VALUES\r\n"
				+ "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
		
	    jdbcTemplate.update(sqlQuery, name, weight, tattooNum, birthDate,
				animalType, animalStatus, availability, breed, sex, coatColor,
				rFID);
		
	}
	
	

	public void updateAnimalProfile(int animalID, String name, double weight, int tattooNum, String birthDate,
			String animalType, String animalStatus, String availability, String breed, String sex, String coatColor,
			String rFID) {
		
		String sqlQuery = "DELETE FROM animal WHERE animal.AnimalID = ?;";
		jdbcTemplate.update(sqlQuery, animalID);
		
		sqlQuery = "INSERT INTO animal (AnimalID, AnimalName, Weight, TattooNum, BirthDate, AnimalType, AnimalStatus, Availability, Breed, Sex, CoatColor, RFID)\r\n"
				+ "VALUES "
				+ "(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";
		
	    jdbcTemplate.update(sqlQuery, animalID, name, weight, tattooNum, birthDate,
				animalType, animalStatus, availability, breed, sex, coatColor,
				rFID);
		
	}

	public ArrayList<Animal> getAnimals() {
		ArrayList <Animal> availableAnimalList = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM animal;";
		
		availableAnimalList.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<Animal>>(){  
		    public ArrayList <Animal> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <Animal> list=new ArrayList<Animal>();  
		        while(rs.next()){  
		        	Animal animal = new Animal();  
		        	animal.setAnimalID(rs.getInt(1));  
		        	animal.setName(rs.getString(2));  
		        	animal.setWeight(rs.getDouble(3));
		        	animal.setTattooNum(rs.getInt(4));
		        	animal.setBirthDate(rs.getString(5));
		        	animal.setAnimalType(rs.getString(6));
		        	animal.setAnimalStatus(rs.getString(7)); 
		        	animal.setAvailability(rs.getString(8));  
		        	animal.setBreed(rs.getString(9)); 
		        	animal.setSex(rs.getString(10)); 
		        	animal.setCoatColor(rs.getString(11)); 
		        	animal.setRFID(rs.getString(12)); 
		        	list.add(animal);  
		        }  
		        return list;  
		    }  
		    }));
		
		return availableAnimalList;
	}

}
