//const testVar = {}

function testFunc() {
  return "hi"
} //testFunc

// const record = function superbowlWin(arr){
//   const winningYear = arr.find(function(elt) {
//     return elt.result === "W"
//   })

//   if (winningYear) {
//     return winningYear.year;
//   }
//   else {
//     return undefined;
//   }
// } //superbowlWin

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}

