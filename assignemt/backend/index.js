const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
const connectDB=require('./connection/connection')
const feedbackRouter=require('./router/feedback')
const express=require('express')

const app=express()

connectDB()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', feedbackRouter)
app.listen(process.env.PORT||8000,()=>{
    console.log('server is running!')
})