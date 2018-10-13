function uefaEuro2016(teams, score) {
    let stat = '';
    if (score[0] > score[1]) {
        stat = 'At match ' + teams[0] + ' - ' + teams[1] + ', ' + teams[0] + ' won!';
    } else if (score[1] > score[0]) {
        stat = 'At match ' + teams[0] + ' - ' + teams[1] + ', ' + teams[1] + ' won!';
    } else {
        stat = 'At match ' + teams[0] + ' - ' + teams[1] + ', teams played draw.';
    }
    return stat;
}

// the function should result in
console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0])) // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'],[0, 2])) // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1])) // "At match Portugal - Iceland, teams played draw."

