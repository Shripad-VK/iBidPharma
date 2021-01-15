package com.spring.iBidPharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.iBidPharma.models.Admin;

public interface AdminRepository extends JpaRepository<Admin, Long> {

}
