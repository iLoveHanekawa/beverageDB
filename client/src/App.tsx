import { Routes, Route } from 'react-router-dom'
import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import SearchResults from './components/SearchResults'
import Item from './components/item/Item'
import Loading from './components/Loading'
import Stats from './components/Stats'
import Maps from './components/maps/Maps'
import Starter from './components/starter/Starter'
import StarterItem from './components/StarterItem'
import img from './images/449153.jpg'
import Splash from './components/splash/Splash'
import Search from './components/search/Search'

export type NewsType = { 
  headline: { 
    main: string 
  }, web_url: string 
}


function App() {
  
  const [renderHero, setRenderHero] = React.useState(true)
  const [news, setNews] = React.useState<NewsType[]>([])

  return (
    <div className = 'h-screen overflow-y-scroll font-nunito scrollbar-thin bg-black scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl'>
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
        <Route path = '/search' element = {<Search />} />
        <Route path = '/beverages/search' element = {<SearchResults />} />
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
