var product=document.querySelector(".products")
var search=document.getElementById("search")
var productlist=product.querySelectorAll("div")

search.addEventListener("keyup",function(event){
    var search=event.target.value.toUpperCase()
    console.log(search)
})
