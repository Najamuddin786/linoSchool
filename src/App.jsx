import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllRoutes from './Components/AllRoutes'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <AllRoutes/>
   <Footer/>
   </>
  )
}

export default App
