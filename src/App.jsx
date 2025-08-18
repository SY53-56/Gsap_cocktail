import { useState } from 'react'
import { ScrollTrigger , SplitText } from 'gsap/all'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import  Cocktails from './components/Cocktails'
import Abouts from './components/Abouts'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Navbar/>
    <Hero/>
   < Cocktails/>
   <Abouts/>
    </>
  )
}

export default App
