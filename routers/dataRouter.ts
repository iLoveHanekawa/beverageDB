import express from 'express'
import { getAllData, getData } from '../controllers/dataController'

export const dataRouter = express.Router()
dataRouter.get('/', getAllData).get('/:userId', getData)
