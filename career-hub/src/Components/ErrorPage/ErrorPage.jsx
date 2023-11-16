import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col gap-10 justify-center items-center">
            <h1 className=" text-6xl ">Oops!!!</h1>
            <div className="text-center"><NavLink to="/"><button className="btn btn-primary text-center">Go Home</button></NavLink></div>
        </div>
    );
};

export default ErrorPage;