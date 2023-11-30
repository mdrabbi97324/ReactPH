import Header from "../Header/Header";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
            
        </div>
    );
};

export default Root;