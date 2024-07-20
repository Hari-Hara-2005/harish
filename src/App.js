import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Signup from './Component/Signup'
import Register from './Component/Register'


const App = () => {
  return (
    <BrowserRouter>
      
    <Routes>
      <Route path='/' element={<Register/>}></Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
