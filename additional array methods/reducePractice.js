var roundScores = [36, 39, 44, 49, 45, 48, 52]

//Use reduce to get a sum
var sum = roundScores.reduce(function(prev,item,index){
    prev;
    item;
    return prev + item;
})
sum;

//Use the sum to get an average
var average = sum/roundScores.length;
average;

//Handicap is 4
//Use a map to reduce all scores by 4
var handicap = roundScores.map(function(item){
    return item-=4;
})
handicap;
//Use a reduce to get a sum
var sumHandicap = handicap.reduce(function(prev,item){
    return prev + item;
})
sumHandicap;
//Use the sum to get an average
var sumHandicapAvg = sumHandicap/handicap.length;
sumHandicapAvg;

var lyricWords = ["Hello, ", "from ", "the ", "other ", "side ", "/r/n"]
var conc = lyricWords.reduce(function(prev,item){
    return prev+item;
})
conc;
//Use reduce to go through the lyricWords and concatenate them together