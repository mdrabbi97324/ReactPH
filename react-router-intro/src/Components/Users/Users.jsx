import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css"

const Users = () => {
    // state ===> data
    // state ---> loader
    // useEffect
    // fetch ---> state --> setState

    const users = useLoaderData();
    return (
        <div>
            <h2>Our Total users : {users.length}</h2>
            <div className="users-container">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;