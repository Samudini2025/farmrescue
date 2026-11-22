import express from "express"
import mongoose from "mongoose"
import User from "./models/User.js"



const app = express();
const PORT = 5000
// const MONGODB_URI="mongodb+srv://tharinduln2004_db_user:fsbu6BzHKqHXATPb@cluster0.f4o7r9x.mongodb.net/"
const MONGODB_URI="mongodb+srv://samudiniiresha_db_user:aQXkKN5mwhFd8TR7@cluster0.llgbrnq.mongodb.net/"


app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to FarmRescue API!")
})

mongoose.connect(MONGODB_URI).then(()=>{
    console.log("Database connected successfully")
}).catch((error)=>{
    console.log("MongoDB connection error ",error)
})

app.post("/",(req,res)=>{
    res.json({
        message:"Massage is send"
    })
    const message= req.body.name;
    console.log(message)
})

app.get("/test-user", async (req, res) => {
    try {
        const user = new User({
            name: "Kamal Perera",
            email: "kamal@gmail.com",
            password: "test123",
            role: "farmer",
            phone: "0771234567",
            address: "Vavuniya"
        })

        await user.save()

        res.send("User saved successfully!")

    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`)
})
// Then ok Bye bye 👋