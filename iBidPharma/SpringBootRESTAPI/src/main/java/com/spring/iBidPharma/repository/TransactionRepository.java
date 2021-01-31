package com.spring.iBidPharma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Bid;
import com.spring.iBidPharma.models.Transaction;

	@Repository
	public interface TransactionRepository extends JpaRepository<Transaction, Long> {
		
		@Query(value = "SELECT * FROM transaction  WHERE dist_id = :dist_id", nativeQuery = true)
		public List<Transaction> getTransaction(@Param("dist_id") Long dist_id);
}
