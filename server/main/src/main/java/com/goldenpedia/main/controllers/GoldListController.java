package com.goldenpedia.main.controllers;

import com.goldenpedia.main.domain.*;
import com.goldenpedia.main.repository.GoldListRepository;

import io.swagger.v3.oas.annotations.Operation;

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

    @Operation(summary = "Create Gold List", description = "Creates a new Gold List")
    @PostMapping
    private ResponseEntity<GoldList> createGoldList(@RequestBody GoldList newGoldListRequest) {
        GoldList goldList = goldListRepository.save(newGoldListRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(goldList);
    }

    @Operation(summary = "Get Gold List By Id", description = "Returns a Gold List with a specific id")
    @GetMapping()
    private ResponseEntity<GoldList> getGoldList(@RequestParam(value = "goldListId") Long goldListId) {
        GoldList goldList = goldListRepository.findById(goldListId).orElse(null);
        if (goldList == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(goldList);
    }

    @Operation(summary = "Get Word By Gold List Id", description = "Returns a word within a Gold List with a specific id")
    @GetMapping("/words")
    private ResponseEntity<List<Word>> getWordsByListId(@RequestParam(value = "goldListId") Long goldListId,
            @RequestParam(value = "wordStatus") String wordStatus) {

        List<Word> words = goldListRepository.buscarPalavrasPorGListEStatus(goldListId, wordStatus);
        GoldList goldList = goldListRepository.findById(goldListId).orElse(null);
        if (goldList == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(words);
    }
}
