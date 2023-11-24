package com.goldenpedia.main.controllers;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.goldenpedia.main.repository.WordRepository;
import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@WebMvcTest(controllers = WordController.class)
@ExtendWith(MockitoExtension.class)
public class WordControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WordRepository wordRepository;

    @Test
    @DisplayName("Should return status 200 (Ok) when a valid status is passed")
    public void WordController_GetWordsByStatus_ReturnOk() throws Exception{
        MockHttpServletResponse response = this.mockMvc
        .perform(MockMvcRequestBuilders.get("/words/{status}", "Revisar")
        .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();

        assertThat(response.getStatus()).isEqualTo(HttpStatus.OK.value());
    }

    @Test
    @DisplayName("Should return status 404 (Not Found) when invalid word id is passed")
    public void WordController_GetWordsByStatus_ReturnNotFound() throws Exception{
        MockHttpServletResponse response = this.mockMvc
        .perform(MockMvcRequestBuilders.get("/words")
        .param("wordId", "1")
        .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();

        assertThat(response.getStatus()).isEqualTo(HttpStatus.NOT_FOUND.value());
    }

    @Test
    @DisplayName("Should return status 400 (Bad Request) when no status or word id is passed")
    public void WordController_GetWordsByStatus_ReturnBadRequest() throws Exception{
        MockHttpServletResponse response = this.mockMvc
        .perform(MockMvcRequestBuilders.get("/words")
        .contentType(MediaType.APPLICATION_JSON)).andReturn().getResponse();

        assertThat(response.getStatus()).isEqualTo(HttpStatus.BAD_REQUEST.value());
    }
}