let yessa = {
    name: "Yessa Helpa",
    race: "Gungan",
    favoritePhrase: "Yessa",
    skills: ["Jumping", "talking", "talking more", "'helping'"],
    planet: "Binksia",
    friends: ["Obi Han", "Princess Leiadalla", "Chewywok"]
}

//Get yessa's name and favoritePhrase
var {name,favoritePhrase} = yessa
name;
favoritePhrase;



//Instead of person, pick off the parameters: name, planet, skills
//on the first line of the function
function logPerson(person){
    var {name,planet,skills}=person
}

logPerson(yessa);

//pick off the parameters: name, friends, race
//instead of the parameter
function friendPerson({name,friends,race}){

}

logPerson(yessa)