export default function Friend({props}){
    const {id, username, email} = props;
    return (
        <div className="box">
            <h3>ID : {id}</h3>
            <p>Username : {username}</p>
            <p>Email : {email}</p>
            
        </div>
    )
}