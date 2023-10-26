export default function Singer({props}){
    const {name , age, id} = props; // Destructuring an object
    return (
        <div style={{marginTop : '20px', background : 'gold', padding : '4px', borderRadius : '8px'}}>
            <h3>ID : {id}</h3>
            <p>Name : {name}</p>
            <p>Age : {age}</p>
        </div>
    )
}

