package com.example.schools.Core.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "principal")
public class Principal extends PersonImpl {
	//private Long id;
	private Integer yearsInOffice;

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
}
