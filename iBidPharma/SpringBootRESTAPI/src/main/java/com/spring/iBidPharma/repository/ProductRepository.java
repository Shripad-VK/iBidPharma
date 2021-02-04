package com.spring.iBidPharma.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Manufacturer;
import com.spring.iBidPharma.models.Product;
import com.spring.iBidPharma.models.User;


	@Repository
	public interface ProductRepository extends JpaRepository<Product, Long> {

		@Query(value = "SELECT * FROM product WHERE min_bvalue <= :bvalue AND max_bvalue >= :bvalue", nativeQuery = true)
		public List<Product> getProductByBidValue(@Param("bvalue") Long bvalue);
		
		//Optional<Product> findAllById(Long mid);
		@Query(value = "SELECT * FROM product WHERE mid = :mid", nativeQuery = true)
		public List<Product> getProducts(@Param("mid") Long mid);
		
		@Query(value = "SELECT * FROM product WHERE mid = :mid AND min_bvalue <= :bvalue AND max_bvalue >= :bvalue", nativeQuery = true)
		public List<Product> getManufacturerProductsWithBidValue(@Param("mid") Long mid, @Param("bvalue") Long bvalue);
				
		@Query(value = "SELECT * FROM product WHERE stock > 0", nativeQuery = true)
		public List<Product> getAvailableProductList();
	}

