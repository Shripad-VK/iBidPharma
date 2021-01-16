package com.spring.iBidPharma.controllers;

import java.io.*;
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
import org.springframework.web.multipart.MultipartFile;

import com.spring.iBidPharma.models.Product;
import com.spring.iBidPharma.repository.ProductRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class ProductController {
	
	@Autowired
	private ProductRepository productRepository;
	
	@GetMapping("/products")
	public List<Product> getAllProduct(){
		return productRepository.findAll();
	}

	@PostMapping("/products")
	public Product createProduct(@RequestBody Product product)
	{
		System.out.println(product);
		return productRepository.save(product);
	}
	
	@GetMapping("/products/{id}")
	public Product getProductById(@PathVariable(value="id")Long pid)
	{
		return productRepository.findById(pid).orElse(null);
	}
	
	@PutMapping("/products/{id}")
	public Product updateProduct(@PathVariable (value="id")Long pid,@RequestBody Product info)
	{
		Product product=productRepository.findById(pid).orElse(null);
		product.setPname(info.getPname());
		product.setStock(info.getStock());
		product.setMin_bvalue(info.getMin_bvalue());
		product.setMax_bvalue(info.getMax_bvalue());
		product.setCategory(info.getCategory());
		product.setPimage(info.getPimage());
		product.setAddr_id(info.getAddr_id());
		product.setMid(info.getMid());
		return productRepository.save(product);
	}
	
	@DeleteMapping("/products/{id}")
	public void deleteProduct(@PathVariable (value="id")Long pid)
	{
		Product product =productRepository.getOne(pid);
		productRepository.delete(product);
		
	}
	
	@PostMapping("/products/image")
	public void addProductImage(@RequestParam("imageFile") MultipartFile file) throws IOException {
		File convertFile =  new File("src/main/resources/static/images/"+file.getOriginalFilename());
		convertFile.createNewFile();
		FileOutputStream fo = new FileOutputStream(convertFile);
		fo.write(file.getBytes());
		fo.close();
	}
}
