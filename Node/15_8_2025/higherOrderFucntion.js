// in js higher order function is a function 
// 1. That takes one or more functions as argument 
// 2. returns a function as its result


function calculation(st,add,mul){
    return  st+add(),mul();    // here the comma ignores st+add() it will only return mul() ->25
}

function add(){
    return 5+5;
}

function mul(){
    return 5*5
}

//console.log(calculation("the cal is:",add,mul))  //output :25



function calculation(st,add,mul){
    return  st+" "+add()+" "+mul();    // this is correct way to return 
}

function add(){
    return 5+5;
}

function mul(){
    return 5*5
}

console.log(calculation("the cal is:",add,mul))

//comment out the line 18 console.log() and see the result basically here function overriding is nappening
