var answers = ["yes", "no", "yes", "no", "no", "no"]

//map over answers
//change yes into no and no into yes
var mapResult = answers.map(function(x){
    if (x==='yes'){
        return 'no';
    }
    else {
        return 'yes'
    }
    return mapResult;
    })
mapResult;

//DESIRED RESULT = ["no", "yes", "no", "yes", "yes", "yes"]


var employees = [
    { name: "a-aron", pay: 12 },
    { name: "b-bron", pay: 18 },
    { name: "c-ron", pay: 20 },
    { name: "le-bron", pay: 21 },
]

//map over employees and give each employee a bump in pay by 3.
//split on the - in name and turn name into first_name and last_name
//save it to a new array variable
var employees = employees.map(function(employees){
    return employees["pay"]+=3, employees;
})
employees;
var firstAndLast = employees.map(function(x){
    var tempSplit = x["name"].split('-');
    employees.forEach(function(val,ind,arr){
        delete arr[ind].name;
        employees;
        //NOT DONE YET
    })
    return tempSplit, 

})
firstAndLast;

// for (var x=0;x<firstAndLast.length;x++){

// for (var i in employees){
    // delete employees[i]['name'];
    // employees;
    // employees[i].first_name=
    // employees[i].last_name=
// }
// }

//DESIRED RESULT = 
/*
var employees = [
    { last_name: "aron", first_name: "a", pay: 15 },
    { last_name: "bron", first_name: "b", pay: 21 },
    { last_name: "ron", first_name: "c", pay: 23 },
    { last_name: "bron", first_name: "le", pay: 24 },
]
*/