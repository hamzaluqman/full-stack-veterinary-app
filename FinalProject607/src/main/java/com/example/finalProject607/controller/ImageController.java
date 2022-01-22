package com.example.finalProject607.controller;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;
import java.io.FileInputStream;
import java.io.InputStream;
import javax.imageio.ImageIO;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.example.finalProject607.service.ImageService;

//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/image")
public class ImageController {
	
	
	@Autowired
	private ImageService imageService;
	
	public ImageController (ImageService imageService) {
		this.imageService = imageService;
	}
	
//	@RequestMapping(value = "/imageFile", method = RequestMethod.GET)
	@GetMapping
	public void showImage(@RequestParam String filePath, HttpServletResponse response) throws Exception {
	
		ByteArrayOutputStream jpegOutputStream = new ByteArrayOutputStream();
	
	    try {
	    	String path = filePath;
            InputStream is = new FileInputStream(path);
            BufferedImage img = ImageIO.read(is);
            ImageIO.write(img, "jpeg", jpegOutputStream);
	    } catch (IllegalArgumentException e) {
	    	response.sendError(HttpServletResponse.SC_NOT_FOUND);
	    }
	
	    byte[] imgByte = jpegOutputStream.toByteArray();
	
	    response.setHeader("Cache-Control", "no-store");
	    response.setHeader("Pragma", "no-cache");
	    response.setDateHeader("Expires", 0);
	    response.setContentType("image/jpeg");
	    ServletOutputStream responseOutputStream = response.getOutputStream();
	    responseOutputStream.write(imgByte);
	    responseOutputStream.flush();
	    responseOutputStream.close();
	}
	
	
	@PostMapping("/")
	public String uploadImage (@RequestParam("imageFile") MultipartFile imageFile, 
			RedirectAttributes redirectAttributes){
		
		try {
			imageService.uploadImage(imageFile);
			redirectAttributes.addFlashAttribute("message",
					"You successfully uploaded " + imageFile.getOriginalFilename() + "!");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		
		return "redirect:/";
	}
	


}
