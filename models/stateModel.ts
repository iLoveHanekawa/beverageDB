import mongoose from "mongoose";

const stateSchema = new mongoose.Schema({
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
        GID_1: {
            type: String,
        },
        GID_0: {
            type: String,
        },
        COUNTRY: {
            type: String,
        },
        NAME_1: {
            type: String,
        },
        VARNAME_1: {
            type: String,
        },
        NL_NAME_1: {
            type: String,
        },
        TYPE_1: {
            type: String,
        },
        ENGTYPE_1: {
            type: String,
        },
        CC_1: {
            type: String,
        },
        HASC_1: {
            type: String,
        },
        ISO_1: {
            type: String,
        }
    }
}, { versionKey: false })

export default mongoose.model('state', stateSchema)