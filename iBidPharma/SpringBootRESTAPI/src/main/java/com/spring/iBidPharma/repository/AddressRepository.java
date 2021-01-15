package com.spring.iBidPharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Address;

@Repository
public interface AddressRepository extends JpaRepository<Address, Long> {

}
