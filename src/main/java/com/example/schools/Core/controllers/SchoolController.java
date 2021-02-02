package com.example.schools.Core.controllers;

import com.example.schools.Core.Services.SchoolService;
import com.example.schools.Core.models.City;
import com.example.schools.Core.models.Region;
import com.example.schools.Core.models.School;
import com.example.schools.Core.repositories.CityRepository;
import com.example.schools.Core.repositories.RegionRepository;
import org.springframework.web.bind.annotation.*;

import javax.xml.bind.ValidationException;
import java.util.List;

@RestController
@RequestMapping(value = "schools")
public class SchoolController {
	private SchoolService schoolService;
	private RegionRepository regionRepository;
	private CityRepository cityRepository;

	public SchoolController(SchoolService schoolService, RegionRepository regionRepository, CityRepository cityRepository) {
		this.schoolService = schoolService;
		this.regionRepository = regionRepository;
		this.cityRepository = cityRepository;
	}

	@GetMapping
	public List<School> searchSchools(@RequestParam String name,@RequestParam(required = false) Integer number,@RequestParam(required = false) Long region,@RequestParam(required = false) Long city) {
		return schoolService.searchSchools(name, number, region, city);
	}

	@GetMapping("{id}")
	public School getSchool(@PathVariable final long id) throws ValidationException {
		return schoolService.getById(id);
	}

	@GetMapping("/regions")
	public List<Region> getRegions() {
		return regionRepository.findAll();
	}

	@GetMapping("/cities")
	public List<City> getCities() {
		return cityRepository.findAll();
	}
}
