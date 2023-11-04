import PropTypes from 'prop-types';
const Blog = ({blog}) => {
    const {title,author,hashtags, author_img, posted_date, reading_time, cover_img} = blog;
    return (
        <div>
            <img src={cover_img} alt="" />
            <div className='flex justify-between'>
                <div className='flex items-center gap-5'>
                    <img className='w-16' src={author_img} alt="" />
                    <div>
                        <h2>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div><span>{reading_time} min read</span></div>
            </div>
            <h2 className='text-4xl font-bold'>{title}</h2>
            <p>
                {
                    hashtags.map((tag, idx) => <span key={idx} className="mr-2" ><a href="">#{tag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;