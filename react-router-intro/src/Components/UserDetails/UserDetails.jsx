import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, username, website, company, address} = user;
    console.log(user)
    return (
        <div style={{fontWeight: "bold",
         border: "2px solid black", 
         padding: "10px",
         marginTop: "20px",
         }}>


            <h2>Name : {name}</h2>
            <p>User Name : {username}</p>
            <p>Website : {website}</p>
            <p>Company : {company.name}</p>
            <p>Address : {address.street}</p>
        </div>
    );
};

export default UserDetails;