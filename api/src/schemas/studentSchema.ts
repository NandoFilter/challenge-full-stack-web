import { QueryError } from 'mysql2'
import database from '../database'
import Student from '../models/student'

const table = 'students'

class StudentSchema {
  /**
   * getStudents
   *
   * @param callback Function
   */
  public getStudents(callback: Function) {
    const conn = database.getConnection()

    if (conn) {
      conn.query(`SELECT * FROM ${table}`, (err: Error, results: Student[]) => {
        if (err) throw err

        callback(results)
      })

      conn.end()
    }
  }

  /**
   * addStudent
   *
   * @param student Student
   */
  public addStudent(student: Student) {
    const conn = database.getConnection()

    if (conn) {
      conn.query(
        `INSERT INTO ${table} SET ?`,
        student,
        (err: QueryError | null) => {
          if (err) throw err
        }
      )

      conn.end()
    }
  }

  /**
   * updateStudent
   *
   * @param student Student
   * @param callback Function
   */
  public updateStudent(student: Student, callback: Function) {
    const conn = database.getConnection()

    const { ra, name, email } = student

    if (conn) {
      conn.query(
        `UPDATE ${table} SET name = '${name}', email = '${email}' WHERE ra = ${ra}`
      )

      conn.query(
        `SELECT * FROM ${table} WHERE ra = ${ra}`,
        (err: Error, results: Student[]) => {
          if (err) throw err

          callback(results)
        }
      )

      conn.end()
    }
  }

  /**
   * deleteStudent
   *
   * @param ra string
   */
  public deleteStudent(ra: string) {
    const conn = database.getConnection()

    if (conn) {
      conn.query(`DELETE FROM ${table} WHERE ra = ${ra}`, (err: Error) => {
        if (err) throw err
      })

      conn.end()
    }
  }
}

export default new StudentSchema()
