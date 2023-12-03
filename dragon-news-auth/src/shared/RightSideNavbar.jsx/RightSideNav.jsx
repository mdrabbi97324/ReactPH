import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"
import adBanner from "../../assets/bg1.png"
const RightSideNav = () => {
    return (
        <div>
            <div>
                <h1 className="text-xl font-bold">Login With</h1>
                <div className="p-2 space-y-2">
                    <button className="btn w-full border-sky-600 hover:text-sky-500 bg-white">
                        <FaGoogle></FaGoogle>
                        Login with Google</button>
                    <button className="btn w-full border-black hover:text-black bg-white">
                        <FaGithub></FaGithub>
                        Login with Github</button>
                </div>
            </div>
            <div className="mt-6 mb-5">
                <h2 className="text-xl font-semibold mb-4">Find Us On</h2>
                <div className="font-medium">
                    <a href="" className="flex gap-2 p-4 border border-gray-400 rounded-t-md items-center  "><FaFacebook className="text-2xl text-blue-700"></FaFacebook>
                    <span>Facebook</span></a>
                    <a href="" className="flex gap-2 p-4 border-x border-gray-400 items-center"><FaTwitter className="text-2xl text-sky-600"></FaTwitter>
                    <span>Twitter</span></a>
                    <a href="" className="flex gap-2 p-4 border border-gray-400 rounded-b-md items-center"><FaInstagram className="text-3xl text-red-400" ></FaInstagram>
                    <span>Instagram</span></a>
                    
                </div>
            </div>
            <div className="bg-[#F3F3F3] space-y-4 p-4">
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <div className="flex flex-col place-items-center">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
            <div className="mt-4">
                <img src={adBanner} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;