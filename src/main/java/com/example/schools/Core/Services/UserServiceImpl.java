package com.example.schools.Core.Services;

import com.example.schools.Core.repositories.UserRepository;
import com.example.schools.configuration.security.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

	private final UserRepository userRepository;

	public UserServiceImpl(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	@Override
	public User findUserByUserName(String userName) {
		return userRepository.findByUserName(userName);
	}

	@Override
	public List<User> getAll() {
		return userRepository.findAll();
	}
}
