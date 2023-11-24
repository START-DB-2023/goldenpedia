package com.goldenpedia.main.controllers;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.json.AutoConfigureJsonTesters;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.json.JacksonTester;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.util.LinkedMultiValueMap;

import com.goldenpedia.main.domain.GoldList;
import com.goldenpedia.main.domain.Word;

@SpringBootTest
@AutoConfigureMockMvc
@AutoConfigureJsonTesters
public class GoldListControllerTest {
    @Autowired
    MockMvc mockMvc;

    @Autowired
    private JacksonTester<GoldList> registerJson;

    @Test
    @DisplayName("Should return status 201 (Resource Created) when passing a ")
    void createGoldListTest() throws Exception{
        Word word = new Word("Happy", "Feliz");
        Word word1 = new Word("Fun", "Divertido");

        List<Word> words = new ArrayList<>();

        words.add(word);
        words.add(word1);

        GoldList goldList = new GoldList("Adjetivos", "Alguns adjetivos que quero aprender", words);

        MockHttpServletResponse response = mockMvc.perform(MockMvcRequestBuilders
                .post("/goldlist")
                .contentType(MediaType.APPLICATION_JSON)
                .content(registerJson.write(
                        goldList).getJson()))
                .andReturn().getResponse();

        assertEquals(HttpStatus.CREATED.value(), response.getStatus());
    }

    @Test
    @DisplayName("Should return status 200 (Ok)")
    void getAllGoldListsTest() throws Exception{
        LinkedMultiValueMap<String, String> requestParams = new LinkedMultiValueMap<>();
        requestParams.add("currentPage", "0");
        requestParams.add("pageSize", "5");

        MockHttpServletResponse response = mockMvc.perform(MockMvcRequestBuilders
                .get("/goldlist/all")
                .params(requestParams)
                .contentType(MediaType.APPLICATION_JSON))
                .andReturn().getResponse();

        assertEquals(HttpStatus.OK.value(), response.getStatus());
    }
}
