var css= document.querySelector("h3");
var input1=document.getElementById("input1");
var input2=document.getElementById("input2");
var body =document.querySelector("body")
console.log(css)
console.log(input1)
console.log(input2)
function Gradient(){
body.style.background="linear-gradient(to right, "+ input1.value +", "+input2.value+")";
css.textContent=body.style.background +";";

}
input1.addEventListener("input",Gradient)



input2.addEventListener("input",Gradient)

