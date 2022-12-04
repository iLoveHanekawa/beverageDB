import React from 'react'
import {Chart as ChartJS, registerables, PointElement, Legend, Tooltip, LineElement, ArcElement, CategoryScale, LinearScale, BarElement, ChartTypeRegistry} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import 'chart.js/auto'
import { MdNavigateBefore } from 'react-icons/md'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/stats'
import Loading from './Loading'
import { GeoJsonProperties } from 'geojson'
import axios from 'axios'

function Stats() {

  const navigate = useNavigate();
  const loading = useSelector((state: StateType) => state.stats.loading)
  const data = useSelector((state: StateType) => state.stats.default.data)
  ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)
  
  const dispatch: AppDispatch = useDispatch()  
  const chartRef = React.useRef()
  React.useEffect(() => {
    const fetch = async() => {
      dispatch(fetchData('https://beveragedb-production.up.railway.app/api/v1/stats'))
    }
    fetch()
  }, [])

  return (
    <div className = 'w-full h-full justify-center flex flex-col relative items-center'> 
      <div className = 'absolute text-white text-lg font-bold top-10 left-10 flex justify-start items-center gap-3'>
        <MdNavigateBefore onClick = {() => { navigate('/') }} className = 'text-3xl hover:scale-110 transition duration-300 cursor-pointer' />Just a demo, currently in development.</div>
      <div className={`w-4/5 bg-white ${loading? 'bg-black': 'bg-white'}`}>
        {loading? <Loading />: <Chart type = {data[0].chartType as keyof ChartTypeRegistry} ref = {chartRef} datasetIdKey='id' data={data[0].chartData} />}
      </div>
    </div>
  )
}

export default Stats