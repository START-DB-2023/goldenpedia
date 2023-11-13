package com.goldenpedia.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.goldenpedia.main.domain.Word;
import com.goldenpedia.main.repository.WordRepository;

@RestController
@RequestMapping("/words")
public class WordController {
    @Autowired
    WordRepository wordRepository;

    @GetMapping("/{status}")
    private ResponseEntity<List<Word>> getWordsByStatus(String requestedStatus){
        return ResponseEntity.ok(wordRepository.findByStatus(requestedStatus));
    }

    @PutMapping("/updateStatus")
    private ResponseEntity<Word> updateStatus(@RequestParam(value = "wordId") Long wordId, @RequestParam(value = "status") String status){
        Word word = wordRepository.findById(wordId).orElse(null);
        if (word == null) {
            return ResponseEntity.notFound().build();
        }

        word.setStatus(status);
        wordRepository.save(word);
        
        return ResponseEntity.noContent().build();
    }
}
