package com.goldenpedia.main.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="words")
public class Word {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @Column(nullable = false)
  private String word;
  @Column(nullable = false)
  private String translation;
  @Column(nullable = false)
  private String status = "Revisar";

  @ManyToOne(fetch = FetchType.EAGER)
  private GoldList goldlist;

  //private Long goldlist_id;

  protected Word(){}

  public Word(String word, String translation){
    this.word = word;
    this.translation = translation;
  }
}