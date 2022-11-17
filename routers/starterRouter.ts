import express from 'express'
import {createStarter, getAllStarters, getStarter} from '../controllers/starterController'
export const starterRouter = express.Router()

starterRouter.get('/', getAllStarters).post('/', createStarter).get('/:_id', getStarter)
