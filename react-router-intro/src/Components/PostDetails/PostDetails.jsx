import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const postDetail= useLoaderData()
    const {id, userId, title, body} = postDetail;
    const param = useParams()
    console.log(param.postId)
    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div style={{border: "4px solid blue", padding: "15px",
         width: "500px",
         backgroundColor: "lightgreen"
         }}>
            <h4>ID : {id}</h4>
            <h4>User Id: {userId}</h4>
            <h4>Title : {title}</h4>
            <h4>Body : {body}</h4>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;