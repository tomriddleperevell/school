package com.example.schools.configuration.security;


import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;
import javax.persistence.*;

@Entity
@Table(name = "users")
@NoArgsConstructor
@SequenceGenerator(name = "usersSeq", sequenceName = "USERS_SEQ", allocationSize = 1)
public class User {
	private Long Id;
	private String userName;
	private String password;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "usersSeq")
	public Long getId() {
		return Id;
	}

	public void setId(Long id) {
		Id = id;
	}

	@Column(name = "user_name")
	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	@Column(name = "password")
	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}
