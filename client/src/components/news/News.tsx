import React from 'react'
import SplashNav from '../splash/SplashNav'
import Grid from './Grid';
import { fetchNews } from '../../features/news';
import { StateType, AppDispatch } from '../../app/store'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../Loading';
import Pagination from './Pagination';

function News() {
    const dispatch: AppDispatch = useDispatch()
    const newsData = useSelector((state: StateType) => state.news.default.data)
    const [searchParams, setSearchParams] = useSearchParams()
    const page = searchParams.get('page')
    const loading = useSelector((state: StateType) => state.news.loading)
    console.log(newsData);
    console.log(loading);
    
      
    React.useEffect(() => {
        dispatch(fetchNews(`https://content.guardianapis.com/search?show-fields=trailText%2Cthumbnail&q=beverages&order-by=newest&page=${page}&api-key=${import.meta.env.VITE_GUARDIAN_KEY}`))
    }, [page])
    return (
        <div className = 'overflow-x-hidden z-10 relative h-full w-full scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-gray-300'>
            <SplashNav />
            <div className = 'flex flex-col top-10 absolute w-full'>
                <div className = 'text-white text-4xl fot-bold ml-10 my-10 border-b-2 pb-2 border-gray-800 w-full tracking-wide'>News</div>
                {loading? <Loading />: <Grid />}
                <Pagination page = {Number(page)} />
            </div>
        </div>
  )
}

export default News