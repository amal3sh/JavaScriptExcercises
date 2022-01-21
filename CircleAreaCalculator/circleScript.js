function calculateArea()
{
const pi = 3.14159;
let radius =document.getElementById("radius").value;
let area = pi * radius * radius;
console.log(area, typeof area);
document.getElementById("area").value = String(area);
console.log(area, typeof area);
}
