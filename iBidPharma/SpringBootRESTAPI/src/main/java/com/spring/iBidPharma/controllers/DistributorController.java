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
		distributor.setUid(1);
		return distributorRepository.save(distributor);
		
	}
	@GetMapping("/distributors/{mid}")
	public Distributor getDistributorById(@PathVariable (value="mid")Long mid)
	{
		return distributorRepository.findById(mid).orElse(null);
	}
	@PutMapping("/distributors/{mid}")
	public Distributor updateDistributor(@PathVariable (value="mid")Long mid,@RequestBody Distributor info )
	{
		Distributor distributor=getDistributorById(mid);
		distributor.setAddr_id(info.getAddr_id());
		distributor.setCname(info.getCname());
		distributor.setUid(info.getUid());
		return distributorRepository.save(distributor);
		
	}
	
	@DeleteMapping("/distributors/{mid}")
	public void deleteDistributor(@PathVariable (value="mid")Long mid)
	{
		Distributor distributor=distributorRepository.getOne(mid);
		distributorRepository.delete(distributor);
	}
}
