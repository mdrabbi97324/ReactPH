import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleAddBookmark, handleAddReadingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs : {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleAddReadingTime={handleAddReadingTime} handleAddBookmark={handleAddBookmark} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleAddReadingTime: PropTypes.func
}

export default Blogs;