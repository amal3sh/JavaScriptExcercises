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

const addPost = (post,callback)=>{
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}
addPost({id:3,title:"post3"},getPosts);