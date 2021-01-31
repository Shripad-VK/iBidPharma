package com.spring.iBidPharma.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.spring.iBidPharma.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

	@Query(value = "SELECT * FROM user WHERE email = :email and password = :password and status=1", nativeQuery = true)
	public User userLogin(@Param("email") String email,@Param("password") String password);
	
	@Query(value= "SELECT * FROM user WHERE status=0",nativeQuery=true)
	public List<User> getUser();
}
