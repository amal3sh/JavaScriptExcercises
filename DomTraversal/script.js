const child=document.querySelector('.child');
const parent = child.parentNode

changeColor(parent);
function changeColor(element)
{
  element.style.backgroundColor="yellow";
}