var gameboard = [0,0,0,0,0,0,0,0,0];
var player1 = 1;
var player2 = -1;
var opencells = [];
var possibilities = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
var wins = [];
var loses = [];
var draws = [];
var tmpgameboard;

gameboard = [1,-1,0,-1,-1,1,-1,1,0];

compareOptions(player1);
console.log('wins: ' + wins);
console.log('loses: ' + loses);
console.log('draws: ' + draws);


// function keepGoing(oc,index){
//   if (oc.length === 1){return;}
//   else {
//     oc.slice(index,1);
//     for (var y in oc){
//       tmpgameboard[oc[y]] = 1;
//       if
//
//
//     }
//   }
//
// }


function compareOptions(player) {
  wins =[];
  loses = [];
  draws = [];
  opencells = openCells(); //what cells are not yet chosen
  tmpgameboard = gameboard.slice(0);
  // console.log("TMP: "+ tmpgameboard);
  if (opencells.length === 1){
    console.log("only one cell left");
    loses.push();
    if (canIWin(player)) {
      wins.push(openCells[0]); //add the only open cell to the wins
      return;
    } else if (canILose(player)){
      loses.push(opencells[0]) ;       //add the only open cell to the loses
      return;
    } else {
      draws.push(opencells[0]);
      return;}

  } else {
    for (var x in opencells){ //pick one of each of the remaining cells and see what happens
      cellsLeft = opencells.slice(0);
      option = opencells[x];
      tmpgameboard = gameboard.slice(0);
      tmpgameboard[option]=player;   //tmpgameboard is actual gameboard with cell x as test cell
      console.log("this is what is left: " + opencells);
      console.log("picking open cell: " + opencells[x]);
      console.log("gameboard after temp pick: " + tmpgameboard);
      if (didIWin(player)) {
        wins.push(option);
      }
      // if (cellsLeft.length > 2){
      //   keepGoing(cellsLeft,option);
      // }

    }
  }
}

function canILose(player){
  return canIWin(-1*player);
}

function canIWin(player){
  console.log("starting can I win");
    for (var j in possibilities){
      console.log("j: " + j);
      console.log("tmp: " + tmpgameboard);
      var lineSum = possibilities[j].reduce(function(accum,element){return accum + tmpgameboard[element];},0);
      console.log("line: " + lineSum + " for " + possibilities[j]);
      if (lineSum > player){
        return true;
      }
    }
    return false;
}


function didIWin(player){
  console.log("using player: " + player);
  console.log("starting did I win");
    for (var j in possibilities){
      console.log("j: " + j);
      console.log("tmp: " + tmpgameboard);
      var lineSum = possibilities[j].reduce(function(accum,element){return accum + tmpgameboard[element];},0);
      console.log("line: " + lineSum + " for " + possibilities[j]);
      if (lineSum === 3*player){
        console.log("i guess i won");
        return true;
      }
    }
    return false;
}

// var gameboard = [0,0,0,-1,0,1,0,1,0];

function openCells() {  //returns an array of open cells
  opencells = [];
  for (var i in gameboard){
    if (gameboard[i] === 0){
      opencells.push(i);
    }
  }
  return opencells;
}



q=0;
