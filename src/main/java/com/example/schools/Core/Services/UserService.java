package com.example.schools.Core.Services;

import com.example.schools.configuration.security.User;

import java.util.List;

public interface UserService {
	User findUserByUserName(String userName);

	List<User> getAll();
}
