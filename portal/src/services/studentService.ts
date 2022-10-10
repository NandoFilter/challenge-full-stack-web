import axios from '@/utils/axios'
import Student from '@/models/Student'

class StudentService {
  public async fetchStudents(): Promise<Student[]> {
    try {
      const { data } = await axios.get('/students')
      return data
    } catch (error) {
      console.error(error)
    }

    return []
  }

  public async addStudent(student: Student) {
    try {
      const { data } = await axios.post('/student', student)
      return data
    } catch (error) {
      console.error(error)
    }
  }
}

export default new StudentService()
