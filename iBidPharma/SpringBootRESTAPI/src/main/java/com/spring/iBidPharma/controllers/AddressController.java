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

import com.spring.iBidPharma.models.Address;
import com.spring.iBidPharma.models.Manufacturer;
import com.spring.iBidPharma.repository.AddressRepository;
import com.spring.iBidPharma.repository.ManufacturerRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class AddressController {
	
	@Autowired
	private AddressRepository addressRepositroy;
	
	@GetMapping("/addresses")
	public List<Address> getAllAddress()
	{
		return addressRepositroy.findAll();
		
	}
	
	@PostMapping("/addresses")
	public Address createAddress( @RequestBody Address address)
	{
		
		System.out.println(address.getPin_code());
		return addressRepositroy.save(address);
		
	}

	@GetMapping("/addresses/{addr_id}")
	public Address getAddressById(@PathVariable (value="addr_id")Long addr_id)
	{
		return addressRepositroy.findById(addr_id).orElse(null);
	}
	
	@PutMapping("/addresses/{addr_id}")
	public Address updateAddress(@PathVariable (value="addr_id")Long addr_id,@RequestBody Address info)
	{
		Address address=getAddressById(addr_id);
		
		address.setArea(info.getArea());
		address.setCity(info.getArea());
		address.setLine1(info.getLine1());
		address.setLine2(info.getLine2());
		
		address.setPin_code(info.getPin_code());
		address.setState(info.getState());
		
		return addressRepositroy.save(address);
		
	}
	
	@DeleteMapping("/addresses/{addr_id}")
	public void deleteAddress(@PathVariable (value="addr_id")Long addr_id)
	{
		Address address=addressRepositroy.getOne(addr_id);
		addressRepositroy.delete(address);
	}

}
