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
    }
})

export default mongoose.model('data', dataSchema)