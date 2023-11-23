package com.goldenpedia.main.controllers;

import com.goldenpedia.main.domain.*;
import com.goldenpedia.main.repository.GoldListRepository;
import com.goldenpedia.main.repository.UserRepository;

import io.swagger.v3.oas.annotations.Operation;
import jakarta.servlet.http.HttpServletRequest;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/goldlist")
@CrossOrigin(origins = "http://localhost:5173")
public class GoldListController {
    @Autowired
    GoldListRepository goldListRepository;
    UserRepository userRepository;

    @Operation(summary = "Create Gold List", description = "Creates a new Gold List")
    @PostMapping
    private ResponseEntity<GoldList> createGoldList(@RequestBody GoldList newGoldListRequest, HttpServletRequest request) {
        var idUser = request.getAttribute("idUser");
        var user = userRepository.findById((Long) idUser).orElse(null);
        //newGoldListRequest.setUser_id(user.getId());
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

    @Operation(summary = "Get All Gold Lists By Page", description = "Returns all the Gold Lists in a given page")
    @GetMapping("/all")
    private ResponseEntity<Iterable<GoldList>> getAllGoldLists(
            @RequestParam(value = "currentPage") int currentPage,
            @RequestParam(value = "pageSize") int pageSize) {

        Pageable pageable = PageRequest.of(currentPage, pageSize);
        Iterable<GoldList> goldLists = goldListRepository.findAll(pageable);
        if (goldLists == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(goldLists);
    }

    @Operation(summary = "Get Words By Gold List Id", description = "Returns words within a Gold List with a specific id")
    @GetMapping("/words")
    private ResponseEntity<List<Word>> getWordsByListId(@RequestParam(value = "goldListId") Long goldListId,
            @RequestParam(value = "wordStatus", required = false) String wordStatus) {

        GoldList goldList = goldListRepository.findById(goldListId).orElse(null);
        if (goldList == null) {
            return ResponseEntity.notFound().build();
        }

        if (wordStatus == null) {
            List<Word> words = goldListRepository.buscarPalavrasPorGList(goldListId);
            return ResponseEntity.ok(words);
        } else {
            List<Word> words = goldListRepository.buscarPalavrasPorGListEStatus(goldListId, wordStatus);
            return ResponseEntity.ok(words);
        }
    }

    @Operation(summary = "Update Gold List", description = "Updates a Gold List")
    @PutMapping("/updateGoldList")
    private ResponseEntity<GoldList> updateStatus(@RequestBody GoldList goldListToUpdate) {
        GoldList goldList = goldListRepository.save(goldListToUpdate);

        return ResponseEntity.ok(goldList);
    }
    
    @Operation(summary = "Delete Gold List", description = "Deletes a Gold List with specific id")
    @DeleteMapping("/deleteGoldList")
    private ResponseEntity<GoldList> deleteGoldList(@RequestParam(value = "goldListId") Long goldListId) {
        goldListRepository.deleteById(goldListId);

        return ResponseEntity.ok().build();
    }
}
