import assignStudents from "../Models/assignStudents.schema.js";
import Mentor from "../Models/mentor.schema.js";
import Student from "../Models/student.schema.js";
import updateMentorStudent from "../Models/updatedStudentMentor.schema.js";

// Create & Get Mentor: POST /create/mentors


export const createMentor = async (req, res) => {

    try {
        // console.log(req.body);
        const mentor = new Mentor(req.body)
        // console.log(mentor);
        await mentor.save();
        res.status(201).json({ message: ` The mentor ${mentor.Name} sucessfully added`, data: mentor })


    } catch (error) {
        console.log('error in createMentor controler:', error);
        res.status(500).json({ error: error })
    }
}
export const getMentorDetails = async (req, res) => {

    try {
        const allMentor = await Mentor.find();
        if (allMentor.length > 0) {
            res.status(200).json(allMentor);
        } else {
            res.status(400).json({ message: "No details found" });
        }
    } catch (error) {
        console.log('error in getMentorDetails controler');
        res.status(500).json({ error: error })
    }
}



// Create & Get Student: POST /api/students
export const createStudent = async (req, res) => {
    // console.log(req.body);
    try {
        const student = new Student(req.body)
        await student.save();
        res.status(201).json({ message: ` The student ${student.Name} sucessfully added`, data: student })

    } catch (error) {
        console.log('error in createStudent controler');
        res.status(500).json({ error: error })
    }
}
export const getAllStudent = async (req, res) => {

    try {
        const allStudent = await Student.find();
        if (allStudent.length > 0) {
            res.status(200).json(allStudent);
        } else {
            res.status(200).json({ message: "No student details found" });
        }

    } catch (error) {
        console.log('error in getAllStudent controler');
        res.status(500).json({ error: error })
    }
}



// Assign Student to Mentor: POST /api/assign

export const assignStudentToMentor = async (req, res) => {
    const { Mentor, studentData } = req.body
    // console.log(Mentor);
    // console.log(studentData);
    const newStudent = studentData;
    const matchedCount = []
    try {
        const isAlreadyData = await assignStudents.find()
        if (isAlreadyData.length !== 0) {
         
                for (const newEntry of newStudent) {
                    for (const oldEntry of isAlreadyData) {
                        // console.log(newEntry);
                        const matchedStudentsInOldData = oldEntry.studentData.filter((student) =>
                            newEntry._id.includes(student._id)
                        );
                        matchedCount.push(...matchedStudentsInOldData);
                    }

                }
                if (matchedCount.length > 0) {
                    // console.log(matchedCount);
                    res.status(200).json({ message: 'Already student assigned' })
                } else {
                    const assignData = new assignStudents(req.body)
                    const updateMentor = new updateMentorStudent(req.body)
                    await assignData.save();
                    await updateMentor.save();
                    res.status(201).json({ message: `Students assigned to Mentor sucessfully` })
                }
           

        } else {
            const assignData = new assignStudents(req.body)
            const updateMentor = new updateMentorStudent(req.body)
            await assignData.save();
            await updateMentor.save();
            res.status(201).json({ message: `Students assigned to Mentor sucessfully` })
        }
    } catch (error) {
        console.log('error in assignStudentToMentor controler', error);
        res.status(500).json({ error: error })
    }
}







// Assign or Change Mentor for Student: POST /api/assignMentor/:studentId
export const changeMentor = async (req, res) => {

    const { Mentor, Student } = req.body
    // console.log(Mentor,Student);
    const isAlreadyData = await updateMentorStudent.find()

    try {
        for (const oldEntry of isAlreadyData) {
            const matchedData = oldEntry.studentData.filter((student) =>
                Student.includes(student.Name)
            );
            if (matchedData.length > 0)
            //$pull: Removes all elements from an array that match the query 
            {

                await updateMentorStudent.updateOne(
                    { _id: oldEntry._id }, { $pull: { studentData: { _id: matchedData[0]._id } } })

                const updateToMentor = isAlreadyData.filter(item => item.Mentor === Mentor)
                // console.log(matchedData[0]);
                await updateMentorStudent.updateOne(
                    
                    { _id: updateToMentor[0]._id }, { $push: { studentData: matchedData[0] } })

                    res.status(200).json({message:'sucessfully Mentor changed'})

            }
        }

    } catch (error) {
        console.log('error in changeMentor controler', error);
        res.status(500).json({ error: error })
    }
}



// Show Students for a Particular Mentor: GET /api/studentsForMentor/:mentorId


export const updatedStudentsWithMentor = async (req, res) => {

    try {
        const oldStudentWithMentor = await updateMentorStudent.find();
        if (oldStudentWithMentor.length > 0) {
            res.status(200).json(oldStudentWithMentor);
        } else {
            res.status(200).json({ message: "No details found" });
        }


    } catch (error) {
        console.log('error in createMentor controler');
        res.status(500).json({ error: error })
    }
}





// Show Previously Assigned Mentor for a Student: GET /api/previousMentor/:studentId

export const PreviouslyAssignedMentor = async (req, res) => {

    try {
        const oldStudentWithMentor = await assignStudents.find();
        if (oldStudentWithMentor.length > 0) {
            res.status(200).json(oldStudentWithMentor);
        } else {
            res.status(200).json({ message: "No details found" });
        }

    } catch (error) {
        console.log('error in createMentor controler');
        res.status(500).json({ error: error })
    }
}