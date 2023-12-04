import { useLoaderData } from "react-router-dom";
import BreakingNews from "../Components/BreakingNews";
import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNavbar.jsx/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNavbar.jsx/RightSideNav";
import EachNewsCard from "../Components/EachNewsCard";

const Home = () => {

    const news = useLoaderData()
    return (
        <div className="space-y-2">
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid md:grid-cols-4 gap-6">
                <div className="border"><LeftSideNav></LeftSideNav></div>
                <div className="md:col-span-2">
                    <h1 className="text-xl font-semibold">Dragon News Home</h1>
                    {
                        news.map(eachNews => <EachNewsCard key={eachNews._id} eachNews={eachNews}></EachNewsCard>)
                    }
                </div>
                <div><RightSideNav></RightSideNav></div>
            </div>
        </div>
    );
};

export default Home;