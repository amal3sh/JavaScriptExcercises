const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");
 

grandparent.addEventListener("click", e => {
    console.log("Grandaparent");
})
parent.addEventListener("click",e =>{
    console.log("Parent");
})
child.addEventListener("click", e =>{
    console.log("Child")
})
document.addEventListener("click", e => {
    console.log("Document")
})