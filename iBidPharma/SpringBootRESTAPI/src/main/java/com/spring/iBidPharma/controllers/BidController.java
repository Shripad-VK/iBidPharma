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

import com.spring.iBidPharma.models.Bid;
import com.spring.iBidPharma.models.Product;
import com.spring.iBidPharma.repository.BidRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class BidController {
	
	@Autowired
	private BidRepository bidRepository;
	
	@GetMapping("/bid")
	public List<Bid> getAllProduct(){
		return bidRepository.findAll();
	}
	
	@PostMapping("/bid")
	public Bid createProduct(@RequestBody Bid bid)
	{
		System.out.println(bid);
		bid.setStatus(0);
		return bidRepository.save(bid);
	}
	
	@GetMapping("/bid/{id}")
	public Bid getBidById(@PathVariable(value="id")Long id)
	{
		System.out.println(id);
		return bidRepository.findById(id).orElse(null);
	}
	
	@PutMapping("/bid/{id}")
	public Bid updateProduct(@PathVariable (value="id")Long id,@RequestBody Bid info)
	{
		Bid bid=bidRepository.findById(id).orElse(null);
		if(bid.getPid()==0)
		bid.setPid(info.getPid());
		else
			bid.setPid(bid.getPid());
		
		if(bid.getD_id()==0)
		bid.setD_id(info.getD_id());
		else
			bid.setD_id(bid.getD_id());
		
		if(bid.getBvalue()==0)
		bid.setBvalue(info.getBvalue());
		else
			bid.setBvalue(bid.getBvalue());
		
		if(bid.getBid_date()==null)
		bid.setBid_date(info.getBid_date());
		else
			bid.setBid_date(bid.getBid_date());
		
		if(bid.getAddr_id()==0)
		bid.setAddr_id(info.getAddr_id());
		else
			bid.setAddr_id(bid.getAddr_id());
		
		if(bid.getStatus()==0)
			bid.setStatus(1);
		else
			bid.setStatus(bid.getStatus());
		
		if(bid.getStock()==0)
		bid.setStock(info.getStock());
		else
			bid.setStock(bid.getStock());
		
		return bidRepository.save(bid);
	}
	
	@DeleteMapping("/bid/{id}")
	public void deleteBid(@PathVariable (value="id")Long id)
	{
		Bid bid =bidRepository.getOne(id);
		bidRepository.delete(bid);
		
	}
	
	@GetMapping("/bid/report/{d_id}")
	public List<Bid> getProductByManufactureId(@PathVariable (value="d_id") Long d_id)
	{
	return  bidRepository.getBid(d_id);
	}
	@GetMapping("/manufacturersShowbids/{pid}")
	public List<Bid> showBidByManufacturerid(@PathVariable (value="pid") Long pid)
	{
		System.out.println("\n\n"+pid);
	return  bidRepository.showManufacturerBids(pid);
	
	}
	
	@GetMapping("/distributorBids/{d_id}")
	public List<Object> getBidsByDestributorrid(@PathVariable (value="d_id") Long d_id)
	{
		return  bidRepository.getBidDetails(d_id);	
	}
}
