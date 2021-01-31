package com.spring.iBidPharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Transaction;

	@Repository
	public interface TransactionRepository extends JpaRepository<Transaction, Long> {

}
