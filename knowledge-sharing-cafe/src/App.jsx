import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  return (
    <>       
      <Header></Header>
      <main className='md:flex justify-between gap-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
      
    </>
  )
}

export default App
