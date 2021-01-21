package com.example.schools.configuration.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class CustomAuthenticationSuccessHandler implements org.springframework.security.web.authentication.AuthenticationSuccessHandler {
	@Override
	public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
		ObjectMapper mapper = new ObjectMapper();

		ObjectNode childNode = mapper.createObjectNode();
		MyUserDetails user = (MyUserDetails) authentication.getPrincipal();
		childNode.put("username", user.getUsername());
//        childNode.put("authorities", ((LmsUserDetails)authentication.getPrincipal()).getAuthorities());
		ArrayNode authorities = childNode.putArray("authorities");
		for(GrantedAuthority simpleGrantedAuthority : user.getAuthorities()){
			authorities.add(simpleGrantedAuthority.getAuthority());
		}

		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		response.setCharacterEncoding("UTF-8");
		out.print(childNode.toString());
		out.flush();

	}
}
