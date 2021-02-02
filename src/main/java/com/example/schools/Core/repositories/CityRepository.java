package com.example.schools.Core.repositories;

import com.example.schools.Core.models.City;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends JpaRepository<City, Long>, JpaSpecificationExecutor<City> {
	//School getById(Long id);
}
