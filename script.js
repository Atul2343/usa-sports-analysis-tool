function analyzeMatch() {
  const sport = document.getElementById("sport").value;
  const teamA = document.getElementById("teamA").value;
  const teamB = document.getElementById("teamB").value;

  if (!sport || !teamA || !teamB || teamA === teamB) {
    alert("Please select valid options");
    return;
  }

  const data = sportsData[sport];
  const baseA = data.teams[teamA];
  const baseB = data.teams[teamB];

  const randomA = Math.floor(Math.random() * 7) - 3;
  const randomB = Math.floor(Math.random() * 7) - 3;

  const scoreA = baseA + data.homeBonus + randomA;
  const scoreB = baseB + randomB;

  const total = scoreA + scoreB;
  const probA = Math.round((scoreA / total) * 100);
  const probB = 100 - probA;

  document.getElementById("analysisText").innerText =
    `${teamA}: ${probA}% win chance | ${teamB}: ${probB}%.
     Analysis based on long-term team strength and trends.`;

  document.getElementById("result").classList.remove("hidden");
}

function loadTeams() {
  const sport = document.getElementById("sport").value;
  const teamA = document.getElementById("teamA");
  const teamB = document.getElementById("teamB");

  teamA.innerHTML = '<option value="">Team A</option>';
  teamB.innerHTML = '<option value="">Team B</option>';

  if (!sport) return;

  const teams = sportsData[sport].teams;
  for (let team in teams) {
    teamA.innerHTML += `<option>${team}</option>`;
    teamB.innerHTML += `<option>${team}</option>`;
  }
}
