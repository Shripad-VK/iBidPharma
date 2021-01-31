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
		bid.setPid(info.getPid());
		bid.setD_id(info.getD_id());
		bid.setBvalue(info.getBvalue());
		bid.setBid_date(info.getBid_date());
		bid.setAddr_id(info.getAddr_id());
		bid.setStock(info.getStock());
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

}
