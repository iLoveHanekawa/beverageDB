import { connectDB } from "./db/connectDB";
import countryModel from "./models/countryModel";
import stateModel from "./models/stateModel";
import 'dotenv/config'
import * as countries from './countries.json'
import * as states from './states.json'
import geoJSONModel from "./models/geoJSONModel";

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI as string)
        await countryModel.deleteMany()
        await countryModel.create(countries.default)
        await stateModel.deleteMany()
        await stateModel.create(states.default)
        await geoJSONModel.deleteMany()
        await geoJSONModel.create()
        process.exit(1)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start()
