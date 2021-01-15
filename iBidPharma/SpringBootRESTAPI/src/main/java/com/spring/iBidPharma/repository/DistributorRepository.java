package com.spring.iBidPharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Distributor;

@Repository
public interface DistributorRepository  extends JpaRepository<Distributor, Long>{

}
