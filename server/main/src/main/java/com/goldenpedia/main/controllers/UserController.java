package com.goldenpedia.main.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goldenpedia.main.domain.User;
import com.goldenpedia.main.repository.UserRepository;

import at.favre.lib.crypto.bcrypt.BCrypt;
import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/users")
public class UserController {
  
  @Autowired
  private UserRepository userRepository;

  @PostMapping("/")
  public ResponseEntity create(@RequestBody User User, HttpServletRequest request){
    var user = this.userRepository.findByUsername(User.getUsername());

    if(user != null) {
      return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Usuario ja cadastrado!");
    }
    var passwordHash = BCrypt.withDefaults()
    .hashToString(12, User.getPassword().toCharArray());

    User.setPassword(passwordHash);
    
    var userCreated = this.userRepository.save(User);
    return ResponseEntity.status(HttpStatus.CREATED).body(userCreated);
  }
}
