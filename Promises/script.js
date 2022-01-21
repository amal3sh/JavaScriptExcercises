const posts = [
    {id:1,title:"post1"},
    {id:2,title:"post 2"}
]
const getPosts = () => {
    setTimeout(()=>{
        let out = ''
        posts.forEach(post=>{
            out+=`<li>${post.id} -${post.title}</li>`
        });
        document.body.innerHTML = out
    },1000)
}

const addPost = (post)=>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{
        posts.push(post);
        let err = false;
        if(err)
        {
            reject();
        }
        else{
            resolve();
        }
        
    },2000) 
    })
    
}
addPost({id:3,title:"post3"})
.then(getPosts)
.catch(()=>{
    console.log("error");
})