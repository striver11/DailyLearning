const people=[
    {name:'walter',age:54},
    {name:"Jesse",age:24},
     {name:"Mike",age:60},
      {name:"Skyler",age:39},
]

const arr=people
        .filter(person=>person.age>40)
        .map(person=>person.name)
console.log(arr)