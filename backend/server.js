import express from "express"
import mongoose from "mongoose"


const app = express();
const PORT = 5000
const MONGODB_URI="mongodb+srv://farmrescue_user:AVrDucgNPOwfF9S5@farmrescuedbcluster.enrg5ho.mongodb.net"


app.use(express.json())
mongoose.connect(MONGODB_URI).then(()=>{
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log("MongoDB connection error ",error)
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})