import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="rounded bg-white my-4">
            <h2 className="text-xl font-semibold p-4">{title}</h2>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;