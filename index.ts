import express, { Request, Response } from "express";
import * as path from 'path'
import 'dotenv/config'
import 'express-async-errors'
import { connectDB } from "./db/connectDB";
import cors from 'cors'
import { dataRouter } from "./routers/dataRouter";
import { starterRouter } from "./routers/starterRouter";
import { countryRouter } from "./routers/countryRouter";
import { stateRouter } from "./routers/stateRouter";
import { geoJSONRouter } from "./routers/geoJSONRouter";

const app = express()
const port = Number(process.env.PORT) || 5000

app.use(express.json())
app.use(cors( { origin: true, credentials: true } ))
app.use(express.static(path.join(__dirname, '/client/dist')))

app.get('/', (req: Request, res: Response) => {
    res.send('hi mom')
})
app.use('/api/v1/data', dataRouter)
app.use('/api/v1/starter', starterRouter)
app.use('/api/v1/country', countryRouter)
app.use('/api/v1/state', stateRouter)
app.use('/api/v1/geojson', geoJSONRouter)

const start = async (uri: string, port: number) => {
    try {
        await connectDB(uri)
        console.log('connected to db')
        app.listen(port, () => {
            console.log(`server listening to: ${port}`);
        })
    } catch (error) {
        console.log(error)
    }
}

start(process.env.MONGO_URI as string, port)
