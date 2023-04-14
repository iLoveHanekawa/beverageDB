import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    starter: {
        type: String 
    },
    ingredients: {
        type: String
    },
    place: {
        type: String 
    },
    culturalImportance: {
        type: String 
    },
    microorganisms: {
        type: String
    },
    nutritionalValue: {
        type: String 
    },
    alcoholContent: {
        type: String 
    },
    tasteAndOdour: {
        type: String 
    },
    texture: {
        type: String 
    },
    fermentationTime: {
        type: String
    },
    reference: {
        type: String
    },
    minAC: {
        type: Number
    },
    maxAC: {
        type: Number
    },
    minFT: {
        type: Number
    },
    maxFT: {
        type: Number
    },

    tribes: {
        type: String
    },
    districts: {
        type: String
    },
    weather: {
        type: String
    },
    latitude: {
        type: String
    },
    longitute: {
        type: String
    },
    rainfall: {
        type: String
    },
    humidity: {
        type: String
    }
})

export default mongoose.model('data', dataSchema)
