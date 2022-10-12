import { Request, Response } from 'express'
import Student from '../models/student'
import StudentSchema from '../schemas/studentSchema'

class StudentController {
  students: Student[] = []

  /**
   * fetchStudents
   *
   * @param req Request
   * @param res Response
   */
  public fetchStudents(req: Request, res: Response) {
    StudentSchema.getStudents((results: Student[]) => {
      res.json(results)
    })
  }

  /**
   * addStudent
   *
   * @param req Request
   * @param res Response
   */
  public addStudent(req: Request, res: Response) {
    const { name, email, ra, cpf } = req.body as Student

    const student = { name, email, ra, cpf }

    StudentSchema.addStudent(student)

    return res.json(student)
  }

  /**
   * updateStudent
   *
   * @param req Request
   * @param res Response
   */
  public updateStudent(req: Request, res: Response) {
    const ra = Number(req.params.ra)
    const { name, email } = req.body

    const student = { name, email, ra }

    StudentSchema.updateStudent(student, (results: Student[]) => {
      res.json(results)
    })
  }

  /**
   * deleteStudent
   *
   * @param req Request
   * @param res Response
   */
  public deleteStudent(req: Request, res: Response) {
    const { ra } = req.params

    StudentSchema.deleteStudent(ra)

    return res.json('Success')
  }
}

export default new StudentController()
