import { useRef } from "react";

const RefForm = () => {
    const nameRef = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} defaultValue={'Hitesh'}  type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;