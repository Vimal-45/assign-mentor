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
app.get('/', (req, res) => {
    
    const frontend = `
      <ul>
        <li><a https://frontend-assign-mentor.vercel.app/> Plese Clik here for send and post data </a></li>        
      </ul> 
      
    `;
    res.send(`The assign-Mentor app is working <br><br>${frontend}`);
    
  });
app.use('/api',router)



app.listen(PORT,()=>{

    console.log('The backend APP is listening-------', PORT);
})