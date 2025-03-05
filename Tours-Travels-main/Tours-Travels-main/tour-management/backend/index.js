import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';
import tourRoute from './routes/tours.js'
import userRoute from './routes/users.js'
import db from './config/db.js'; 
import morgan from 'morgan'
import packageRoutes from './routes/packageRoutes.js';

dotenv.config()
const app =express()


// app.get("/",(req,res)=>{
    //     res.send("api is working");
    // })
    mongoose.set("strictQuery", false);
    const connect = async()=>{
        try{
            await mongoose.connect(process.env.MONGO_URI,{
                useNewUrlParser:true,
                useUnifiedTopology:true
            })
            
            console.log('mongoDB connection OK')
        } catch(err){
            console.log('mondoDB database connection fail')
        }
    }


    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(cookieParser());
app.use(morgan('dev'));
app.use('/tours',tourRoute)
app.use('/users',userRoute)

app.use(bodyParser.json());
app.use('/api', packageRoutes);
app.use(cors({ origin: '*' }));


    
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    connect();
    console.log("server listening on port",port);
})