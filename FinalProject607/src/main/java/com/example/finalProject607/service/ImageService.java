package com.example.finalProject607.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.boot.autoconfigure.web.ServerProperties.Tomcat.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class ImageService {
	
//	private Path path;
	
	public ImageService() {}

	public void uploadImage(MultipartFile imageFile) throws Exception{
		// TODO Auto-generated method stub
		String folder = "/Photos/";
		byte [] bytes = imageFile.getBytes();
		Path path = Paths.get(folder + imageFile.getOriginalFilename());
		Files.write(path, bytes);
	}

	public Resource loadAsResource(String filename) {
		// TODO Auto-generated method stub
		return null;
	}
}
