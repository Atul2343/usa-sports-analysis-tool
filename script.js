let matchHistory = JSON.parse(localStorage.getItem('matchHistory')) || [];

function toggleTheme() {
  document.body.classList.toggle('light');
}
document.getElementById("themeBtn").onclick = toggleTheme;

function analyzeMatch(){
  const sport=document.getElementById("sport").value;
  const teamA=document.getElementById("teamA").value;
  const teamB=document.getElementById("teamB").value;
  if(!sport||!teamA||!teamB||teamA===teamB){ alert("Select valid options"); return; }

  const data=sportsData[sport];
  const teamDataA=data.teams[teamA];
  const teamDataB=data.teams[teamB];

  const trendA = teamDataA.lastMatches.reduce((a,b)=>a+b,0);
  const trendB = teamDataB.lastMatches.reduce((a,b)=>a+b,0);

  const randomA=Math.floor(Math.random()*11)-5;
  const randomB=Math.floor(Math.random()*11)-5;

  const scoreA = teamDataA.strength + data.homeBonus + trendA + randomA;
  const scoreB = teamDataB.strength + trendB + randomB;

  const total = scoreA + scoreB;
  const probA=Math.round(scoreA/total*100);
  const probB=100-probA;

  // bars animation
  const barA=document.getElementById("barA");
  const barB=document.getElementById("barB");
  barA.style.width="0%"; barB.style.width="0%";
  setTimeout(()=>{ barA.style.width=probA+"%"; barB.style.width=probB+"%"; },50);
  document.getElementById("labelA").innerText=`${teamA}: ${probA}%`;
  document.getElementById("labelB").innerText=`${teamB}: ${probB}%`;

  // AI-style insights
  const insights=[];
  if(probA>70){ insights.push(`${teamA} is a strong favorite.`); }
  else if(probA>50){ insights.push(`${teamA} has a moderate chance.`);}
  else{ insights.push(`${teamA} is an underdog.`);}
  if(probB>70){ insights.push(`${teamB} is a strong favorite.`);}
  else if(probB>50){ insights.push(`${teamB} has a moderate chance.`);}
  else{ insights.push(`${teamB} is an underdog.`);}
  insights.push(`Home advantage adds +${data.homeBonus} points to the home team.`);
  insights.push("Random factors may influence outcome by ±5 points.");

  const ins=document.getElementById("insights");
  ins.innerHTML=""; insights.forEach(i=>{ let li=document.createElement("li"); li.innerText=i; ins.appendChild(li); });

  // Update history
  matchHistory.unshift(`${teamA} ${probA}% vs ${teamB} ${probB}%`);
  if(matchHistory.length>5) matchHistory.pop();
  localStorage.setItem('matchHistory',JSON.stringify(matchHistory));
  const hist=document.getElementById("history"); hist.innerHTML=""; matchHistory.forEach(h=>{ let li=document.createElement("li"); li.innerText=h; hist.appendChild(li); });

  document.getElementById("result").classList.remove("hidden");
}

function loadTeams(){
  const sport=document.getElementById("sport").value;
  const teamA=document.getElementById("teamA");
  const teamB=document.getElementById("teamB");
  teamA.innerHTML='<option value="">Team A</option>'; teamB.innerHTML='<option value="">Team B</option>';
  if(!sport) return;
  const teams=sportsData[sport].teams;
  for(let t in teams){ teamA.innerHTML+=`<option>${t}</option>`; teamB.innerHTML+=`<option>${t}</option>`; }
}
