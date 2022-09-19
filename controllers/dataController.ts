import { Request, Response, text } from 'express'
import dataModel from '../models/dataModel'

export const getAllData = async (req: Request, res: Response) => {
    const { name, starter, ingredients, place, culturalImportance, microorganisms, nutritionalValue, alcoholContent, tasteAndOdour, texture, reference } = req.query
    let queryObj = {}

    if(name) {
        queryObj = { ...queryObj, name: { $regex: name, $options: 'i' } }
        
    }
    if(starter) {
        queryObj = { ...queryObj, starter: starter }
    }
    if(ingredients) {
        queryObj = { ...queryObj, ingredients: ingredients }
    }
    if(place) {
        queryObj = { ...queryObj, place: place }
    }
    if(culturalImportance) {
        queryObj = { ...queryObj, culturalImportance: culturalImportance }
    }
    if(microorganisms) {
        queryObj = { ...queryObj, microorganisms: microorganisms }
    }
    if(nutritionalValue) {
        queryObj = { ...queryObj, nutritionalValue: nutritionalValue }
    }
    if(alcoholContent) {
        queryObj = { ...queryObj, alcoholContent: alcoholContent }
    }
    if(tasteAndOdour) {
        queryObj = { ...queryObj, tasteAndOdour: tasteAndOdour }
    }
    if(texture) {
        queryObj = { ...queryObj, texture: texture }
    }
    if(reference) {
        queryObj = { ...queryObj, reference: reference }
    }

    const data: {}[] = await dataModel.find(queryObj)
    res.json({ count: data.length, data })
}
