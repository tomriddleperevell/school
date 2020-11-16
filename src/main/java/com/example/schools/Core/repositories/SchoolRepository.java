package com.example.schools.Core.repositories;

import com.example.schools.Core.models.School;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SchoolRepository extends JpaRepository<School, Long> {
	School getById(Long id);
}
