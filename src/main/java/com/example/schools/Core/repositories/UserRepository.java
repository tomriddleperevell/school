package com.example.schools.Core.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.schools.configuration.security.User;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	User findByUserName(String userName);
}
