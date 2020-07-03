class game {
    teams: team[] = [];
    winner: team;
}

class team {
    name: string;
    players: player[] = [];
    
    total: number = 0;
    topScorer:string;
    topRuns:number;
    

    constructor(name: string) {
        this.name = name;
    }
}

class player {
    index: number;
    name: String;
    team: string;
    score: number[] = [];
    total: number;
    constructor(name: string, index: number, team: string) {
        this.name = name;
        this.index = index;
        this.team = team;
    }
}

let game1 = new game();
let team1 = new team("TEAM1");
game1.teams.push(team1);
let team2 = new team("TEAM2");
game1.teams.push(team2);

let balls = 0;
let players = 10;

let runs = [0, 1, 2, 4, 6];
let runChosen = 0;
let run = runs[runChosen];

let play = 1;
let hit1 = 1;
let hit2 = 0;
let gen = 0;


function makeTable(num) {
    var table: HTMLTableElement = <HTMLTableElement>document.getElementById(`team${num}`);

    for (let i = 0; i < 11; i++) {
        var row = table.insertRow();
        for (let j = 0; j < 8; j++) {
            if (i == 0) {
                if (j == 0) {
                    var cell = row.insertCell();
                    cell.innerHTML += `<th>Team ${num}</th>`;


                }
                else if (j == 7) {
                    var cell = row.insertCell();
                    cell.innerHTML = `<th>TOTAL</th>`;
                }
                else {
                    var cell = row.insertCell();
                    cell.innerHTML = `<th>Ball ${j}</th>`
                }
            }
            else { 
            
                var cell = row.insertCell();
                if(j == 0)
                {
                    cell.innerHTML += `<td >PLAYER ${i}</td>`;
                }
                else
                {
                    cell.innerHTML += `<td id = "p${i}b${j}"></td>`;
                }
            
        }

    }

}
}

makeTable(1);
makeTable(2);

function play1()
{   let teamTotal = 0;
    let maxScore = 0;
    for(let i = 1; i < 11; i++)
    {
        let player1 = new player(`Player ${i}`, i, "team1");
        for(let j = 1; j < 7; j++)
        {
            let ballRun = Math.floor(Math.random()*6);
            runChosen = runs[ballRun];
            console.log(runChosen);
            // var up: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById(`p${i}b${j}`);
            // console.log(up);
            // up.innerHTML = `<td>${runChosen}</td>`;
            player1.score.push(runChosen);
            if(runChosen == 0)
            {
                
                break;
            }
        }

        player1.total = 0;
                player1.score.forEach(element => {
                    if(element <= 6)
                    {player1.total += element;
                    }
                });
                teamTotal += player1.total;
                console.log(teamTotal);
                if(player1.total > maxScore)
                {
                    maxScore = player1.total;
                    team1.topScorer = `Player ${i}`;
                    team1.topRuns = player1.total;

                }
    }
    console.log(player)
    let teamScore = document.getElementById('t1Score');
    teamScore.innerText = " " + teamTotal;
    team1.total = teamTotal;
}


function play2()
{   let teamTotal = 0;
    let maxScore = 0;
    for(let i = 1; i < 11; i++)
    {   
        let player1 = new player(`Player ${i}`, i, "team2");
        for(let j = 1; j < 7; j++)
        {
            
            let ballRun = Math.floor(Math.random()*6);
            runChosen = runs[ballRun];
            console.log("Run =" +runChosen);
            // var up: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById(`p${i}b${j}`);
            // console.log(up);
            // up.innerHTML = `<td>${runChosen}</td>`;
            player1.score.push(runChosen);
            if(runChosen == 0)
            {
                
                break;
            }
        }
        player1.total = 0;
                player1.score.forEach(element => {
                    if(element <= 6)
                    {player1.total += element;
                    }
                });
                teamTotal += player1.total;
                if(player1.total > maxScore)
                {
                    maxScore = player1.total;
                    team2.topScorer = "Player" + i;
                    team2.topRuns = player1.total;

                }
                console.log(teamTotal);
    }
    
    let teamScore = document.getElementById('t2Score');
    teamScore.innerText = " " + teamTotal;
    team2.total = teamTotal;
}

function findResult()
{
    if(team2.total > team1.total)
    {
        let res = document.getElementById('scoreboard');
        res.innerHTML += `<h5>TEAM 2 WINS!</h5>`;
        res.innerHTML += `<h6>Man of the match is ${team2.topScorer} with ${team2.topRuns} runs`
    }
    else if(team1.total > team2.total)
    {
        let res = document.getElementById('scoreboard');
        res.innerHTML += `<h5>TEAM 1 WINS!</h5>`;
        res.innerHTML += `<h6>Man of the match is ${team2.topScorer} with ${team2.topRuns} runs`
    }
    else
    {
        let res = document.getElementById('scoreboard');
        res.innerHTML += `DRAW!`;
    }

    console.log()
}


