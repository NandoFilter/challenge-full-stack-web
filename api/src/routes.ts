import { Router } from 'express'
import StudentController from './controllers/studentController'

const routes = Router()

routes.get('/students', StudentController.fetchStudents)
routes.get('/student/:ra', StudentController.getStudent)
routes.post('/student', StudentController.addStudent)
routes.delete('/student/:ra', StudentController.deleteStudent)
routes.put('/student/:ra', StudentController.updateStudent)

export default routes
