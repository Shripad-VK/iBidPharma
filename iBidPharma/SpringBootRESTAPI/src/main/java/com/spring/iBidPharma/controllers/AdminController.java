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
import org.springframework.web.bind.annotation.RestController;

import com.spring.iBidPharma.models.Admin;
import com.spring.iBidPharma.repository.AdminRepository;



@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")

public class AdminController {
	@Autowired
	private AdminRepository adminRepository;

	@GetMapping("/admin")
	public List<Admin> getAllProduct(){
		return adminRepository.findAll();
	}
	
	@PostMapping("/admin")
	public Admin createProduct(@RequestBody Admin admin)
	{
		System.out.println(admin);
		return adminRepository.save(admin);
	}
	
	@GetMapping("/admin/{aid}")
	public Admin getAdminById(@PathVariable(value="aid")Long aid)
	{
		System.out.println(aid);
		return adminRepository.findById(aid).orElse(null);
	}
	
	@PutMapping("/admin/{aid}")
	public Admin updateProduct(@PathVariable (value="aid")Long aid,@RequestBody Admin info)
	{
		Admin admin=adminRepository.findById(aid).orElse(null);
		admin.setFname(info.getFname());
		admin.setLname(info.getLname());
		admin.setContact_no(info.getContact_no());
		admin.setEmail(info.getEmail());
		admin.setPassword(info.getPassword());
		admin.setAddr_id(info.getAddr_id());
		return adminRepository.save(admin);
	}
	
	
}
