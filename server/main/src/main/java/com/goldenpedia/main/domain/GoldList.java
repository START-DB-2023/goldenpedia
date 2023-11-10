package com.goldenpedia.main.domain;

import java.time.LocalTime;
import java.util.List;

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
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;
  private String name;
  private String description;
  @ManyToMany(fetch = FetchType.EAGER)
  @JoinTable(name = "goldlists_words", joinColumns = @JoinColumn(name = "goldenlist_id"), inverseJoinColumns = @JoinColumn(name = "word_id"))
  private List<Word> words;
  private LocalTime createdAt;

  public GoldList(Long id, String name, String description, List<Word> words, LocalTime createdAt) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.words = words;
    this.createdAt = createdAt;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
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

  public void setCreatedAt(LocalTime createdAt) {
    this.createdAt = createdAt;
  }

}
