import mongoose from "mongoose";

const studentSchema = mongoose.Schema({

    Name : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Course : {
        type : String,
        required : true
    },
  
   
})

const Student = mongoose.model('Student',studentSchema);
export default Student;