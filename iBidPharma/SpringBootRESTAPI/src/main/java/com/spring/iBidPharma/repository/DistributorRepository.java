package com.spring.iBidPharma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Distributor;


@Repository
public interface DistributorRepository  extends JpaRepository<Distributor, Long>{

	@Query(value = "SELECT * FROM distributor WHERE uid = :uid", nativeQuery = true)
	public Distributor getDistributorByuid(@Param("uid") Long uid);
	
	@Query(value = "SELECT d_id FROM distributor WHERE uid = :uid", nativeQuery = true)
	public long findByuid(@Param("uid") long uid);

}
