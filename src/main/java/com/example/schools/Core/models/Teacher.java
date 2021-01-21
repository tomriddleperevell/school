package com.example.schools.Core.models;

import javax.persistence.*;

@Entity
@Table(name = "teachers")
public class Teacher extends PersonImpl {
	private School school;
	private Class teachingClass;

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
	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}

	@OneToOne(mappedBy = "teacher")
	public Class getTeachingClass() {
		return teachingClass;
	}

	public void setTeachingClass(Class teachingClass) {
		this.teachingClass = teachingClass;
	}
}
