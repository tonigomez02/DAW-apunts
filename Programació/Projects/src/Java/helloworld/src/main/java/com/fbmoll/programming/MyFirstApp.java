package com.fbmoll.programming;

import com.fbmoll.programming.data.competition.Player;
import com.fbmoll.programming.data.competition.Team;

import java.util.ArrayList;
import java.util.List;

public class MyFirstApp {
    private static Team createTeam(String name, String icon, List<Player> players){
        Team team = new Team();
        team.setName(name);
        team.setIcon(icon);
        team.setPlayerList(players);
        return team;
    }
    public static void main(String[] args) {
        Team madrid = createTeam("Madrid Fc", "myIcon.png", new ArrayList<>());

        Team teamAlternative = new Team();
        teamAlternative.setName("Mallorca");
        teamAlternative.setIcon("icon.png");
        teamAlternative.setPlayerList(new ArrayList<>());
    }
}
