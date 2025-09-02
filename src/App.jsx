import { useState } from 'react'
import './App.css'
import { Route,Routes} from 'react-router-dom'
import Menu from './Components/Menu'
import Contact from './Components/Contact'
import About from './Components/About'
import Home from './Components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
     </Routes>
    </>
  )
}

export default App
