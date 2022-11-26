import React from 'react'
import {Chart as ChartJS, registerables, PointElement, Legend, Tooltip, LineElement, ArcElement, CategoryScale, LinearScale, BarElement} from 'chart.js'
import { Chart } from 'react-chartjs-2'
import { useNavigate } from 'react-router-dom'
import 'chart.js/auto'
import { MdNavigateBefore } from 'react-icons/md'

function Stats() {

  const navigate = useNavigate();
  ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, PointElement, Legend, Tooltip)

  const chartRef = React.useRef()

  const [data, setData] = React.useState({
    labels: ['Jun', 'Jul', 'Aug'],
    datasets: [
      {
        id: 0,
        label: 'list 1',
        data: [5, 6, 7],
        backgroundColor: ['orange', 'purple', 'yellow']
      },
      {
        id: 1,
        label: 'list 2',
        data: [3, 2, 1],
        backgroundColor: ['red', 'green', 'blue'],
      },
    ],
  })

  return (
    <div className = 'w-full h-full justify-center flex flex-col relative items-center'> 
      <div className = 'absolute text-white text-lg font-bold top-10 left-10 flex justify-start items-center gap-3'>
        <MdNavigateBefore onClick = {() => { navigate('/') }} className = 'text-3xl hover:scale-110 transition duration-300 cursor-pointer' />Just a demo, currently in development.</div>
      <div className='w-96'>
        <Chart type = 'bar' ref = {chartRef} datasetIdKey='id' data={data} />
      </div>
    </div>
  )
}

export default Stats