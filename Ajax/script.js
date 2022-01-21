const loadBlogs = ()=>{

    var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) 
    {
        console.log(this.responseText);
        const data=JSON.parse(this.responseText);
        console.log(data);
        const markup=data.map(obj=>BlogItem(obj.title));
        document.querySelector('#blogList').insertAdjacentHTML("beforeend",markup);
    }
  };
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
}

let BlogItem=(title)=>{
    return `<div id="blogListItem">
    <h1 id="blogTitle">${title}</h1>
    </div>`;
}
document.querySelector('#loadBlogs').addEventListener('click',loadBlogs);