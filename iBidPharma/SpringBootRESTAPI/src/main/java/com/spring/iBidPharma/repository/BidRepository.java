package com.spring.iBidPharma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.spring.iBidPharma.models.Bid;


public interface BidRepository extends JpaRepository<Bid, Long> {

	@Query(value = "SELECT * FROM bid  WHERE d_id = :d_id", nativeQuery = true)
	public List<Bid> getBid(@Param("d_id") Long d_id);
}
