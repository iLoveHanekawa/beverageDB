import { Request, Response } from 'express'
import dataModel from '../models/dataModel'

export const getAllData = async (req: Request, res: Response) => {
    const data = await dataModel.find({})
    res.json({ data })
}
