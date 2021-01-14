package com.example.demo.controllers;

import java.util.List;
//import java.util.Optional;

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

import com.example.demo.models.Employee;
import com.example.demo.repository.EmployeeRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api")
public class EmployeeController {

		@Autowired
		private EmployeeRepository employeeRepository;
		
		@GetMapping("/employees")
		public List<Employee> getAllEmployees(){
			return employeeRepository.findAll();
		}
		
		@PostMapping("/employees")
		public Employee createEmployee(@RequestBody Employee employee) {
			return employeeRepository.save(employee);
		}
		
		@PutMapping("/employees/{id}")
		public Employee updateEmployee(@PathVariable(value = "id") Long employeeId, @RequestBody Employee details) {

			Employee employee = employeeRepository.findById(employeeId).orElse(null);
			
			//Employee employee = employeeRepository.getOne(Long.parseLong(employeeId.toString()));
			
			employee.setFirstName(details.getFirstName());
			
			employee.setLastName(details.getLastName());
			
			employee.setEmailID(details.getEmailID());
			
			return employeeRepository.save(employee);
		}
		
		@DeleteMapping("/employees/{id}")
		public void deleteEmployee(@PathVariable (value = "id")Long employeeId) {
			
			Employee employee = employeeRepository.getOne(employeeId);
			System.out.println(employee);
			employeeRepository.delete(employee);
			
		}
		
		@GetMapping("/employees/{id}")
		public Employee getEmployeeById(@PathVariable (value = "id")Long employeeId) {
			return employeeRepository.findById(employeeId).orElse(null);
		}
		
		
		
		
		
		
		
		
		
		
		
}
