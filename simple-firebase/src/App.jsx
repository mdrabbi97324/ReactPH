
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <h1>Firebase Authentication</h1>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default App
