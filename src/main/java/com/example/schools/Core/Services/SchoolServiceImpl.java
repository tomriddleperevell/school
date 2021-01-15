package com.example.schools.Core.Services;

import com.example.schools.Core.models.School;
import com.example.schools.Core.repositories.SchoolRepository;

import javax.xml.bind.ValidationException;
import java.util.List;
import java.util.Optional;

public class SchoolServiceImpl implements SchoolService {
	private final SchoolRepository schoolRepository;

	public SchoolServiceImpl(SchoolRepository schoolRepository) {
		this.schoolRepository = schoolRepository;
	}

	@Override
	public School getById(Long id) throws ValidationException {
		Optional<School> opt = schoolRepository.findById(id);
		if (!opt.isPresent()) {
			throw new ValidationException("no school ");
		}
		return  opt.get();
	}

	@Override
	public List<School> getAll() {
		return schoolRepository.findAll();
	}
}
