import React from 'react'
import {Chart as ChartJS, defaults, PointElement, Legend, Tooltip, LineElement, ArcElement, CategoryScale, LinearScale, BarElement} from 'chart.js'
import { Chart } from 'react-chartjs-2'

type StatsPropsType = {
  setRenderHero: React.Dispatch<React.SetStateAction<boolean>>
}

function Stats(props: StatsPropsType) {
  
  React.useEffect(() => { 
    props.setRenderHero(false)
  }, [])

  ChartJS.register(ArcElement)
  ChartJS.register(CategoryScale)
  ChartJS.register(LinearScale)
  ChartJS.register(BarElement)
  ChartJS.register(LineElement)
  ChartJS.register(PointElement, Legend, Tooltip)

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
    <div className = 'w-full h-full justify-center flex flex-col items-center'> 
      <div className='w-96'>
        <Chart type = 'doughnut' ref = {chartRef} datasetIdKey='id' data={data} />
      </div>
    </div>
  )
}

export default Stats