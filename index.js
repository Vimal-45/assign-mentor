import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './DataBase/dbConnect.js';
import router from './Routers/assign-mentor.router.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;


app.use(cors());
app.use(express.json());

connectDB();


app.use('/api',router)


app.listen(PORT,()=>{

    console.log('The backend APP is listening-------', PORT);
})