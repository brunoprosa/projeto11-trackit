import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Singin from './pages/Singin'
import Habits from './pages/Habits'
import Today from './pages/Today'
import Historic from './pages/Historic'
import axios from 'axios'
import TokenProvider from './context/token'

function App() {

  axios.defaults.headers.common['Authorization'] = 'h09yBzFmu9OGqCCekSH6B0Cn';

  return (
    <BrowserRouter>
      <TokenProvider>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/cadastro" element={<Singin/>}/>
          <Route path="/habitos" element={<Habits/>}/>
          <Route path="/hoje" element={<Today/>}/>
          <Route path="/historico" element={<Historic/>}/>
        </Routes>
      </TokenProvider>
    </BrowserRouter>
  )
}

export default App