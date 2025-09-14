const person={
    name:'Kolim Uddin',
    age:29,
    salary:20000,
    friends:['colim Uddin','dolim Uddin', 'kalam Uddin'],
    family:{
        mother:'Karina bagum',
        father:'Kaykubad',
        brother:'olim Uddin'
    }
}
console.log(person.family.brother)

const JsonData=JSON.stringify(person)
console.log(JsonData)
console.log(typeof(JsonData))

const OriginalData=JSON.parse(JsonData)
console.log(OriginalData)
console.log(typeof(OriginalData))

/** Object Keys and value find */

const Keys=Object.keys(person)
console.log(Keys)

const Values=Object.values(person);
console.log(Values)