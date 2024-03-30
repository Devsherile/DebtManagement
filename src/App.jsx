import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import Navbar from './layout/Navbar'
import Register from './pages/authentication/Register'
import Login from './pages/authentication/Login'
import AppRouter from './router/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 <AppRouter />
    </>
  )
}

export default App
