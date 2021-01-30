package com.spring.iBidPharma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Manufacturer;
import com.spring.iBidPharma.models.Product;

@Repository
public interface ManufacturerRepository extends JpaRepository<Manufacturer, Long> {

	
	@Query(value = "SELECT mid FROM manufacturer WHERE uid = :uid", nativeQuery = true)
	public long findByuid(@Param("uid") long uid);
	
	@Query(value = "SELECT * FROM manufacturer WHERE uid = :uid", nativeQuery = true)
	public Manufacturer findManufacturerbyUID(@Param("uid") long uid);
}
