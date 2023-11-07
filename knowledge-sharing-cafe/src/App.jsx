import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleAddBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
}

  const handleAddReadingTime = (time, id) => {
    setReadingTime(readingTime + time);// add time spent reading
    // const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    // setBookmarks(remainingBookmarks);
    const remainingBookmarks = bookmarks.findIndex(bookmark => bookmark.id === id)
    if(remainingBookmarks !== -1){
      const updatedBookmarks = [...bookmarks];
      updatedBookmarks.splice(remainingBookmarks, 1);
      setBookmarks(updatedBookmarks);
    }

  }



  return (
    <>       
      <Header></Header>
      <main className='flex flex-col-reverse md:flex-row justify-between gap-4 max-w-7xl mx-auto p-4'>
        <Blogs handleAddReadingTime={handleAddReadingTime} handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks readingTime = {readingTime} bookmarks={bookmarks}></Bookmarks>
      </main>
      
    </>
  )
}

export default App
