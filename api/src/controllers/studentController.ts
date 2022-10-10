import { Request, Response } from "express";
import Student from "../models/student";
import StudentSchema from "../schemas/StudentSchema";

class StudentController {
  students: Student[] = [];

  public fetchStudents(req: Request, res: Response) {
    StudentSchema.getStudents((results: Student[]) => {
      res.json(results);
    });
  }

  public addStudent(req: Request, res: Response) {
    const { name, email, ra, cpf } = req.body as Student;

    const student = { name, email, ra, cpf };

    StudentSchema.addStudent(student);

    return res.json(student);
  }

  public deleteStudent(req: Request, res: Response) {
    const { ra } = req.params;

    StudentSchema.deleteStudent(ra);

    return res.json("Success");
  }

  public updateStudent(req: Request, res: Response) {
    const ra = Number(req.params.ra);
    const { name, email } = req.body;

    const student = { name, email, ra };

    StudentSchema.updateStudent(student, (results: Student[]) => {
      res.json(results);
    });
  }
}

export default new StudentController();
