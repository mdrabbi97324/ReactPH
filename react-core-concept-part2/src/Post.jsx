export default function Post({post}) {
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