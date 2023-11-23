package com.goldenpedia.main.repository;


import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.goldenpedia.main.domain.User;

public interface UserRepository extends JpaRepository<User, UUID>{
  User findByUsername(String username);
}
