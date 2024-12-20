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

const allowedOrigins = ['http://localhost:5173']
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin :allowedOrigins,
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


//dfAX66TJz2tTquWy
//damantadi38


//mongodb+srv://damantadi38:<db_password>@mern-cluster.qgguw.mongodb.net/
