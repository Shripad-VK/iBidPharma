package com.spring.iBidPharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.Manufacturer;

@Repository
public interface ManufacturerRepositroy extends JpaRepository<Manufacturer, Long> {

}
