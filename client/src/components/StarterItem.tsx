import React from 'react'
import { colors } from '../components/starter/colors'
import { useSelector } from 'react-redux'
import { StateType } from '../app/store'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useNavigate, useSearchParams, useParams } from 'react-router-dom'
import SplashNav from './splash/SplashNav'
import axios from 'axios'
import Loading from './Loading'

function StarterItem() {
    const navigate = useNavigate()
    const { starterId } = useParams()
    const [searchParams, setSearchParams] = useSearchParams()
    let index = Number(searchParams.get('index'))
    const [data, setData] = React.useState<{ name: string, description: string } | undefined>()

    React.useEffect(() => {
        const fetchData = async (url: string) => {
            const response = await axios.get(url)
            const data = response.data 
            setData(data.starter)
            console.log(data)
        }
        fetchData(`https://beveragedb-production.up.railway.app/api/v1/starter/${starterId}`)
    }, [])

    return (
    <div className={`text-white duration-300 transition w-full h-full ${colors[(index === -1)? 0: index]}`}>
        <SplashNav />
        {!data? <div className='flex justify-center w-full items-center z-10 absolute top-1/4'>
            <Loading />
        </div>:<div className='flex flex-col justify-start items-start z-10 ml-10 absolute top-1/4'>
            <div className = 'flex items-center gap-5 justify-start'>
                <button className='hover:scale-125 transition duration-300' onClick = {() => {
                        navigate('/starters', { replace: true })
                    }}>
                    <MdOutlineArrowBackIosNew className = 'text-4xl ' />
                </button>
                <div className = 'text-6xl font-bold tracking-wide'>{data?.name}</div>
            </div>
            <div className = 'mx-10 mt-12'>{data?.description}</div>
        </div>}
    </div>
    )
}

export default StarterItem