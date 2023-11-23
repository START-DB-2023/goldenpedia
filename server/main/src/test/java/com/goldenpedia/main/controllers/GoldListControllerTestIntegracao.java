package com.goldenpedia.main.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;

import com.goldenpedia.main.domain.GoldList;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class GoldListControllerTestIntegracao {
  @Autowired
  private TestRestTemplate restTemplate;

  @Test
  public void createGoldList() {
    GoldList goldlist = new GoldList();

    GoldList[] goldlists = restTemplate.postForObject("/goldlist", goldlist,
        GoldList[].class);

    assertNotNull(goldlists);
    assertEquals(1, goldlists.length);
    assertEquals(goldlist, goldlists[0]);
    assertThrows(RuntimeException.class,
        () -> restTemplate.postForObject("/goldlist",
            goldlist, GoldList[].class));
  }

}