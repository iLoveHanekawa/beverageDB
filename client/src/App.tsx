import { Routes, Route } from 'react-router-dom'
import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import SearchResults from './components/SearchResults'
import Item from './components/item/Item'
import { ToastContainer } from 'react-toastify'
import Stats from './components/Stats'
import Maps from './components/maps/Maps'
import Starter from './components/starter/Starter'
import StarterItem from './components/StarterItem'
import Splash from './components/splash/Splash'
import Search from './components/search/Search'
import News from './components/news/News'
import Contribute from './components/contribute/Contribute'

export type NewsType = { 
  headline: { 
    main: string 
  }, web_url: string 
}


function App() {
  
  return (
    <div className = 'h-screen overflow-y-scroll font-nunito scrollbar-thin bg-black scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl'>
      <Routes>
        <Route path = '/' element = {<Splash/>} />
        <Route path = '/maps' element = {<Maps />} />
        <Route path = '/stats' element = {<Stats />} />
        <Route path = '/search' element = {<Search />} />
        <Route path = '/beverages/search' element = {<SearchResults />} />
        <Route path = '/about' element = {<About />} />
        <Route path = '/contact' element = {<Contact />} /> 
        <Route path = '/beverage/:userId' element = {<Item />} />
        <Route path = '/starters' element = {<Starter />} />
        <Route path = '/news' element = {<News />} />
        <Route path = '/starter/:starterId' element = {<StarterItem />} />
        <Route path = '/contribute' element = {<Contribute />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
