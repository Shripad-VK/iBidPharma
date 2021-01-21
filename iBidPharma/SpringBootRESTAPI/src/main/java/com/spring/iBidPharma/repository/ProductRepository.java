package com.spring.iBidPharma.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Product;
import com.spring.iBidPharma.models.User;


	@Repository
	public interface ProductRepository extends JpaRepository<Product, Long> {

		//Optional<Product> findAllById(Long mid);
		@Query(value = "SELECT * FROM product WHERE mid = :mid", nativeQuery = true)
		public List<Product> getProducts(@Param("mid") Long mid);

		
	}

