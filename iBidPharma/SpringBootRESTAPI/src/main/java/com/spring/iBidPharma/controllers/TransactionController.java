package com.spring.iBidPharma.controllers;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.spring.iBidPharma.models.Transaction;
import com.spring.iBidPharma.repository.TransactionRepository;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/api")
public class TransactionController {

	@Autowired
	private TransactionRepository transactionRepository;

	@GetMapping("/transaction")
	public List<Transaction> getAllTransactions(){
		return transactionRepository.findAll();
	}
	
	@PostMapping("/transaction")
	public Transaction createTransaction(@RequestBody Transaction transaction)
	{
		System.out.println(transaction);
		return transactionRepository.save(transaction);
	}
	
	@GetMapping("/transaction/{tid}")
	public Transaction getTransactionById(@PathVariable(value="tid")Long tid)
	{
		System.out.println(tid);
		return transactionRepository.findById(tid).orElse(null);
	}
	
}
