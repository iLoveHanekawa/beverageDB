import express from 'express'
import { getAllData } from '../controllers/dataController'

export const dataRouter = express.Router()
dataRouter.get('/', getAllData)
