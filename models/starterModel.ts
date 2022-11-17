import mongoose from "mongoose";

const starterSchema = new mongoose.Schema({
    name: String,
    description: String
})

export default mongoose.model('starter', starterSchema)