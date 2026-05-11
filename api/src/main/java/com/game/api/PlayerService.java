package com.game.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class PlayerService {


    private List<String> players = new ArrayList<>(List.of("SHAIL", "ARCHIT"));

    public void addPlayer(String name){
        players.add(name);
    }
    
    public List<String> getPlayers(){
        return(players);
    }
}
