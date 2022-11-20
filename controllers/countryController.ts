import { Request, Response } from 'express'
import countryModel from '../models/countryModel'

export const createFeature = async (req: Request, res: Response) => {
    await countryModel.create(req.body)
}

export const getAllFeatures = async (req: Request, res: Response) => {
    const data = await countryModel.find({}, {_id: 0})
    res.send({ countries: data })
}
