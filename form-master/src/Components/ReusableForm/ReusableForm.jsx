import { useEffect, useRef } from "react";

const ReusableForm = ({formTitle, handleSubmit, handleBtnText = 'submit', children}) => {


    const nameRef = useRef(null)
    useEffect(() => {
        nameRef.current.focus()
    }, [])
    const handleLocalData = e => {
        e.preventDefault();
        const data = {
            name : e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }

        handleSubmit(data)
    }
    
    return (
        <div>
            {/* <h2>{formTitle}</h2> */}
            {children}
            <form onSubmit={handleLocalData}>
                <input ref={nameRef} type="text" name="name"/>
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={handleBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;