package com.game.api;

import java.util.Date;

import javax.crypto.SecretKey;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;


public class JwtUtil {
    private static final String SECRET = "thisisverylonglineofsentencedoesosmething";
    private static final long EXPIRY = 1000*60*60;

    private static final SecretKey KEY = Keys.hmacShaKeyFor(SECRET.getBytes());

    public static String generateToken(String username){
        return Jwts.builder()
            .subject(username)
            .issuedAt(new Date())
            .expiration(new Date(System.currentTimeMillis() + EXPIRY))
            .signWith(KEY)
            .compact();
    }


    
    
}
