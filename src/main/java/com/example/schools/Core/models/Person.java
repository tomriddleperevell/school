package com.example.schools.Core.models;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;

public interface Person {
	enum Gender {
		MALE, FEMALE, UNKNOWN
	}
	Long getId();

	void setId(Long id);

	String getFirstName();

	void setFirstName(String firstName);

	String getLastName();

	void setLastName(String lastName);

	Date getBirthDate();

	void setBirthDate(Date birthDate);

	String getPersonalNo();

	void setPersonalNo(String personalNo);

	Gender getGender();

	void setGender(Gender gender);

	Boolean getActive();

	void setActive(Boolean active);


	
}
