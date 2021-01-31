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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.spring.iBidPharma.models.Manufacturer;
import com.spring.iBidPharma.repository.ManufacturerRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class ManufacturerController {
	
	@Autowired
	private ManufacturerRepository manufacturerRepository;
	
	@GetMapping("/manufacturers")
	public List<Manufacturer> getAllManufacturer()
	{
		return manufacturerRepository.findAll();
		
	}
	
	@PostMapping("/manufacturers")
	public Manufacturer createManufacturer( @RequestBody Manufacturer manufacturer)
	{
		if(manufacturer.getAddr_id()==0)
		manufacturer.setAddr_id(1);
		manufacturer.setUid(1);
		return manufacturerRepository.save(manufacturer);
		
	}

	@GetMapping("/manufacturers/{mid}")
	public Manufacturer getManufacturerById(@PathVariable (value="mid")Long mid)
	{
		return manufacturerRepository.findById(mid).orElse(null);
	}
	
	@PutMapping("/manufacturers/{mid}")
	public Manufacturer updateManufacturer(@PathVariable (value="mid")Long mid,@RequestBody Manufacturer info )
	{
		Manufacturer manufacturer=getManufacturerById(mid);
		
		manufacturer.setAddr_id(info.getAddr_id());
		System.out.println(info.getAddr_id());
		if(info.getCname()==null)
			manufacturer.setCname(manufacturer.getCname());
		else
			manufacturer.setCname(info.getCname());
		if(info.getUid()==0)
			manufacturer.setUid(manufacturer.getUid());
		else
			manufacturer.setUid(info.getUid());
		return manufacturerRepository.save(manufacturer);
		
	}
	
	@DeleteMapping("/manufacturers/{mid}")
	public void deleteManufacturer(@PathVariable (value="mid")Long mid)
	{
		Manufacturer manufacturer=manufacturerRepository.getOne(mid);
		manufacturerRepository.delete(manufacturer);
	}
	@GetMapping("/manufacturersbyid/{uid}")
	public Long getProductsById(@PathVariable (value="uid")Long uid)
	{
	    //System.out.println(uid);	  	
		return manufacturerRepository.findByuid(uid);
	}
	
	@GetMapping("/manufacturersObjectByuid/{uid}")
	public Manufacturer getProductsByUID(@PathVariable (value="uid")Long uid)
	{
	    System.out.println(uid);	
		return manufacturerRepository.findManufacturerbyUID(uid);
	}
	
	
}
