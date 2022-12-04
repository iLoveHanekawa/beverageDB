import express from 'express'
import { getAllCharts } from '../controllers/statsController'

export const statsRouter = express.Router()

statsRouter.get('/', getAllCharts)
