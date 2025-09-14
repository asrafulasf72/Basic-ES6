const numbers=[1,2,3,4,5,6]
console.log(numbers)

const newNumbersAdd=[...numbers,7,8,9,10];
console.log(newNumbersAdd)

const product=[
    {
    name:'Samsung',
    price:30000,
    processor:'OctaCore',
    color:'Black'
},
{
    name:'Xaomi',
    price:20000,
    processor:'OctaCore',
    color:'Black'
},{
    name:'Nokia',
    price:40000,
    processor:'OctaCore',
    color:'Black'
}
]

// console.log(product)
// const newProduct=product.map(pro=>pro.price)
// console.log(newProduct)

const newBrand={
    name:'HTC',
    price:5000,
    processor:'HexaGone',
     color:'Blue'
}

const allProduct=[...product,newBrand];
console.log(allProduct)

const remaningProduct=product.filter(p=>p.name!=='Samsung')
console.log('This filtered OutPut: ',remaningProduct)

const newFilteredArry=[...remaningProduct,newBrand];
console.log(newFilteredArry);
