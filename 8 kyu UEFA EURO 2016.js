const uefaEuro2016 = (teams, scores) =>
  scores[1] > scores[0]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    : scores[1] < scores[0]
    ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    : `At match ${teams[0]} - ${teams[1]}, teams played draw.`;
