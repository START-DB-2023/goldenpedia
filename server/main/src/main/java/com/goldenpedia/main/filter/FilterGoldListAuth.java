package com.goldenpedia.main.filter;
import java.util.Base64;
import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.goldenpedia.main.repository.UserRepository;

import at.favre.lib.crypto.bcrypt.BCrypt;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;



@Component
public class FilterGoldListAuth extends OncePerRequestFilter {

  @Autowired
  private UserRepository userRepository;

  @Override

  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
      throws ServletException, IOException {

    var serveletPath = request.getServletPath();
    
    if (serveletPath.equals("/goldlist/")) {
      var authorization = request.getHeader("Authorization");
      var authEncoded = authorization.substring("Basic".length()).trim();
      byte[] authDecoded = Base64.getDecoder().decode(authEncoded);
      var authString = new String(authDecoded);

      String[] credentials = authString.split(":");

      var username = credentials[0];
      var password = credentials[1];

      var user = this.userRepository.findByUsername(username);
      if (user == null) {
        response.sendError(401);
        ;
      } else {
        var passwordVerified = BCrypt.verifyer().verify(password.toCharArray(), user.getPassword().toCharArray());
        if (passwordVerified.verified) {
          request.setAttribute("idUser", user.getId());
          filterChain.doFilter(request, response);
        } else {
          response.sendError(401);
        }
      }
    }else{
      filterChain.doFilter(request, response);
    }

  }
}