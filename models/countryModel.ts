import mongoose from "mongoose";

const countrySchema = new mongoose.Schema({
    type: {
        type: String
    },
    geometry: {
        type: {
            type: String
        },
        coordinates: {
            type: Array
        }
    },
    properties: {
        iso3: {
            type: String,
        },
        status: {
            type: String,
        },
        color_code: {
            type: String,
        },
        name: {
            type: String,
        },
        continent: {
            type: String,
        },
        region: {
            type: String,
        },
        iso_3166_1_: {
            type: String,
        },
        french_shor: {
            type: String,
        },
    },
    
}, {
    versionKey: false
})

export default mongoose.model('country', countrySchema)