
import { COURSES } from '../utils/courses'
import { pickRandom, randomBool } from '../utils/helpers'

export async function fetchStudents() {
  const res = await fetch('https://dummyjson.com/users')
  const json = await res.json()
  const students = json.users.map(u => ({
    id: u.id,
    name: `${u.firstName} ${u.lastName}`,
    email: u.email,
    course: pickRandom(COURSES),
    status: randomBool() ? 'Active' : 'Inactive'
  }))
  return students
}
