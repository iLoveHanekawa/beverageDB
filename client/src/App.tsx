import { Routes, Route } from 'react-router-dom'
import React from 'react'
import NavBar from './features/NavBar/NavBar'
import Home from './components/home/Home'
import About from './components/About'
import Contact from './components/Contact'
import ContentContact from './components/home/contents/Contact'
import Hero from './components/hero/Hero'
import BottomNavBar from './features/BottomNavBar/BottomNavBar'
import Intro from './components/home/contents/Intro'
import Searching from './components/home/contents/Searching'
import Api from './components/home/contents/Api'
import Documentation from './components/home/contents/Documentation'
import Search from './components/Search'
import Item from './components/Item'
import Loading from './components/Loading'
import Stats from './components/Stats'
import Maps from './components/maps/Maps'
import Starter from './components/starter/Starter'
import StarterItem from './components/StarterItem'
import img from './images/449153.jpg'
import Splash from './components/splash/Splash'

export type NewsType = { 
  headline: { 
    main: string 
  }, web_url: string 
}


function App() {
  
  const [renderHero, setRenderHero] = React.useState(true)
  const [news, setNews] = React.useState<NewsType[]>([])

  return (
    <div className = 'h-screen overflow-y-scroll font-inter scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl'>
      {/* <NavBar /> */}
      {/* {renderHero? <Hero />: <div></div>} */}
      <Routes>
        {/* <Route path = '/' element = {<Home setRenderHero={setRenderHero} news = {news} setNews = {setNews} />}> */}
        <Route path = '/' element = {<Splash/>} />
          {/* <Route index element = {<Intro />} />
          <Route path = '/introduction' element = {<Intro />} />
          <Route path = '/searching' element = {<Searching />} />
          <Route path = '/api' element = {<Api />} />
          <Route path = '/contact' element = {<ContentContact />} />
          <Route path = '/documentation' element = {<Documentation />} /> */}
        <Route path = '/maps' element = {<Maps />} />
        <Route path = '/stats' element = {<Stats setRenderHero={setRenderHero} />} />
        <Route path = '/beverages/search' element = {<Search />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} /> 
        <Route path = '/beverage/:userId' element = {<Item />} />
        <Route path = '/starters' element = {<Starter />} />
        <Route path = '/starter/:starterId' element = {<StarterItem />} />
      </Routes>
      {/* <BottomNavBar /> */}
    </div>
  )
}

export default App
