import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, phone, email} = user;
    const style = {
        border : "2px solid tomato",
        borderRadius: "8px",
        padding: "10px",
        marginBottom: "15px"
    }
    return (
        <div style={style}>
            <h2>Name : {name}</h2>
            <h3>Phone : {phone.split(' ')[0]}</h3>
            <h3>Email : {email}</h3>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}>
                <button style={{backgroundColor: "lightblue"}}>Click Me</button>
            </Link>
        </div>
    );
};

User.propTypes = {
    user : PropTypes.object,
}

export default User;