package com.goldenpedia.main.controllers;

import com.goldenpedia.main.domain.*;
import com.goldenpedia.main.repository.GoldListRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/goldlist")
public class GoldListController {
    @Autowired
    GoldListRepository goldListRepository;


    @PostMapping
    private ResponseEntity<GoldList> createGoldList(@RequestBody GoldList newGoldListRequest){
        GoldList goldList = goldListRepository.save(newGoldListRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(goldList);
    }
    
    @GetMapping()
    private ResponseEntity<GoldList> getGoldList( @RequestParam(value = "goldListId") Long goldListId){
        GoldList goldList = goldListRepository.findById(goldListId).orElse(null);
        if (goldList == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(goldList);
    }

    @GetMapping("/words")
    private ResponseEntity<List<Word>> getWordsByListId( @RequestParam(value = "goldListId") Long goldListId, @RequestParam(value = "wordStatus") String wordStatus){

        List<Word> words = goldListRepository.buscarPalavrasPorGListEStatus(goldListId, wordStatus);
        GoldList goldList = goldListRepository.findById(goldListId).orElse(null);
        if (goldList == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(words);
    } 
}
