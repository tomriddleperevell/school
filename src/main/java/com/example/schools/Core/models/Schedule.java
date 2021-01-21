package com.example.schools.Core.models;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "schedule")
public class Schedule {
	private School school;
	private List<Class> classes;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false, unique = true)
	private Long Id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "school_id")
	public School getSchool() {
		return school;
	}

	public void setSchool(School school) {
		this.school = school;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "schedule")
	public List<Class> getClasses() {
		return classes;
	}

	public void setClasses(List<Class> classes) {
		this.classes = classes;
	}
}
