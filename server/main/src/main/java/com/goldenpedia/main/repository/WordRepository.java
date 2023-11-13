package com.goldenpedia.main.repository;

import org.springframework.data.repository.CrudRepository;

import com.goldenpedia.main.domain.Word;

import java.util.List;


public interface WordRepository extends CrudRepository<Word, Long>{
    List<Word> findByStatus(String status);
}
