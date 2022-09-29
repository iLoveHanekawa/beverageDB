import { Routes, Route } from 'react-router-dom'
import NavBar from './features/NavBar/NavBar'
import Home from './components/home/Home'
import About from './components/About'
import Contact from './components/Contact'
import ContentContact from './components/home/contents/Contact'
import Hero from './components/Hero'
import BottomNavBar from './features/BottomNavBar/BottomNavBar'
import Intro from './components/home/contents/Intro'
import Searching from './components/home/contents/Searching'
import Api from './components/home/contents/Api'
import Documentation from './components/home/contents/Documentation'
import Search from './components/Search'
import Item from './components/Item'
import Loading from './components/Loading'

function App() {
  return (
    <div className = 'h-screen overflow-y-scroll font-inter scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl'>
      <NavBar />
      <Hero />
      <Routes>
        <Route path = '/' element = {<Home />}>
          <Route index element = {<Intro />} />
          <Route path = '/introduction' element = {<Intro />} />
          <Route path = '/searching' element = {<Searching />} />
          <Route path = '/api' element = {<Api />} />
          <Route path = '/contact' element = {<ContentContact />} />
          <Route path = '/documentation' element = {<Documentation />} />
        </Route>
        <Route path = '/data/search' element = {<Search />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} /> 
        <Route path = '/data/:userId' element = {<Item />} />
      </Routes>
      <BottomNavBar />
    </div>
  )
}

export default App
