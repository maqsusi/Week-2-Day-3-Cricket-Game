var game = /** @class */ (function () {
    function game() {
        this.teams = [];
    }
    return game;
}());
var team = /** @class */ (function () {
    function team(name) {
        this.players = [];
        this.total = 0;
        this.name = name;
    }
    return team;
}());
var player = /** @class */ (function () {
    function player(name, index, team) {
        this.score = [];
        this.name = name;
        this.index = index;
        this.team = team;
    }
    return player;
}());
var game1 = new game();
var team1 = new team("TEAM1");
game1.teams.push(team1);
var team2 = new team("TEAM2");
game1.teams.push(team2);
var balls = 0;
var players = 10;
var runs = [0, 1, 2, 4, 6];
var runChosen = 0;
var run = runs[runChosen];
var play = 1;
var hit1 = 1;
var hit2 = 0;
var gen = 0;
function makeTable(num) {
    var table = document.getElementById("team" + num);
    for (var i = 0; i < 11; i++) {
        var row = table.insertRow();
        for (var j = 0; j < 8; j++) {
            if (i == 0) {
                if (j == 0) {
                    var cell = row.insertCell();
                    cell.innerHTML += "<th>Team " + num + "</th>";
                }
                else if (j == 7) {
                    var cell = row.insertCell();
                    cell.innerHTML = "<th>TOTAL</th>";
                }
                else {
                    var cell = row.insertCell();
                    cell.innerHTML = "<th>Ball " + j + "</th>";
                }
            }
            else {
                var cell = row.insertCell();
                if (j == 0) {
                    cell.innerHTML += "<td >PLAYER " + i + "</td>";
                }
                else {
                    cell.innerHTML += "<td id = \"p" + i + "b" + j + "\"></td>";
                }
            }
        }
    }
}
makeTable(1);
makeTable(2);
function play1() {
    var teamTotal = 0;
    var maxScore = 0;
    var _loop_1 = function (i) {
        var player1 = new player("Player " + i, i, "team1");
        for (var j = 1; j < 7; j++) {
            var ballRun = Math.floor(Math.random() * 6);
            runChosen = runs[ballRun];
            console.log(runChosen);
            // var up: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById(`p${i}b${j}`);
            // console.log(up);
            // up.innerHTML = `<td>${runChosen}</td>`;
            player1.score.push(runChosen);
            if (runChosen == 0) {
                break;
            }
        }
        player1.total = 0;
        player1.score.forEach(function (element) {
            if (element <= 6) {
                player1.total += element;
            }
        });
        teamTotal += player1.total;
        console.log(teamTotal);
        if (player1.total > maxScore) {
            maxScore = player1.total;
            team1.topScorer = "Player " + i;
            team1.topRuns = player1.total;
        }
    };
    for (var i = 1; i < 11; i++) {
        _loop_1(i);
    }
    console.log(player);
    var teamScore = document.getElementById('t1Score');
    teamScore.innerText = " " + teamTotal;
    team1.total = teamTotal;
}
function play2() {
    var teamTotal = 0;
    var maxScore = 0;
    var _loop_2 = function (i) {
        var player1 = new player("Player " + i, i, "team2");
        for (var j = 1; j < 7; j++) {
            var ballRun = Math.floor(Math.random() * 6);
            runChosen = runs[ballRun];
            console.log("Run =" + runChosen);
            // var up: HTMLTableCellElement = <HTMLTableCellElement>document.getElementById(`p${i}b${j}`);
            // console.log(up);
            // up.innerHTML = `<td>${runChosen}</td>`;
            player1.score.push(runChosen);
            if (runChosen == 0) {
                break;
            }
        }
        player1.total = 0;
        player1.score.forEach(function (element) {
            if (element <= 6) {
                player1.total += element;
            }
        });
        teamTotal += player1.total;
        if (player1.total > maxScore) {
            maxScore = player1.total;
            team2.topScorer = "Player" + i;
            team2.topRuns = player1.total;
        }
        console.log(teamTotal);
    };
    for (var i = 1; i < 11; i++) {
        _loop_2(i);
    }
    var teamScore = document.getElementById('t2Score');
    teamScore.innerText = " " + teamTotal;
    team2.total = teamTotal;
}
function findResult() {
    if (team2.total > team1.total) {
        var res = document.getElementById('scoreboard');
        res.innerHTML += "<h5>TEAM 2 WINS!</h5>";
        res.innerHTML += "<h6>Man of the match is " + team2.topScorer + " with " + team2.topRuns + " runs";
    }
    else if (team1.total > team2.total) {
        var res = document.getElementById('scoreboard');
        res.innerHTML += "<h5>TEAM 1 WINS!</h5>";
        res.innerHTML += "<h6>Man of the match is " + team2.topScorer + " with " + team2.topRuns + " runs";
    }
    else {
        var res = document.getElementById('scoreboard');
        res.innerHTML += "DRAW!";
    }
    console.log();
}
