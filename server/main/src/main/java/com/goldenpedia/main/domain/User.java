package com.goldenpedia.main.domain;

import java.time.LocalDateTime;
import java.util.Set;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;
import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(unique = true)
  private String username;
  private String name;
  private String password;

  @OneToMany(fetch = FetchType.EAGER)
  @Cascade({ CascadeType.MERGE, CascadeType.PERSIST })
  @JoinColumn(name="users")
  private Set<GoldList> goldLists;


  @CreationTimestamp
  private LocalDateTime createdAt;
  
}
