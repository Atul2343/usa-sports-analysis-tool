function analyzeMatch() {
  const sport = document.getElementById("sport").value;
  const teamA = document.getElementById("teamA").value;
  const teamB = document.getElementById("teamB").value;

  if(!sport||!teamA||!teamB||teamA===teamB){ alert("Please select valid options"); return; }

  const data = sportsData[sport];
  const baseA = data.teams[teamA];
  const baseB = data.teams[teamB];

  const randomA = Math.floor(Math.random()*7)-3;
  const randomB = Math.floor(Math.random()*7)-3;

  const scoreA = baseA + data.homeBonus + randomA;
  const scoreB = baseB + randomB;

  const total = scoreA + scoreB;
  const probA = Math.round((scoreA/total)*100);
  const probB = 100-probA;

  // Update bars
  const barA = document.getElementById("barA");
  const barB = document.getElementById("barB");
  barA.style.width = probA + "%"; barA.querySelector("span").innerText = `${teamA}: ${probA}%`;
  barB.style.width = probB + "%"; barB.querySelector("span").innerText = `${teamB}: ${probB}%`;

  // Insights AI-style
  const insights = [
    `${teamA} has a strong historical performance.`,
    `${teamB} is slightly under pressure in recent matches.`,
    `Home advantage adds +${data.homeBonus} points to the home team.`,
    `Small random factors may influence outcome by ±3%`
  ];
  const insightsList = document.getElementById("insights");
  insightsList.innerHTML = "";
  insights.forEach(i=>{ let li=document.createElement("li"); li.innerText=i; insightsList.appendChild(li); });

  document.getElementById("result").classList.remove("hidden");
}

function loadTeams(){
  const sport=document.getElementById("sport").value;
  const teamA=document.getElementById("teamA");
  const teamB=document.getElementById("teamB");
  teamA.innerHTML='<option value="">Team A</option>';
  teamB.innerHTML='<option value="">Team B</option>';
  if(!sport) return;
  const teams=sportsData[sport].teams;
  for(let t in teams){ teamA.innerHTML+=`<option>${t}</option>`; teamB.innerHTML+=`<option>${t}</option>`; }
}
