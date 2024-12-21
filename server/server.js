import express, { urlencoded } from "express"
import cors from "cors"
import "dotenv/config"

import cookieParser from "cookie-parser"
import connectDB from "./config/mongodb.js"
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRoutes.js"

const app = express()
const port = process.env.PORT || 4000

connectDB()

const allowedOrigins = ['https://mern-auth-frontend-9t6w.onrender.com']
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin :allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],    
    credentials:true
}))

//API ENDPOINTS
app.get('/',(req,res)=>{
    res.send("api is working")
})
app.use('/api/auth',authRouter)
app.use('/api/user',userRouter)


app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})


