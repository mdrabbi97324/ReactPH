import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return ( 
        <div className="md:w-1/3 bg-slate-200 p-6 rounded-lg md:sticky md:right-4">
            <div className='text-2xl text-blue-700 font-bold text-center bg-white p-4 rounded-lg'>
                <h3>Spent time on read : {readingTime} min</h3>
            </div>
            <h2 className="text-2xl text-center font-semibold mt-6">Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx )=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }    
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;