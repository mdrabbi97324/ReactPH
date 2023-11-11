import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {

    const {id, title} = post;
    const navigate = useNavigate()
    const postStyle = {
        border: "4px solid red",
        padding: "10px",
        backgroundColor: "lightgreen",
        marginBottom : "10px",
        borderRadius : "8px"
    }

    const handleClick = () => {
        navigate(`/post/${id}`)
    }
    return (
        <div style={postStyle}>
            <h4>Post Id : {id}</h4>
            <h4>Post Title : {title}</h4>
            <Link to={`/post/${id}`}>Show Details</Link>
            <div>
                <Link to={`/post/${id}`}><button>Click for Details</button></Link>
            </div>
            <div style={{marginTop: "10px"}}>
                <button onClick={handleClick}>Details</button>
            </div>
        </div>
    );
};

export default Post;