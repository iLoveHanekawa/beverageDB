import React from 'react'
import {Chart as ChartJS, registerables, PointElement, Legend, Tooltip, LineElement, ArcElement, CategoryScale, LinearScale, BarElement, ChartTypeRegistry} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import 'chart.js/auto'
import { StateType, AppDispatch } from '../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../features/stats'
import Loading from './Loading'
import SplashNav from './splash/SplashNav'

function Stats() {

  ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)
  const chartRef = React.useRef()
  const loading = useSelector((state: StateType) => state.stats.loading)
  const data = useSelector((state: StateType) => state.stats.default.data)
  const dispatch: AppDispatch = useDispatch()  
  const [index, setIndex] = React.useState(0)
  const [selected, setSelected] = React.useState('')
  React.useEffect(() => {
    const fetch = async() => {
      dispatch(fetchData('https://beveragedb-production.up.railway.app/api/v1/stats'))
    }
    fetch()
  }, [])

  const onClickEvent = (labelStr: string) => {
    let index = -1
    for(let i = 0; i < data.length; i++) {
      if(data[i].chartData.datasets[0].label === labelStr) {
        index = i
        break
      }
    }
    setSelected('Country')
    setIndex(index)
  }

  return (
    <div className = 'w-full h-full justify-start flex flex-col relative overflow-x-hidden items-center'> 
      <SplashNav />
      <div className = 'text-white top-10 absolute text-4xl font-bold ml-20 my-10 border-b-2 pb-2 border-gray-800 w-full tracking-wide'>Stats</div>
      {!loading && <div className = 'ml-20 flex items-center absolute top-36 left-0 text-white justify-start'>
        <button onClick = {() => {setIndex(0)}} className = {`${index === 0? 'statsBtnSelected': 'statsBtn'}`}>{data[0].chartData.datasets[0].label}</button>
        <button onClick = {() => {setIndex(1)}} className = {`${index === 1? 'statsBtnSelected': 'statsBtn'}`}>{data[1].chartData.datasets[0].label}</button>
        <button onClick = {() => {setIndex(2)}} className = {`${index === 2? 'statsBtnSelected': 'statsBtn'}`}>{data[2].chartData.datasets[0].label}</button>
        <button onClick = {() => {setIndex(3)}} className = {`${index === 3? 'statsBtnSelected': 'statsBtn'}`}>{data[3].chartData.datasets[0].label}</button>
        <button onClick = {() => {setIndex(4)}} className = {`${index === 4? 'statsBtnSelected': 'statsBtn'}`}>{data[4].chartData.datasets[0].label}</button>
      </div>}
      <div className={`${data[index].chartType === 'doughnut' || data[index].chartType === 'pie'?'w-2/6': 'w-4/6'} rounded-md overflow-hidden top-48 absolute ${loading? 'bg-black': 'bg-white'}`}>
        {loading? <Loading />: <Chart type = {data[index].chartType as keyof ChartTypeRegistry} ref = {chartRef} datasetIdKey='id' data={data[index].chartData} />}
      </div>
    </div>
  )
}

export default Stats