package com.spring.iBidPharma.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.iBidPharma.models.Distributor;
import com.spring.iBidPharma.repository.DistributorRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class DistributorController {
	
	@Autowired
	private DistributorRepository distributorRepository;
	
	@GetMapping("/distributors")
	public List<Distributor> getAllDistributor()
	{
		return distributorRepository.findAll();
		
	}
	@PostMapping("/distributors")
	public Distributor createDistributor( @RequestBody Distributor distributor)
	{
		if(distributor.getAddr_id()==0)
			distributor.setAddr_id(1);
		distributor.setUid(1);
		return distributorRepository.save(distributor);
		
	}
	@GetMapping("/distributors/{mid}")
	public Distributor getDistributorById(@PathVariable (value="d_id")Long d_id)
	{
		return distributorRepository.findById(d_id).orElse(null);
	}
	@PutMapping("/distributors/{d_id}")
	public Distributor updateDistributor(@PathVariable (value="d_id")Long d_id,@RequestBody Distributor info )
	{
		Distributor distributor=getDistributorById(d_id);
		
		distributor.setAddr_id(info.getAddr_id());
		System.out.println(info.getAddr_id());
		if(info.getCname()==null)
			distributor.setCname(distributor.getCname());
		else
			distributor.setCname(info.getCname());
		if(info.getUid()==0)
			distributor.setUid(distributor.getUid());
		else
			distributor.setUid(info.getUid());
		return distributorRepository.save(distributor);
		
	}
	
	@DeleteMapping("/distributors/{mid}")
	public void deleteDistributor(@PathVariable (value="mid")Long mid)
	{
		Distributor distributor=distributorRepository.getOne(mid);
		distributorRepository.delete(distributor);
	}
	
	@GetMapping("/distributorsByUID/{uid}")
	public Distributor getDistributorByUId(@PathVariable (value="uid")Long uid)
	{
		return distributorRepository.getDistributorByuid(uid);
	}
}
