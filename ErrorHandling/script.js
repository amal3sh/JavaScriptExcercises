try
{
const child=document.querySelector('.chil');
const parent = child.parentNode
changeColor(parent);
}
catch(e)
{
    console.log(e);
    alert("Error")
}
function changeColor(element)
{
  element.style.backgroundColor="yellow";
}