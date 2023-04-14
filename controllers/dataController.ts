import { Request, Response, text } from 'express'
import dataModel from '../models/dataModel'

export const getAllData = async (req: Request, res: Response) => {
    const { name, starter, ingredients, place, culturalImportance, microorganisms, nutritionalValue, alcoholContent, tasteAndOdour, texture, reference, tribes, districts, weather, latitude, longitude, rainfall, humidity, minAC, maxAC, minFT, maxFT, minRainfall, maxRainfall, minHumidity, maxHumidity, limit, page = 1 } = req.query
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
        queryObj = { ...queryObj, tasteAndOdour: { $regex: tasteAndOdour, $options: 'i' } }
    }
    if(texture) {
        queryObj = { ...queryObj, texture: {$regex: texture, $options: 'i'} }
    }
    if(reference) {
        queryObj = { ...queryObj, reference: reference }
    }
    if(tribes) {
        queryObj = { ...queryObj, tribes: { $regex: tribes, $options: 'i' } }
    }
    if(districts) {
        queryObj = { ...queryObj, districts: { $regex: districts, $options: 'i' } }
    }
    if(weather) {
        queryObj = { ...queryObj, weather: { $regex: weather, $options: 'i' } }
    }
    if(humidity) {
        queryObj = { ...queryObj, humidity: { $regex: humidity, $options: 'i' } }
    }
    if(rainfall) {
        queryObj = { ...queryObj, rainfall: { $regex: rainfall, $options: 'i' } }
    }
    if(latitude) {
        queryObj = { ...queryObj, latitude: { $regex: latitude, $options: 'i' } }
    }
    if(longitude) {
        queryObj = { ...queryObj, longitude: { $regex: longitude, $options: 'i' } }
    }
    if(minAC) {
        queryObj = { ...queryObj, minAC: { $gte: Number(minAC) } }
    }
    if(maxAC) {
        queryObj = { ...queryObj, maxAC: { $lte: Number(maxAC) } }
    }
    if(minFT) {
        queryObj = { ...queryObj, minFT: { $gte: Number(minAC) } }
    }
    if(maxFT) {
        queryObj = { ...queryObj, maxFT: { $lte: Number(maxFT) } }
    }
    if(minRainfall) {
        queryObj = { ...queryObj, minRainfall: { $gte: Number(minRainfall) } }
    }
    if(maxRainfall) {
        queryObj = { ...queryObj, maxRainfall: { $lte: Number(maxRainfall) } }
    }
    if(minHumidity) {
        queryObj = { ...queryObj, minHumidity: { $gte: Number(minHumidity) } }
    }
    if(maxHumidity) {
        queryObj = { ...queryObj, maxHumidity: { $lte: Number(maxHumidity) } }
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
