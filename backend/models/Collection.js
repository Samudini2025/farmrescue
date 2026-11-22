
import mongoose from "mongoose"

const collectionSchema = new mongoose.Schema({

    request: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Request",
        required: true
    },

    buyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    collectionDate: {
        type: Date,
        required: true
    },

    collectionTime: {
        type: String,
        required: true
    },

    collectionLocation: {
        type: String,
        required: true
    },

    notes: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: ["scheduled", "completed", "cancelled"],
        default: "scheduled"
    }

}, {
    timestamps: true
})

const Collection = mongoose.model("Collection", collectionSchema)

export default Collection
