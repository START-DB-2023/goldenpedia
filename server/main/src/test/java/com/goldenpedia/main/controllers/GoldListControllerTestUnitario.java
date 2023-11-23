package com.goldenpedia.main.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.goldenpedia.main.domain.GoldList;

public class GoldListControllerTestUnitario {
    private GoldListController goldListController = new GoldListController();

    @Test
    public void testCreateGoldList() {
        GoldList newGoldListRequest = new GoldList();
        ResponseEntity<GoldList> responseEntity = goldListController.createGoldList(newGoldListRequest);
        assertEquals(HttpStatus.CREATED, responseEntity.getStatusCode());
        assertEquals(newGoldListRequest, responseEntity.getBody());
    }

    @Test
    public void testGetGoldList() {
        Long goldListId = 1L;
        ResponseEntity<GoldList> responseEntity = goldListController.getGoldList(goldListId);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
    }
}
