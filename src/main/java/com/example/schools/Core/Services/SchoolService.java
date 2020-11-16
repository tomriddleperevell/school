package com.example.schools.Core.Services;

import com.example.schools.Core.models.School;

import java.util.List;

public interface SchoolService {
	School getById(Long id);

	List<School> getAll();
}
