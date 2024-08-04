var product={
    pname:"iPhone",
    price:120000,
    stock:true,
    rating:4.5,
    category:"electronics"
}
console.log(product)   
console.log(product['rating'])
product.brand="apple"
product['color']="red"
console.log(product)   
product.pname="iPhone 13"
console.log(product) 
delete product.rating
console.log(product) 
var user={
    name:"virat",
    id:18,
    isplaced:true,
    address:{
        city:"bangalore",
        state:"karnataka",
        area:{
            main:"1st main road",
            street:"Mg road",
        }
    }
}
console.log(user)


var person={
    name:"virat",
    age:35,
    gender:"male",
    play:function(){
        console.log(this.name+" is playing!!")
    }
}
console.log(person)
person.play()
console.log(Object.keys(user))
console.log(Object.values(user))