import mongoose from "mongoose";

//thank you https://davidpiesse.github.io/tailwind-md-colours/

const statsSchema = new mongoose.Schema({
    chartData: {
        label: {
            type: [String]
        },
        datasets: {
            type: [{
                id: Number,
                label: String,
                data: [Number],
                backgroundColor: [String]
            }]
        }
    },
    chartType: String
}, {
    versionKey: false
})

export default mongoose.model('stats', statsSchema)