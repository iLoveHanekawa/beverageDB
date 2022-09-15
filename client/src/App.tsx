import { Routes, Route } from 'react-router-dom'
import NavBar from './features/NavBar/NavBar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import ContentContact from './components/contents/Contact'
import Hero from './components/Hero'
import BottomNavBar from './features/BottomNavBar/BottomNavBar'
import Intro from './components/contents/Intro'
import Searching from './components/contents/Searching'
import Api from './components/contents/Api'

function App() {
  return (
    <div className = 'h-screen overflow-y-scroll font-inter'>
      <NavBar />
      <Hero />
      <Routes>
        <Route path = '/' element = {<Home />}>
          <Route path = '/introduction' element = {<Intro />} />
          <Route path = '/searching' element = {<Searching />} />
          <Route path = '/api' element = {<Api />} />
          <Route path = '/contact' element = {<ContentContact />} />
        </Route>
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} /> 
      </Routes>
      <BottomNavBar />
    </div>
  )
}

export default App
