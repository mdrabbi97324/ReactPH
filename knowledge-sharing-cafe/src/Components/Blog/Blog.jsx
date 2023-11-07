import PropTypes from 'prop-types';
import { BsBookmarkCheckFill } from 'react-icons/bs'
const Blog = ({blog, handleAddBookmark, handleAddReadingTime}) => {
    const {id, title,author,hashtags, author_img, posted_date, reading_time, cover_img} = blog;

    return (
        <div>
            <img className='w-full my-8 rounded-lg' src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-5'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h2 className='text-2xl font-bold'>{author}</h2>
                        <p className='text-gray-500'>{posted_date}</p>
                    </div>
                </div>
                <div><span className='text-gray-500'>{reading_time} min read</span><button onClick={() => handleAddBookmark(blog)} className='text-red-600 hover:text-gray-600 transition ease-in-out ml-2'><BsBookmarkCheckFill></BsBookmarkCheckFill></button></div>
            </div>
            <h2 className='text-4xl font-bold my-4'>{title}</h2>
            <p>
                {
                    hashtags.map((tag, idx) => <span key={idx} className="mr-2" ><a href="">#{tag}</a></span>)
                }
            </p>
            <button onClick={() => handleAddReadingTime(reading_time, id)} className="text-xl underline text-blue-500 mt-5">Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func,
    handleAddReadingTime: PropTypes.func
}

export default Blog;