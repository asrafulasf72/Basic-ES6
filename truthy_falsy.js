const text=[]
if(text){
    console.log("This value is Truthy");
}else{
    console.log("This value Is Falsy");
}

// This Condition you can write with Ternary Oparator

text?console.log("This value is Truthy"): console.log("This value Is Falsy");

const num=50;
const result=num>= 20 && num<=30 ? 'Truth':'False';
console.log(result)

// Funtion Call Using Ternary Oparator

 const isActive= true;

 const showUser=()=>console.log('Show User Green');
 const hideUser=()=>console.log('Hide User')

 !isActive ? showUser() : hideUser();

 isActive && showUser() // this consition means if this is true then show the Output. otherwise you don't have to anything do if this is false
 !isActive || hideUser() // when is active is false then hideUser function  will work. if this is true then no need to show any output