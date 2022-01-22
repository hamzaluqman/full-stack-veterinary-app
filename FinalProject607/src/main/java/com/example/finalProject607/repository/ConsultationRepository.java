package com.example.finalProject607.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.example.finalProject607.model.Consultation;

@Repository
public class ConsultationRepository {
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	

	public void createConsultation(int animalID, String consultationDate, String diagnosis, String treatment,
			String prescription, int ucid) {
		String sqlQuery = "INSERT INTO consultation (AnimalID, ConsultationDate, Diagnosis, Treatment, Prescription, UCID)\r\n"
				+ "VALUES\r\n"
				+ "(?, ?, ?, ?, ?, ?);";
		
	    jdbcTemplate.update(sqlQuery, animalID, consultationDate, diagnosis, treatment, prescription, ucid);
		
	}

	public ArrayList<Consultation> getConsultations() {
		
		ArrayList <Consultation> allConsultations = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM consultation;";
		
		allConsultations.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<Consultation>>(){  
		    public ArrayList <Consultation> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <Consultation> list=new ArrayList<Consultation>(); 
		    	
		        while(rs.next()){  
		        	Consultation consultation = new Consultation();  
		        	consultation.setAnimalID(rs.getInt(1));
		        	consultation.setConsultationDate(rs.getString(2));
		        	consultation.setDiagnosis(rs.getString(3));
		        	consultation.setTreatment(rs.getString(4));
		        	consultation.setPrescription(rs.getString(5));
		        	consultation.setUcid(rs.getInt(6));
		        	list.add(consultation);  
		        }  
		        return list;  
		    }  
		    }));
		
		return allConsultations;
	}

}
