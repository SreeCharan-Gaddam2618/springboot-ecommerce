package com.sreecharan.ecommerce.controller;
import com.sreecharan.ecommerce.entity.*; import com.sreecharan.ecommerce.repository.UserRepository; import java.util.Map; import org.springframework.http.*; import org.springframework.security.crypto.password.PasswordEncoder; import org.springframework.web.bind.annotation.*;
@RestController @RequestMapping("/api/auth")
public class AuthController {
 private final UserRepository users; private final PasswordEncoder encoder;
 public AuthController(UserRepository users,PasswordEncoder encoder){this.users=users;this.encoder=encoder;}
 @PostMapping("/register") public ResponseEntity<?> register(@RequestBody Map<String,String> body){String email=body.get("email"), password=body.get("password"); if(email==null||password==null||password.length()<6)return ResponseEntity.badRequest().body(Map.of("error","Valid email and password of at least 6 characters are required")); if(users.existsByEmail(email))return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error","Email already registered")); User u=new User(email,encoder.encode(password),Role.CUSTOMER); users.save(u); return ResponseEntity.status(HttpStatus.CREATED).body(Map.of("id",u.getId(),"email",u.getEmail(),"role",u.getRole())); }
}
