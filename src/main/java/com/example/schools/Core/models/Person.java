package com.example.schools.Core.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "person")
@Data
public class Person {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false, unique = true)
	private Long id;

	@Column(name = "name")
	private String name;

	@Column(name = "last_name")
	private String lastName;

	@Column(name = "personal_no")
	private String PersonalNo;


}
