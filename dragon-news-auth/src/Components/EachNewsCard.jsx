
const EachNewsCard = ({eachNews}) => {
    const {author, title, image_url, details } = eachNews;
    return (
        <div className="mt-5 border">
            <div className="flex gap-4 p-2 bg-gray-300">
                    <img src={author.img} className="w-[40px] rounded-full" alt="" />
                <div>
                    <p>{author.name}</p>
                    <p>{author.published_date}</p>
                </div>
            </div>
            <h2 className="text-xl font-bold mt-2 mb-5 px-4">{title}</h2>
            <img className="px-4" src={image_url} alt="" />
            <h2 className="px-4 mt-4">{details}</h2>
        </div>
    );
};

export default EachNewsCard;