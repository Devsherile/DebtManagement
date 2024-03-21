import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainLayout from './layout/MainLayout'
import Navbar from './layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <MainLayout/>
    <Navbar/>
    </>
  )
}

export default App
