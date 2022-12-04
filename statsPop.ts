import statsModel from "./models/statsModel";
import { connectDB } from "./db/connectDB";
import 'dotenv/config'

const charts = [
    {
        chartType: 'bar',      
        chartData: {
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                id: 0,
                label: 'list 1',
                data: [5, 6, 7],
                backgroundColor: ['#f06292', 'purple', 'yellow']
              },
              {
                id: 1,
                label: 'list 2',
                data: [3, 2, 1],
                backgroundColor: ['red', 'green', 'blue'],
              },
            ],
        }
    },
    {
        chartType: 'bar',
        chartData: {
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                id: 0,
                label: 'list 1',
                data: [5, 6, 7],
                backgroundColor: ['#f06292', 'purple', 'yellow']
              },
              {
                id: 1,
                label: 'list 2',
                data: [3, 2, 1],
                backgroundColor: ['red', 'green', 'blue'],
              },
            ],
        }
    },
    {
        chartType: 'bar',
        chartData: {
            labels: ['Jun', 'Jul', 'Aug'],
            datasets: [
              {
                id: 0,
                label: 'list 1',
                data: [5, 6, 7],
                backgroundColor: ['#f06292', 'purple', 'yellow']
              },
              {
                id: 1,
                label: 'list 2',
                data: [3, 2, 1],
                backgroundColor: ['red', 'green', 'blue'],
              },
            ],
        }
    }
]

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI as string)
        await statsModel.deleteMany()
        await statsModel.create(charts)
        process.exit(1)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()