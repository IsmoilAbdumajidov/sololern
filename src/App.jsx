import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage/HomePage'
import Register from './Pages/Register/Register'
import LoginPage from './Pages/Login/LoginPage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<LoginPage/>} />
      </Routes>
    </div>
  )
}

export default App