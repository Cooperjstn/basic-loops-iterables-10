////------------------------------------------------------------------
// TASK 1 : Build a function that returns an array of strings with last names added:
//    If less than 6 characters, append Sampson: e.g. "Homer Sampson"
//    If 6 characters or longer, append Simpson: 'Jessica Simpson'
////------------------------------------------------------------------

var simpList = [
    "Homer",
    "OJ",
    "Marge",
    "Jessica",
    "Bart",
    "Maggie"
]

var simpList = function () {}
for (var i = 0; i < simpList.length; i++) {
  var simList = simpList[i]
  simList = simList.split("")
  for (var j = 0; j < simList.length; j++) {
    var numchar = simList[j];
    if (numchar < 6 ) {
      push ("Sampson");
      if (numchar => 6)
      push ("Simpson");
      return simpList;
    }
  }
}
}




var modifiedNamesList = simpOrSamp(simpList)

console.assert( modifiedNamesList[1] === "OJ Sampson" )
console.assert( modifiedNamesList[2] === "Marge Sampson" )
console.assert( modifiedNamesList[5] === "Maggie Simpson" )


////------------------------------------------------------------------
// TASK 2 : Write a function called shortiesOnly(). It should as input an array of strings, and
//    it should return a new array containing only those strings with four or fewer characters.
////------------------------------------------------------------------

var allNames = [
    "Ed",
    "Tom",
    "Elfrid",
    "Sam",
    "Bartholomeu",
    "Wayne",
    "Theodore",
    "Ingrid",
    "Fred",
    "Yvette"
]
for (var i = 0; i < allNames.length; i++) {
  var alNm = allNames[i]
  alNm = alNm.split("")
  for (var j = 0; j < alNm.length; j++) {
    var numchar = alNm[j];
    if (numchar === 4 ) {
    }
  }
}



var shortList = shortiesOnly(allNames)
console.assert( shortList.length === 4 )
// checks to see that FRED is INCUDED in the array.
console.assert( shortList.indexOf('Fred') != -1 )
// checks to see that WAYNE is NOT in the array.
console.assert( shortList.indexOf('Wayne') === -1 )
