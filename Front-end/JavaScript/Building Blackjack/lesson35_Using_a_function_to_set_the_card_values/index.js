let player1Time = 102
let player2Time = 107


// cmd+d - ctrl+d - selecionar mais de um parametro ou nome de uma vez 
function getFatstestRaceTime() {
    if (player1Time < player2Time) {
        return(player1Time)
    } else if (player2Time < player1Time) {
        return(player2Time)
    } else {
        return(player1Time)
    }          
}

// let fastestRace = getFatstestRaceTime()
// console.log(fastestRace)

function getTotalRaceTime() {
    return player1Time + player2Time
}

let totalTime = getTotalRaceTime()

console.log(totalTime)