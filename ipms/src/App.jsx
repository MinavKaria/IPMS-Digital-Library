import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { RouterProvider } from 'react-router-dom'
import router from './configs/router'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
