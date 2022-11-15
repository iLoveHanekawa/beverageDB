import { connectDB } from "./db/connectDB";
import starterModel from "./models/starterModel";
import 'dotenv/config'
import * as starters from './starters.json'

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI as string)
        await starterModel.deleteMany()
        await starterModel.create(starters.default)
        process.exit(1)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
