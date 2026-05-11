package com.game.api;


import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LeaderboardController {
    
    @GetMapping("/leaderboard")
    public List<Map<String, Object>> getLeaderboard() {
        return List.of(
            Map.of("player", "sahil", "score", 1500),
            Map.of("player", "archit", "score", 1200)
        );

    }
}