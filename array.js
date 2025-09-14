const friends=['halim', 'kolim','cholim', 'dolim','Naim','dalim','polas']
friends.push('saminur') // push end of the array
friends.pop() // pop end of the array
friends.unshift('saminur') //push front of the array 
friends.shift()//pop front of the array 
console.log(friends)
console.log(friends.indexOf('dalim'))
const slicedFriend=friends.slice(2,4); //give the result before 4 number index
const splicedFriend=friends.splice(3,5); // give the result 1 to 3 number index

console.log('This is for Slice Output: ',slicedFriend);
console.log('This is for spliced Output: ',splicedFriend);

const text='Bangladesh is Beautyful';
   const word=text.split(" ")
   const w=word.join(" ")
   console.log(w)