import { Request, Response, text } from 'express'
import dataModel from '../models/dataModel'

export const getAllData = async (req: Request, res: Response) => {
    const { name, starter, ingredients, place, culturalImportance, microorganisms, nutritionalValue, alcoholContent, tasteAndOdour, texture, reference, minAC, maxAC, minFT, maxFT, limit, page = 1 } = req.query
    let queryObj = {}

    if(name) {
        queryObj = { ...queryObj, name: { $regex: name, $options: 'i' } }
    }
    if(starter) {
        queryObj = { ...queryObj, starter: { $regex: starter, $options: 'i'} }
    } 
    if(ingredients) {
        queryObj = { ...queryObj, ingredients: { $regex: ingredients, $options: 'i'} }
    }
    if(place) {
        queryObj = { ...queryObj, place: { $regex: place, $options: 'i' } }
    }
    if(culturalImportance) {
        queryObj = { ...queryObj, culturalImportance: culturalImportance }
    }
    if(microorganisms) {
        queryObj = { ...queryObj, microorganisms: { $regex: microorganisms, $options: 'i'} }
    }
    if(nutritionalValue) {
        queryObj = { ...queryObj, nutritionalValue: nutritionalValue }
    }
    if(alcoholContent) {
        queryObj = { ...queryObj, alcoholContent: { $regex: alcoholContent, $options: 'i' } }
    }
    if(tasteAndOdour) {
        queryObj = { ...queryObj, tasteAndOdour: tasteAndOdour }
    }
    if(texture) {
        queryObj = { ...queryObj, texture: {$regex: texture, $options: 'i'} }
    }
    if(reference) {
        queryObj = { ...queryObj, reference: reference }
    }
    if(minAC) {
        queryObj = { ...queryObj, minAC: { $gte: Number(minAC) } }
    }
    if(maxAC) {
        queryObj = { ...queryObj, maxAC: { $lte: Number(maxAC) } }
    }
    if(minFT) {
        queryObj = { ...queryObj, minAC: { $gte: Number(minAC) } }
    }
    if(maxFT) {
        queryObj = { ...queryObj, maxFT: { $lte: Number(maxFT) } }
    }
    const lim = Number(limit) || 15
    const skip = lim * (Number(page )- 1) 

    console.log(queryObj)

    let data: {}[] = await dataModel.find(queryObj).sort('name')
    let result = { total: data.length } 
    data = await dataModel.find(queryObj).sort('name').skip(skip).limit(lim)
    res.json({ ...result, count: data.length, data })
}

export const getData = async (req: Request, res: Response) => {
    const data = await dataModel.findById(req.params.userId)
    res.json({ data })
}
