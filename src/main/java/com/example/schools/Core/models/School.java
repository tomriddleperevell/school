package com.example.schools.Core.models;

import javax.persistence.*;

@Entity
public class School {
	private Long Id;
	private String name;

	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
