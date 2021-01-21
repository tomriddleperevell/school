package com.example.schools.Core.controllers;

import com.example.schools.Core.Services.SchoolService;
import com.example.schools.Core.models.School;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.xml.bind.ValidationException;
import java.util.List;

@RestController
@RequestMapping(value = "schools")
public class SchoolController {
	private SchoolService schoolService;

	public SchoolController(SchoolService schoolService) {
		this.schoolService = schoolService;
	}

	@GetMapping
	public List<School> searchSchools(String name) {
		return schoolService.searchSchools(name);
	}

	@GetMapping("{id}")
	public School getSchool(@PathVariable final long id) throws ValidationException {
		return schoolService.getById(id);
	}
}
