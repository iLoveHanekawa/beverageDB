import { connectDB } from "./db/connectDB";
import dataModel from "./models/dataModel";
import 'dotenv/config'
import * as data from './data.json'

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI as string)
        await dataModel.deleteMany()
        await dataModel.create(data.default)
        process.exit(1)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
