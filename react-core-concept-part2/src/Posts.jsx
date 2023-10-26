import { useEffect, useState } from 'react'
import './Posts.css'


export default function Posts(){
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPost(data.slice(0, 2)))

    }, [])

    return (
        <div className="post">
            <h2>Post Information : {post.length}</h2>
            {
                post.map(post => <Post post = {post}></Post>)
            }
        </div>
    )
}


// This component also create a seperate file
  function Post({post}) {   
    const {userId, id, title, body} = post;
    console.log(post)
    return (
    <div className='post post__color'>
        <p><small>Id : {userId}</small></p>
        <p><small>Post Id : {id} </small></p>
        <h4>Title : {title}</h4>
        <h4>Descriptiton : {body}</h4>
    </div>
    )
}



