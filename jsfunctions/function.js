function print(){
    console.log("Welcome to js class")
}
function add(x,y){
    var res=x+y
    console.log(res)
}
function fun(f){
    //console.log(f)
    f()
}
//fun(print())
//fun(add(20,90))
fun(function(){
    console.log("hello")
})
async function fetchdata(){
    var response =await fetch("https://fakestoreapi.com/products/1")  //fake api link
    var data =await response.json()  //convert response into json format.
    console.log(data);
    }
    fetchdata()
    var wish=()=>{
        console.log("welcome")
        }
    wish(); 
           