import mongoose from "mongoose";

const updateMentor = mongoose.Schema({

        Mentor :{
                type : String,
                required : true,
                
        },

        studentData : Object

})

const  updateMentorStudent = mongoose.model('updateMentorStudent',updateMentor);
export default updateMentorStudent;



