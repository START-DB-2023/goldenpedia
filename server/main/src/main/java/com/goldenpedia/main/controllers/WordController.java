package com.goldenpedia.main.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.goldenpedia.main.domain.Word;
import com.goldenpedia.main.repository.WordRepository;

import io.swagger.v3.oas.annotations.Operation;

@RestController
@RequestMapping("/words")
@CrossOrigin(origins = {"http://localhost:5173"})
public class WordController {
    @Autowired
    WordRepository wordRepository;

    @Operation(summary = "Get Word By Id", description = "Returns a word with a specific id")
    @GetMapping()
    private ResponseEntity<Word> getGoldList(@RequestParam(value = "wordId") Long wordId) {
        Word word = wordRepository.findById(wordId).orElse(null);
        if (word == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(word);
    }

    @Operation(summary = "Get Words By Status", description = "Returns all the words with a specific status")
    @GetMapping("/{status}")
    private ResponseEntity<List<Word>> getWordsByStatus(String requestedStatus){
        return ResponseEntity.ok(wordRepository.buscarPalavraPorStatus(requestedStatus));
    }

    @Operation(summary = "Update Word Status", description = "Updates a word's status")
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
