import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!!</h1>
            <h2><i>{error.statusText || error.message}</i></h2>
            {
                error.status === 404 && <div>
                    <h3>Page not found </h3>
                    <p>Go back where you are from</p>
                    <Link to="/"><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;