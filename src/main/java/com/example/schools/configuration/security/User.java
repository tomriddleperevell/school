package com.example.schools.configuration.security;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.SequenceGenerator;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "users")
@NoArgsConstructor
@SequenceGenerator(name = "usersSeq", sequenceName = "USERS_SEQ", allocationSize = 1)
public class User {
	private Long Id;
	private String userName;
	private String password;
	private List<Authority> authorities;
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

	@ManyToMany(fetch = FetchType.EAGER,cascade = {CascadeType.PERSIST,CascadeType.MERGE})
	@JoinTable(
			name = "user_authorities",
			joinColumns = { @JoinColumn(name = "user_id",referencedColumnName = "id") },
			inverseJoinColumns = { @JoinColumn(name = "authority_id",referencedColumnName = "id") }
	)

	@JsonManagedReference
	public List<Authority> getAuthorities() {
		return authorities;
	}

	public void setAuthorities(List<Authority> authorities) {
		this.authorities = authorities;
	}
}
