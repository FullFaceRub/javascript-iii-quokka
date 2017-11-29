var athletes = [
    {
        name: "RunGuy",
        speed: 10,
        strength: 7,
        wits: 4
    }, {
        name: "YoungGuy",
        speed: 7,
        strength: 4,
        wits: 6
    }, {
        name: "DumGuy",
        speed: 8,
        strength: 10,
        wits: 1
    }, {
        name: "FunGuy",
        speed: 5,
        strength: 5,
        wits: 8
    },{
        name: "StunGun",
        speed: 8,
        strength: 8,
        wits: 8
    }
]

//Filter OUT all athletes with wits 5 or higher
var lowWits = athletes.filter(function(v,i,a){
    return athletes[i].wits<5;
})
lowWits;
//Filter IN all athletes with a strength higher than 6
var highStrength = athletes.filter(function(v,i,a){
    return athletes[i].strength>6;
})
highStrength;
//Filter OUT all althletes that don't have Guy in their name
var withGuy = athletes.filter(function(v,i,a){
    // var hasGuy = [];
    // athletes[i].name.indexOf("y",athletes[i].name.length-1)!==-1?hasGuy.push(athletes[i]):null;
    // hasGuy;
    // return hasGuy;
    return athletes[i].name.includes("Guy");
})
withGuy;
