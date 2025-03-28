import express from 'express'
import cors from 'cors'
import 'dotenv/config'  //will get support of .env file in our project


//App config 
const app=express()
const port=process.env.PORT || 4000


//middlewares
app.use(express.json())
app.use(cors())   //can access the backend from any ip


//api endpoints
app.get('/',(req,res)=>{
    res.send("API WORKING")
})


app.listen(port,()=>{
    console.log(`server started on PORT ${port}`);
    
})