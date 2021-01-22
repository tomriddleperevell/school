package com.example.schools.Core.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "principals")
public class Principal extends PersonImpl {
	//private Long id;
	private Integer yearsInOffice;
	private School school;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false, unique = true)
	public Long getId() {
		return id;
	};

	public void setId(Long id) {
		this.id = id;
	}

	@Column(name = "years_in_office")
	public Integer getYearsInOffice() {
		return yearsInOffice;
	}

	public void setYearsInOffice(Integer yearsInOffice) {
		this.yearsInOffice = yearsInOffice;
	}

	@OneToOne(mappedBy = "principal")
	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}
}
