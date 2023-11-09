import mongoose from "mongoose";

const AssignStudents = mongoose.Schema({

        Mentor :{
                type : String,
                required : true,
                
        },

        studentData : Object

})

const  assignStudents = mongoose.model(' assignStudents',AssignStudents);
export default assignStudents



