package com.goldenpedia.main.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.goldenpedia.main.domain.Word;

import java.util.List;


public interface WordRepository extends CrudRepository<Word, Long>{
    @Query("from Word t where t.status = :status")
    List<Word> buscarPalavraPorStatus(String status);
}
