// Build a class for an american ninja warrior
// Properties to track : Name, best time, farthest difficulty
// Add a method to update the best time
// Add a method to update the farthest difficulty
// Add a method to return the best time and farthest difficulty on an object

class Ninja {
    constructor(name,bestTime,farDiff){
    this.name=name
    this.bestTime=bestTime;
    this.farDiff=farDiff;
    }
    beatTime (time){
        if (time<this.bestTime){
            this.bestTime=time;
        }
    }
    beatDiff (diff){
        if(diff>this.farDiff){
            this.farDiff=diff;
        }
    }
    bestAndHardest (){
        return this.bestTime, this.farDiff;
    }
}

var dan = new Ninja("Dan",160,4);
dan;
dan.beatTime(144);
dan;
dan.beatDiff(9);
dan.bestAndHardest();
dan;
