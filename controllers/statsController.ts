import statsModel from "../models/statsModel";
import { Request, Response } from 'express'

export const getAllCharts = async (req: Request, res: Response) => {
    const allCharts = await statsModel.find({})
    res.json({ allCharts })
}