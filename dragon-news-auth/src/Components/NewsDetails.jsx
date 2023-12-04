import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import RightSideNav from "../shared/RightSideNavbar.jsx/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div className="col-span-3">
                    <h1>{id}</h1>
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default NewsDetails;