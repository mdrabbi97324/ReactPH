import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Home = () => {

    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;