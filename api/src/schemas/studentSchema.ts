import database from "../database";
import Student from "../models/student";

const table = "students";

class StudentSchema {
  public getStudents(callback: Function) {
    const conn = database.getConnection();

    conn.query(`SELECT * FROM ${table}`, (err: Error, results: Student[]) => {
      if (err) throw err;

      callback(results);
    });

    conn.end();
  }

  public getStudent(ra: string, callback: Function) {
    const conn = database.getConnection();

    conn.query(
      `SELECT * FROM ${table} WHERE ra = ${ra}`,
      (err: Error, results: Student[]) => {
        if (err) throw err;

        callback(results[0]);
      }
    );
  }

  public addStudent(student: Student) {
    const conn = database.getConnection();

    conn.query(`INSERT INTO ${table} SET ?`, student, (err: Error) => {
      if (err) throw err;
    });

    conn.end();
  }

  public updateStudent(student: Student, callback: Function) {
    const conn = database.getConnection();

    const { ra, name, email } = student;

    conn.query(
      `UPDATE ${table} SET name = '${name}', email = '${email}' WHERE ra = ${ra}`
    );

    conn.query(
      `SELECT * FROM ${table} WHERE ra = ${ra}`,
      (err: Error, results: Student[]) => {
        if (err) throw err;

        callback(results);
      }
    );

    conn.end();
  }

  public deleteStudent(ra: string) {
    const conn = database.getConnection();

    conn.query(`DELETE FROM ${table} WHERE ra = ${ra}`, (err: Error) => {
      if (err) throw err;
    });

    conn.end();
  }
}

export default new StudentSchema();
