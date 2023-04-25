fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const leaderboardBody = document.getElementById('leaderboard-body');
    data.forEach(player => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${player.Placement}</td>
        <td>${player['Epic Name Player 1']}</td>
        <td>${player.Kills}</td>
        <td>${player.Wins}</td>
        <td>${player.Score}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
