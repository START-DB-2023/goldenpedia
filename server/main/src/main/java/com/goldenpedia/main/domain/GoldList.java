package com.goldenpedia.main.domain;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name = "goldlists")
public class GoldList {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String name;
  @Column(nullable = false)
  private String description;
  
  @ManyToOne(fetch = FetchType.EAGER)
  private User user_id;

  @OneToMany(fetch = FetchType.EAGER)
  @Cascade({ CascadeType.MERGE, CascadeType.PERSIST })
  @JoinColumn(name="goldlist_id")
  private List<Word> words;
  

  @Column(nullable = false)
  private LocalDate createdAt = LocalDate.now();

  protected GoldList() {
  }

  public GoldList(String name, String description, List<Word> words) {
    this.name = name;
    this.description = description;
    this.words = words;
  }
}
