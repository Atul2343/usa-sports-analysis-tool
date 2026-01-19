const sportsData = {
  NBA: {
    homeBonus: 6,
    teams: {
      "Lakers": { strength: 88, lastMatches: [1,0,1] },
      "Warriors": { strength: 86, lastMatches: [0,1,1] },
      "Celtics": { strength: 90, lastMatches: [1,1,1] },
      "Bulls": { strength: 80, lastMatches: [0,0,1] },
      "Heat": { strength: 84, lastMatches: [1,0,0] }
    }
  },
  NFL: {
    homeBonus: 7,
    teams: {
      "Chiefs": { strength: 92, lastMatches:[1,1,0] },
      "49ers": { strength: 90, lastMatches:[0,1,1] },
      "Eagles": { strength: 89, lastMatches:[1,0,1] },
      "Cowboys": { strength: 87, lastMatches:[0,0,1] },
      "Bills": { strength: 88, lastMatches:[1,1,1] }
    }
  },
  MLB: {
    homeBonus: 5,
    teams: {
      "Yankees": { strength:90, lastMatches:[1,0,1] },
      "Dodgers": { strength:92, lastMatches:[1,1,1] },
      "Red Sox": { strength:85, lastMatches:[0,1,0] },
      "Astros": { strength:88, lastMatches:[1,0,1] },
      "Mets": { strength:84, lastMatches:[0,0,1] }
    }
  },
  NHL: {
    homeBonus:5,
    teams: {
      "Bruins": { strength:91, lastMatches:[1,1,0] },
      "Avalanche": { strength:90, lastMatches:[1,0,1] },
      "Rangers": { strength:88, lastMatches:[0,1,0] },
      "Lightning": { strength:89, lastMatches:[1,1,1] },
      "Oilers": { strength:87, lastMatches:[0,0,1] }
    }
  }
};
