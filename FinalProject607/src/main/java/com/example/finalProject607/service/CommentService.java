package com.example.finalProject607.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.finalProject607.model.Comment;
import com.example.finalProject607.repository.CommentRepository;


@Service
public class CommentService {
	
	@Autowired
	private CommentRepository commentRepo;
	
	
	public CommentService(CommentRepository commentRepo) {
		this.commentRepo = commentRepo;
	}


	public ArrayList<Comment> getComments() {
		return commentRepo.getComments();
	}

	public void createComment(Comment comment) {
		
		int animalID = comment.getAnimalID();
		String entryDate = comment.getEntryDate();
		String commentBody = comment.getComment();
		int ucid = comment.getUcid();
		
		 commentRepo.createComment(animalID,  entryDate, commentBody, ucid);	
	}

}
