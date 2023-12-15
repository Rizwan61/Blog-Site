import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServiceSection from './components/ServiceSection'
import ClassesSection from './components/ClassesSection'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <ClassesSection />
    </>
  )
}

export default App
