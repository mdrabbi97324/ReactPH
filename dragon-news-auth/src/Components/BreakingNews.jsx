import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div>
            <div className="flex p-2 border bg-gray-200">
                <button className=" btn btn-secondary bg-[#D72050] hover:bg-[#D72050] rounded-none border-none">Latest</button>
                <Marquee pauseOnHover={true} speed={100}>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
                    <Link className="ml-4">Bomb blast in palestine</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;