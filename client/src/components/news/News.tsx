import React from 'react'
import SplashNav from '../splash/SplashNav'
import { fetchNews } from '../../features/news';
import { StateType, AppDispatch } from '../../app/store'
import { useDispatch, useSelector } from 'react-redux';
import Grid from './Grid';

function News() {

    const dispatch: AppDispatch = useDispatch()
    const newsData = useSelector((state: StateType) => state.news.default.data)
    console.log(newsData);
    

    React.useEffect(() => {
        dispatch(fetchNews(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=beverage&api-key=${import.meta.env.VITE_NYT_KEY}`))
    }, [])

    return (
        <div className = 'overflow-x-hidden relative h-full w-full'>
            <SplashNav />
            <div className = 'flex flex-col top-10 absolute w-full'>
                <div className = 'text-white text-4xl fot-bold ml-10 my-10 border-b-2 pb-2 border-gray-800 w-full tracking-wide'>News</div>
            </div>
            <Grid />
        </div>
  )
}

export default News