import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Projects from './Components/Projects/Projects'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
            <Route path='/' element={<Home/>}/>
              <Route path='/Projects' element={<Projects/>}/>
                <Route path='/About' element={<About/>}/>
                  <Route path='/Contact' element={<Contact/>}/>
         </Routes>
    </>
  )
}

export default App