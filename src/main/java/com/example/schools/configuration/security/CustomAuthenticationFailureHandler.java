package com.example.schools.configuration.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.security.core.AuthenticationException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class CustomAuthenticationFailureHandler implements org.springframework.security.web.authentication.AuthenticationFailureHandler {
	@Override
	public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
		ObjectMapper mapper = new ObjectMapper();

		ObjectNode childNode = mapper.createObjectNode();
		childNode.put("username", "invalid username");
		childNode.put("password", "invalid password");

		response.setContentType("application/json");
		response.setStatus(401);
		response.getWriter().print(childNode.toString());
		response.getWriter().flush();
	}
}
