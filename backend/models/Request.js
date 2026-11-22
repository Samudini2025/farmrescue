
import mongoose from "mongoose"

const requestSchema = new mongoose.Schema({

    foodListing: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FoodListing",
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

    requestedQuantity: {
        type: Number,
        required: true,
        min: 1
    },

    message: {
        type: String,
        default: ""
    },

    requestType: {
        type: String,
        enum: ["purchase", "donation"],
        required: true
    },

    status: {
        type: String,
        enum: ["pending", "accepted", "rejected", "cancelled", "completed"],
        default: "pending"
    }

}, {
    timestamps: true
})

const Request = mongoose.model("Request", requestSchema)

export default Request
