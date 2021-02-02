package com.example.schools.Core.repositories;

import com.example.schools.Core.models.Region;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;

@Repository
public interface RegionRepository extends JpaRepository<Region, Long>, JpaSpecificationExecutor<Region> {
	//School getById(Long id);
}
