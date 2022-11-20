import express from "express";
import { createFeature, getAllFeatures } from "../controllers/countryController";

export const countryRouter = express.Router()

countryRouter.get('/', getAllFeatures).post('/', createFeature)
