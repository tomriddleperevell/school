package com.example.schools.Core.Services;

import com.example.schools.Core.models.School;

import javax.xml.bind.ValidationException;
import java.util.List;

public interface SchoolService {
	School getById(Long id) throws ValidationException;

	List<School> getAll();
}
