 
import { Outlet } from 'react-router-dom'
import './App.css'
import Nav from './common/Navbar/Nav'

function App() {
 
  return (
    <div className=' max-w-7xl border mx-auto'>
      <Nav/>
      <Outlet/>
    </div>
  )
}

export default App
