package com.spring.iBidPharma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Product;


	@Repository
	public interface ProductRepository extends JpaRepository<Product, Long> {

		@Query(value = "SELECT * FROM product WHERE min_bvalue <= :bvalue AND max_bvalue >= :bvalue", nativeQuery = true)
		public List<Product> getProductByBidValue(@Param("bvalue") Long bvalue);
	}

