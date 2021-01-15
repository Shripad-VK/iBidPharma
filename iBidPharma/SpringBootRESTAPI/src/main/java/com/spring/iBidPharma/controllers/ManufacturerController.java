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

import com.spring.iBidPharma.models.Manufacturer;
import com.spring.iBidPharma.repository.ManufacturerRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class ManufacturerController {
	
	@Autowired
	private ManufacturerRepository manufacturerRepositroy;
	
	@GetMapping("/manufacturers")
	public List<Manufacturer> getAllManufacturer()
	{
		return manufacturerRepositroy.findAll();
		
	}
	
	@PostMapping("/manufacturers")
	public Manufacturer createManufacturer( @RequestBody Manufacturer manufacturer)
	{
		manufacturer.setUid(1);
		return manufacturerRepositroy.save(manufacturer);
		
	}

	@GetMapping("/manufacturers/{mid}")
	public Manufacturer getManufacturerById(@PathVariable (value="mid")Long mid)
	{
		return manufacturerRepositroy.findById(mid).orElse(null);
	}
	
	@PutMapping("/manufacturers/{mid}")
	public Manufacturer updateManufacturer(@PathVariable (value="mid")Long mid,@RequestBody Manufacturer info )
	{
		Manufacturer manufacturer=getManufacturerById(mid);
		
		manufacturer.setAddr_id(info.getAddr_id());
		manufacturer.setCname(info.getCname());
		manufacturer.setUid(info.getUid());
		return manufacturerRepositroy.save(manufacturer);
		
	}
	
	@DeleteMapping("/manufacturers/{mid}")
	public void deleteManufacturer(@PathVariable (value="mid")Long mid)
	{
		Manufacturer manufacturer=manufacturerRepositroy.getOne(mid);
		manufacturerRepositroy.delete(manufacturer);
	}
}
