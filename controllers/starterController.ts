import { request, Request, Response } from 'express'
import starterModel from '../models/starterModel'

export const getAllStarters = async (req: Request, res: Response) => {
    const starters = await starterModel.find({}).sort('name')
    res.json({ count: starters.length, starters })
}

export const createStarter = async (req: Request, res: Response) => {
    await starterModel.create(req.body) 
}

export const getStarter = async (req: Request, res: Response) => {
    const { _id } = req.params
    const starter = await starterModel.findOne({ _id })
    res.json({ starter })
}