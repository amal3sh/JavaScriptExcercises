const inpKey = document.getElementById("inpKey");
const inpValue = document.getElementById("inpVal");
const buttonInsert = document.getElementById("btnInsert");
const buttonClear = document.getElementById("btnClear");
const ls = document.getElementById("lsOutput");
buttonInsert.onclick = ()=>{
    const key = inpKey.value;
    const value = inpValue.value;
    //console.log(key);
    //console.log(value);
    if(key && value)
    {
        localStorage.setItem(key,value);
       // location.reload();
    }
    for(let i = 0; i< localStorage.length;i++)
    {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        lsOutput.innerHTML +=`${key}: ${value}<br>`;
    }
};
buttonClear.onclick = ()=>{
    for(let i = 0; i< localStorage.length;i++)
    {
        const key = localStorage.key(i);
        localStorage.removeItem(key);
    }
    lsOutput.innerHTML="";
}