package com.sreecharan.ecommerce.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {
 @Bean PasswordEncoder passwordEncoder(){ return new BCryptPasswordEncoder(); }
 @Bean SecurityFilterChain securityFilterChain(HttpSecurity http)throws Exception{
  return http.csrf(c->c.disable()).cors(c->{}).authorizeHttpRequests(a->a
   .requestMatchers("/api/health","/api/auth/**","/api/products/**","/swagger-ui/**","/swagger-ui.html","/v3/api-docs/**").permitAll()
   .anyRequest().authenticated()).build();
 }
}
