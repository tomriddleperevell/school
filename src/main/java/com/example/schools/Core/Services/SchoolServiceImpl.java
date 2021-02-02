package com.example.schools.Core.Services;

import antlr.StringUtils;
import com.example.schools.Core.models.School;
import com.example.schools.Core.repositories.SchoolRepository;
import org.springframework.stereotype.Service;

import javax.persistence.criteria.Join;
import javax.persistence.criteria.JoinType;
import javax.persistence.criteria.Predicate;
import javax.xml.bind.ValidationException;
import java.util.List;
import java.util.Optional;

@Service
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

	@Override
	public List<School> searchSchools(String name,Integer number, Long region, Long city) {
		return schoolRepository.findAll((root, query, cb) -> {
			Predicate predicate = cb.isTrue(root.get("active"));
			if (name != null && !name.isEmpty()) {
				predicate = cb.and(predicate, cb.equal(root.get("name"), name));
			}
			if (number != null) {
				predicate = cb.and(predicate, cb.equal(root.get("number"), number));
			}
			if (region != null) {
				predicate = cb.and(predicate, cb.equal(root.get("region"), region));
			}
			if (city != null) {
				predicate = cb.and(predicate, cb.equal(root.get("city"), city));
			}
			return predicate;
		});
	}
}
