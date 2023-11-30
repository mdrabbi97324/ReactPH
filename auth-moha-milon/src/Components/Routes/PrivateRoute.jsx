import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {loader, user} = useContext(AuthContext)
    if(loader){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    
    if(user) {
        return children;
    }

    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;