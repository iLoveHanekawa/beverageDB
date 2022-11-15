import express from 'express'
import {createStarter, getAllStarters} from '../controllers/starterController'
export const starterRouter = express.Router()

starterRouter.get('/', getAllStarters).post('/', createStarter)
