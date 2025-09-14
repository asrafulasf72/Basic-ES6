const friens=['Halim','Kolim','dalim'];
console.log(friens)

const friend4=friens[0]
const friend5=friens[1]  //this also destructuring
const friend6=friens[2]
console.log(friend4,friend5,friend6)

const [friend1,friend2,friend3]=friens;  //this is easy way to Destructuring
console.log(friend1,friend2,friend3)


/**Destructuring for Object */

const person={
    name:'Kolim Uddin',
    age:56,
    profession:'Security Gard',
    country:'BD',
    friends:['dolim Uddin','Colim Uddin','Nolim Uddin']
}

console.log(person.country) // this is how we acces object property

const {name,age,profession,country,friends}=person;
console.log(friends[2])  // we access objetc with destructuring way