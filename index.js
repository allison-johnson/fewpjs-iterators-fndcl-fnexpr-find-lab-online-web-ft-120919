const testVar = {}

function testFunc() {
  return "hi"
} //testFunc

function superbowlWin(arr){
  const winningYear = arr.find(function(elt) {
    return elt.result === "W"
  })

  if (winningYear) {
    return winningYear.year;
  }
  else {
    return undefined;
  }
} //superbowlWin

