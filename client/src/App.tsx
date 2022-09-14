import { Routes, Route } from 'react-router-dom'
import NavBar from './features/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'

function App() {
  return (
    <div className = 'h-screen font-inter'>
      <NavBar />
      <Hero />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} /> 
      </Routes>
    </div>
  )
}

export default App
