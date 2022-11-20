import express from 'express'
import { createGeoJSON, getGeoJSON } from '../controllers/geoJSONController'

export const geoJSONRouter = express.Router()

geoJSONRouter.get('/', getGeoJSON).post('/', createGeoJSON)
