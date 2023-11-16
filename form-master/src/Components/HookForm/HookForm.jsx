import useInputValue from "../../hooks/stateInputValue";

const HookForm = () => {
    // const [name, handleNameChange] = useInputValue('Rojoni hooked');
    // const [email, handleEmailChange] = useInputValue('');
    const nameState = useInputValue('Golam ')

    const handleSubmit = e => {
        console.log(nameState.value);
        e.preventDefault();
            }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input {...nameState}  type="text" name="name"/>
                <br />
                <label>Email : </label>
                <input type="email" name="email" />
                <br />
                <label htmlFor="">Password : </label>
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;