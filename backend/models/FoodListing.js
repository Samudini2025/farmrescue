
import mongoose from "mongoose"

const foodListingSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true,
        enum: ["Vegetables", "Fruits", "Other"]
    },

    description: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true,
        min: 1
    },

    unit: {
        type: String,
        required: true,
        enum: ["kg", "g", "pieces", "bundles"]
    },

    price: {
        type: Number,
        default: 0,
        min: 0
    },

    listingType: {
        type: String,
        required: true,
        enum: ["sale", "donation"]
    },

    location: {
        type: String,
        required: true
    },

    expiryDate: {
        type: Date,
        required: true
    },

    imageUrl: {
        type: String,
        default: ""
    },

    status: {
        type: String,
        enum: ["available", "reserved", "collected", "expired"],
        default: "available"
    },

    farmer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, {
    timestamps: true
})

const FoodListing = mongoose.model("FoodListing", foodListingSchema)

export default FoodListing
