import express from "express";
import { createFeature, getAllFeatures } from "../controllers/stateController";

export const stateRouter = express.Router()

stateRouter.get('/', getAllFeatures).post('/', createFeature)
