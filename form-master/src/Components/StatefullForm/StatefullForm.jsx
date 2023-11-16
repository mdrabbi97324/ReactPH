import { useState } from "react";

const StatefullForm = () => {
    const [name, setName] = useState('Hitesh');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError('Password should be gretter than 6 character');
        } else {
            setError('');
            console.log(name, email, password , error);
        }
        // console.log({name : name, email: email, password: password}); // my test perpose
        
    }

    const handleNameChange = e => {
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"/>
                <br />
                <input onChange={handleEmailChange} type="email" name="email" />
                <br />
                <input onChange={handlePasswordChange} type="password" name="password" required />
                <br />
                <input type="submit" value="submit" />
            </form>
            {
                error && <p>{error}</p>
            }
        </div>
    );
};

export default StatefullForm;