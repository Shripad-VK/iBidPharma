package com.spring.iBidPharma.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query(value = "SELECT * FROM user WHERE email = :email and password = :password", nativeQuery = true)
	public User userLogin(@Param("email") String email,@Param("password") String password);
	
	
}
