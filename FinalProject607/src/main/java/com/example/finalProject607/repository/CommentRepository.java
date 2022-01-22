package com.example.finalProject607.repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import com.example.finalProject607.model.Comment;

@Repository
public class CommentRepository {
	
	
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	

	public ArrayList<Comment> getComments() {
		
		ArrayList <Comment> allComments = new ArrayList<>();
		
		String sqlQuery = "SELECT * FROM comments;";
		
		allComments.addAll(jdbcTemplate.query(sqlQuery, new ResultSetExtractor<ArrayList<Comment>>(){  
		    public ArrayList <Comment> extractData(ResultSet rs) throws SQLException, DataAccessException {  
		      
		    	ArrayList <Comment> list=new ArrayList<Comment>();  
		        while(rs.next()){  
		        	Comment comment = new Comment();  
		        	comment.setAnimalID(rs.getInt(1));
		        	comment.setEntryDate(rs.getString(2));
		        	comment.setComment(rs.getString(3));
		        	comment.setUcid(rs.getInt(4));
		        	list.add(comment);  
		        }  
		        return list;  
		    }  
		    }));
		
		return allComments;
	}

	public void createComment(int animalID, String entryDate, String commentBody, int ucid) {
		String sqlQuery = "INSERT INTO comments (AnimalID, EntryDate, Comments, UCID)\r\n"
				+ "VALUES\r\n"
				+ "(?, ?, ?, ?);";
		
	    jdbcTemplate.update(sqlQuery, animalID, entryDate, commentBody, ucid);
		
	}

}
