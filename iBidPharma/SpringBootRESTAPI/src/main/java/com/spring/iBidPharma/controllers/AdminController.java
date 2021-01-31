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
	public List<Admin> getAllAdmins(){
		return adminRepository.findAll();
	}
	
	@GetMapping("/admin/{aid}")
	public Admin getAdminById(@PathVariable(value="aid")Long aid)
	{
		System.out.println(aid);
		return adminRepository.findById(aid).orElse(null);
	}
	
	@PutMapping("/admin/{aid}")
	public Admin updateAdmin(@PathVariable (value="aid")Long aid,@RequestBody Admin info)
	{
		Admin admin=adminRepository.findById(aid).orElse(null);
		admin.setFname(info.getFname());
		admin.setLname(info.getLname());
		admin.setUid(info.getUid());
		return adminRepository.save(admin);
	}
	
	
}
