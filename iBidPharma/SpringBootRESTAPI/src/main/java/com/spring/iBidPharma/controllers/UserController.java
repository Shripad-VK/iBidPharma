package com.spring.iBidPharma.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.iBidPharma.models.Admin;
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
	
	@GetMapping("/users")
	public List<User> getInvalidUser()
	{
		return userRepository.getUser();
	}
	
	@PutMapping("/users/{uid}")
	public User updateUser(@PathVariable (value="uid")Long uid,@RequestBody User user)
	{
		User users =userRepository.findById(uid).orElse(null);
		users.setContact_no(user.getContact_no());
		users.setEmail(user.getEmail());
		users.setPassword(user.getPassword());
		users.setStatus(user.getStatus());
		users.setUtype(user.getUtype());
		return userRepository.save(users);
	}
	
	@GetMapping("/users/{uid}")
	public User  getUserById(@PathVariable (value="uid")Long uid)
	{
		return userRepository.findById(uid).orElse(null);
	}
	
}
