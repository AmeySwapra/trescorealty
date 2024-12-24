import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'

function App() {
  return (
    <>
      <BrowserRouter>
         <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/contact' element={<ContactPage/>} />
           <Route path='/about-us/blogs' element={<BlogPage/>} />
         </Routes>
       </BrowserRouter>
    </>
  )
}

export default App