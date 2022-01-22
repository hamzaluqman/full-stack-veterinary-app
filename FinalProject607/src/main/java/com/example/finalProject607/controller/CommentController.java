package com.example.finalProject607.controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.finalProject607.model.Comment;
import com.example.finalProject607.service.CommentService;

@RestController
@RequestMapping(path = "/comment")
public class CommentController {
	
	@Autowired
	private CommentService commentService;
	
	public CommentController(CommentService commentService) {
		this.commentService = commentService;
	}
	
	@GetMapping
	public ArrayList<Comment> getComments() {
		return commentService.getComments();
	}

	
	@PostMapping(path = "/")
	public void createConsultation(@RequestBody Comment comment) {
		commentService.createComment(comment);
	}

}
