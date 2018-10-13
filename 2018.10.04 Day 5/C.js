var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var result = players.filter(function(i){
  return i.club === 'FC Barcelona';
})

console.log(result);

var playerNames = []
players.forEach(function(i){
  playerNames.push(i.name);
})

console.log(playerNames);
