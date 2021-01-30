package com.example.schools.Core.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;

@Entity
@Table(name = "students")
public class Student extends PersonImpl {
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

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "school_id")
	//@JsonIgnore
	@JsonBackReference
	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}
}
