package com.example.schools.Core.Controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@AllArgsConstructor
@RequestMapping("/registration")
public class RegistrationController {

	@PostMapping
	public String register() {
		return "bla";
	}
}
