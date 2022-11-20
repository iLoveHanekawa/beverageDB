import { Response, Request } from 'express'
import countryModel from '../models/countryModel'
import stateModel from '../models/stateModel'
import geoJSONModel from '../models/geoJSONModel'

export const createGeoJSON = async (req: Request, res: Response) => {
    const arr1 = await countryModel.find({}, { _id: 0 })
    const arr2 = await stateModel.find({},  {_id: 0 })
    req.body.features = arr1.concat(arr2 as any)
    console.log(req.body.features)
    await geoJSONModel.create(req.body)
}

export const getGeoJSON = async (req: Request, res: Response) => {
    const data = await geoJSONModel.find({}, {_id: 0})
    res.json({result: data[0]})
}
