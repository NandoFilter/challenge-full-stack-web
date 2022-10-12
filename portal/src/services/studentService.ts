import axios from '@/utils/axios'
import Student from '@/models/Student'

class StudentService {
  /**
   * fetchStudents
   *
   * @returns Promise<Student[]>
   */
  public async fetchStudents(): Promise<Student[]> {
    try {
      const { data } = await axios.get('/students')
      return data
    } catch (error) {
      console.error(error)
    }

    return []
  }

  /**
   * addStudent
   *
   * @param student Student
   */
  public async addStudent(student: Student) {
    try {
      const { data } = await axios.post('/student', student)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * updateStudent
   *
   * @param student Student
   */
  public async updateStudent(student: Student) {
    try {
      const { data } = await axios.put(`/student/${student.ra}`, student)
      return data
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * deleteStudent
   *
   * @param ra number
   */
  public async deleteStudent(ra: number) {
    try {
      const { data } = await axios.delete(`/student/${ra}`)
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

export default new StudentService()
