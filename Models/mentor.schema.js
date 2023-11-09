import mongoose from "mongoose";

const mentorSchema = mongoose.Schema({

        Name : {
            type : String,
            required : true
        },

        Specialization : String,  


})

const Mentor = mongoose.model('Mentor',mentorSchema);
export default Mentor;