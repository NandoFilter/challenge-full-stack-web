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
}

export default new StudentService()
