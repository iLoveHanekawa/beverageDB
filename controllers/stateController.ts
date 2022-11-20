import { Request, Response } from 'express'
import stateModel from '../models/stateModel'

export const createFeature = async (req: Request, res: Response) => {
    await stateModel.create(req.body)
}

export const getAllFeatures = async (req: Request, res: Response) => {
    const data = await stateModel.find({}, { _id: 0 })
    res.send({ states: data })
}
