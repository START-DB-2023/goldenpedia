package com.goldenpedia.main.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="words")
public class Word {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  @Column(nullable = false)
  private String word;
  @Column(nullable = false)
  private String description;
  @Column(nullable = false)
  private String translation;
  @Column(nullable = false)
  private String status;


  public Word(String word, String description, String translation){
    this.word = word;
    this.description = description;
    this.translation = translation;
  }


  public String getWord() {
    return word;
  }


  public void setWord(String word) {
    this.word = word;
  }


  public String getDescription() {
    return description;
  }


  public void setDescription(String description) {
    this.description = description;
  }


  public String getTranslation() {
    return translation;
  }


  public void setTranslation(String translation) {
    this.translation = translation;
  }


  public String getStatus() {
    return status;
  }


  public void setStatus(String status) {
    this.status = status;
  }

}
