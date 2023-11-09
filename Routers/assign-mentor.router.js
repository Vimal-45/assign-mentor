import express from 'express';
import {
    PreviouslyAssignedMentor,
    assignStudentToMentor,
    changeMentor,
    createMentor,
    createStudent,
    getAllStudent,
    getMentorDetails,
    updatedStudentsWithMentor
} from '../Controllers/assign-mentor.controller.js';


const router = express.Router();

router.post('/create/mentors', createMentor)
router.post('/create/student', createStudent)
router.get('/get/mentors', getMentorDetails)
router.get('/get/student', getAllStudent)
router.post('/assign/student', assignStudentToMentor)
router.get('/previous/data', PreviouslyAssignedMentor)
router.get('/updated/data', updatedStudentsWithMentor)
router.put('/change/mentor',changeMentor)




export default router;