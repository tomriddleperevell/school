package com.example.schools.Core.Services;

import com.example.schools.Core.models.School;
import com.example.schools.Core.repositories.SchoolRepository;

import java.util.List;

public class SchoolServiceImpl implements SchoolService {
	private final SchoolRepository schoolRepository;

	public SchoolServiceImpl(SchoolRepository schoolRepository) {
		this.schoolRepository = schoolRepository;
	}

	@Override
	public School getById(Long id) {
		return schoolRepository.getById(id);
	}

	@Override
	public List<School> getAll() {
		return schoolRepository.findAll();
	}
}
