package com.example.schools.Core.models;

import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
public class PersonImpl implements Person {
	protected Long id;
	protected String firstName;
	protected String lastName;
	protected Date birthDate;
	protected String personalNo;
	protected Gender gender;
	protected Boolean active;

	@Override
	@Transient
	public Long getId() {
		return id;
	}

	@Override
	public void setId(Long id) {

	}

	@Override
	@Column(name = "first_name")
	public String getFirstName() {
		return firstName;
	}

	@Override
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	@Override
	@Column(name = "last_name")
	public String getLastName() {
		return lastName;
	}

	@Override
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	@Override
	@Column(name = "birth_date")
	public Date getBirthDate() {
		return birthDate;
	}

	@Override
	public void setBirthDate(Date birthDate) {
		this.birthDate = birthDate;
	}

	@Override
	@Column(name = "personal_no")
	public String getPersonalNo() {
		return personalNo;
	}

	@Override
	public void setPersonalNo(String personalNo) {
		this.personalNo = personalNo;
	}

	@Override
	@Column(name = "gender")
	@Enumerated(EnumType.ORDINAL)
	public Gender getGender() { return gender; }

	@Override
	public void setGender(Gender gender) { this.gender = gender; }

	@Override
	@Column(name = "active")
	@ColumnDefault("true")
	public Boolean getActive() {
		return active;
	}

	@Override
	public void setActive(Boolean active) {
		this.active = active;
	}

	@PrePersist
	protected void prePersist() {
		this.active = true;
	}

}
