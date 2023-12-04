import { Link } from "react-router-dom";
const EachNewsCard = ({eachNews}) => {
    const {author, title, image_url, details, _id } = eachNews;
    return (
        <div className="mt-5 border">
            <div className="flex gap-4 p-2 bg-gray-300">
                    <img src={author.img} className="w-[40px] rounded-full" alt="" />
                <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <div className="px-4">
                <h2 className="text-xl font-bold mt-2 mb-5">{title}</h2>
                <img src={image_url} alt="" />
                {
                    details.length > 150 ?
                    <div>
                        <p>{details.slice(0, 150)}...</p>
                        <Link to={`/news/${_id}`} className="font-semibold text-orange-500">Read More...</Link>
                    </div>:
                    <p>{details}</p>
                }
            </div>  
        </div>
    );
};

export default EachNewsCard;