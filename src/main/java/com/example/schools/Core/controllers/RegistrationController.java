package com.example.schools.Core.controllers;

import lombok.AllArgsConstructor;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

@RestController
@AllArgsConstructor
@RequestMapping("/register")
public class RegistrationController {

	@GetMapping
	public String register() {
		return "bla";
	}
	/*@RequestMapping("/welcome")
	public ModelAndView firstPage() {
		return new ModelAndView("welcome");
	}*/

//	@RequestMapping(value = "/login", method = RequestMethod.GET)
//	public String login(Model model, String error, String logout) {
//		if (error != null)
//			model.addAttribute("errorMsg", "Your username and password are invalid.");
//
//		if (logout != null)
//			model.addAttribute("msg", "You have been logged out successfully.");
//
//		return "login";
//	}
}
