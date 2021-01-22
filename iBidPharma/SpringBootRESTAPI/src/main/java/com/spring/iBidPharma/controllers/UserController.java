package com.spring.iBidPharma.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.iBidPharma.models.Manufacturer;
import com.spring.iBidPharma.models.User;
import com.spring.iBidPharma.repository.UserRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserRepository userRepository;

	@GetMapping("/login")
	public User userLogin(@RequestParam String email, @RequestParam String password) {
		User user = userRepository.userLogin(email,password);
		if(user != null)
			return user;
		else 
			return new User();
	}
	
	@PostMapping("/users")
	public User createUser( @RequestBody User user)
	{
		return userRepository.save(user);
	}
}
