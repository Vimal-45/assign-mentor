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
    <div>
    <ul>
      Frontend Link  <li><a href="https://frontend-assign-mentor.vercel.app/">Please Click here to send and post data</a></li>        
      </ul> 
      </div>
      <ul>
      <li>Get Mentor List - https://assign-mentor-9g6m.onrender.com/api/get/mentors</li>
      <li>Get Student List - https://assign-mentor-9g6m.onrender.com/api/get/student</li>
      <li>Get Assigned Student List - https://assign-mentor-9g6m.onrender.com/api/previous/data</li>
      <li>Get Updated Mentor List - https://assign-mentor-9g6m.onrender.com/api/updated/data</li>
      <li>Create Mentor - https://assign-mentor-9g6m.onrender.com/api/create/mentors</li>
      <li>Create Student - https://assign-mentor-9g6m.onrender.com/create/student</li>
      <li>Assign Student - https://assign-mentor-9g6m.onrender.com/api/assign/student</li>
      <li>Update Mentor - https://assign-mentor-9g6m.onrender.com/api/change/mentor</li>
    </ul>
    `;
    res.send(`The assign-Mentor app is working <br><br>${frontend}`);
  });
  
app.use('/api',router)



app.listen(PORT,()=>{

    console.log('The backend APP is listening-------', PORT);
})