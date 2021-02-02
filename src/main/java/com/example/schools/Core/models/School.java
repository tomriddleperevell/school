package com.example.schools.Core.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "schools")
public class School {
	private Long Id;
	private String name;
	private Principal principal;
	private List<Teacher> teachers;
	private List<Student> students;
	private List<Schedule> schedule;
	private Boolean active;
	private City city;
	private Region region;
	private Integer number;
	private Long cityId;
	private Long regionId;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, unique = true)
	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	@Column(name = "name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@OneToOne
	@JoinColumn(name = "principal_Id", referencedColumnName = "id")
	@JsonManagedReference
	public Principal getPrincipal() {
		return principal;
	}

	public void setPrincipal(Principal principal) {
		this.principal = principal;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "school")
	@JsonManagedReference
	public List<Teacher> getTeachers() {
		return teachers;
	}

	public void setTeachers(List<Teacher> teachers) {
		this.teachers = teachers;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "school")
	@JsonManagedReference
	public List<Student> getStudents() {
		return students;
	}

	public void setStudents(List<Student> students) {
		this.students = students;
	}

	@OneToMany(fetch = FetchType.LAZY, mappedBy = "school")
	//@JsonManagedReference
	@JsonIgnore
	public List<Schedule> getSchedule() {
		return schedule;
	}

	public void setSchedule(List<Schedule> schedule) {
		this.schedule = schedule;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "city_id", insertable = false, updatable = false)
	public City getCity() {
		return city;
	}

	public void setCity(City city) {
		this.city = city;
	}

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "region_id", insertable = false, updatable = false)
	public Region getRegion() {
		return region;
	}

	public void setRegion(Region region) {
		this.region = region;
	}

	@Column(name = "number")
	public Integer getNumber() {
		return number;
	}

	public void setNumber(Integer number) {
		this.number = number;
	}

	@Column(name = "city_id")
	public Long getCityId() {
		return cityId;
	}

	public void setCityId(Long cityId) {
		this.cityId = cityId;
	}

	@Column(name = "region_id")
	public Long getRegionId() {
		return regionId;
	}

	public void setRegionId(Long regionId) {
		this.regionId = regionId;
	}

	@Column(name = "active")
	@ColumnDefault("true")
	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@PrePersist
	protected void prePersist() {
		this.active = true;
	}
}
