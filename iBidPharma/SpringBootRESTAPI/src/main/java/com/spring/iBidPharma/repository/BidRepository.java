package com.spring.iBidPharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.iBidPharma.models.Bid;

public interface BidRepository extends JpaRepository<Bid, Long> {

}
