import axios from 'axios'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { NewsType } from '../../App'

type HomeProps = {
  setRenderHero: React.Dispatch<React.SetStateAction<boolean>>
  news: NewsType[]
  setNews: React.Dispatch<React.SetStateAction<NewsType[]>>
}

function Home(props: HomeProps) {

  React.useEffect(() => {
      console.log()
      const fetchNews = async () => {
        const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=beverage&api-key=${import.meta.env.VITE_NYT_KEY}`)
        const data = response.data
        console.log(data)
        props.setNews(data.response.docs)
        console.log(data.response.docs)
    }
    if(props.news.length === 0) fetchNews()
    props.setRenderHero(true)
  }, [])

  return (
    <div className='overflow-x-hidden justify-between flex h-3/5 my-3 mx-4'>
      <div className = 'rounded-l-2xl flex flex-col items-center h-full w-1/6 relative text-gray-400 bg-gray-200'>
        <nav className = 'w-full mt-7 text-md flex flex-col items-center overflow-x-hidden pr-7'>
          <div className='text-xl black text-gray-600 border-gray-300 border-b-2 mb-6 pr-8'>Contents</div>
          <NavLink className = 'navlink' to = '/introduction'>Introduction</NavLink>
          <NavLink className = 'navlink' to = '/searching'>Searching</NavLink>
          <NavLink className = 'navlink' to = '/api'>API</NavLink>
          <NavLink className = 'navlink' to = '/documentation'>Documentation</NavLink>
          <NavLink className = 'navlink' to = '/contact'>Contact</NavLink>
        </nav>
      </div>
      <div className='w-3/4 mx-1 overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-200 px-16 scrollbar-thumb-rounded-md'>
        {/* <p className = 'text-gray-400 mt-6'>Some introduction text</p> */}
        <Outlet />
      </div>
      <div className = 'rounded-r-2xl h-full w-3/12 relative text-gray-400 overflow-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-thumb-rounded-xl bg-gray-200'>
        <ul className = 'mt-7 text-md flex flex-col items-start'>
          <li className = 'text-xl black text-gray-600 self-center border-gray-300 border-b-2 mb-7'>Suggested Articles</li>
          {props.news.length === 0? <p className = 'self-center'>Loading...</p>:props.news.map((i: { headline: { main: string }, web_url: string }, index) => <a key = {index} href = {i.web_url} target = '__blank' className = 'news'>{i.headline.main}</a>)}
        </ul>
      </div>
    </div>
  )
}

export default Home