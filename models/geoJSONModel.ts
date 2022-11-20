import mongoose from "mongoose";

const geoJSONSchema = new mongoose.Schema({
    type: {
        type: String,
        default: "FeatureCollection"
    },
    features: {
        type: Array,
        default: []
    }
}, {
    versionKey: false
})

export default mongoose.model('geoJSON', geoJSONSchema)