import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Singin from './pages/Singin'
import Habits from './pages/Habits'
import Today from './pages/Today'
import Historic from './pages/Historic'
import axios from 'axios'
import TokenProvider from './context/token'
import PerfilProvider from './context/perfil'

function App() {

  axios.defaults.headers.common['Authorization'] = 'feMJeN5ICXAXxCdw4fh6JZ2A';

  return (
    <BrowserRouter>
      <TokenProvider>
        <PerfilProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/cadastro" element={<Singin/>}/>
            <Route path="/habitos" element={<Habits/>}/>
            <Route path="/hoje" element={<Today/>}/>
            <Route path="/historico" element={<Historic/>}/>
          </Routes>
        </PerfilProvider>
      </TokenProvider>
    </BrowserRouter>
  )
}

export default App