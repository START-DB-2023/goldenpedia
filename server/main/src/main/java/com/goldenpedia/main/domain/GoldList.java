package com.goldenpedia.main.domain;

import java.time.LocalTime;
import java.util.List;

import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.CascadeType;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "goldlists")
public class GoldList {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String name;
  @Column(nullable = false)
  private String description;
  @ManyToMany(fetch = FetchType.EAGER)
  @Cascade({ CascadeType.MERGE, CascadeType.PERSIST })
  @JoinTable(name = "goldlists_words", joinColumns = @JoinColumn(name = "goldenlist_id"), inverseJoinColumns = @JoinColumn(name = "word_id"))
  private List<Word> words;
  @Column(nullable = false)
  private LocalTime createdAt = LocalTime.now();

  protected GoldList() {
  }

  public GoldList(String name, String description, List<Word> words) {
    this.name = name;
    this.description = description;
    this.words = words;
  }

  public Long getId() {
    return id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public List<Word> getWords() {
    return words;
  }

  public void setWords(List<Word> words) {
    this.words = words;
  }

  public LocalTime getCreatedAt() {
    return createdAt;
  }

}
