import { request, Request, Response } from 'express'
import starterModel from '../models/starterModel'

export const getAllStarters = async (req: Request, res: Response) => {
    const data = await starterModel.find({})
    res.json({ count: data.length, data })
}

export const createStarter = async (req: Request, res: Response) => {
    await starterModel.create(req.body) 
}