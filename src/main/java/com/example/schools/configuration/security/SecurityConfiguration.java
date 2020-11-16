package com.example.schools.configuration.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Autowired
	private MyUserDetailsService myUserDetailsService;

	@Bean
	public PasswordEncoder passwordEncoder() {
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		return encoder;
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		super.configure(auth);
	}
}
