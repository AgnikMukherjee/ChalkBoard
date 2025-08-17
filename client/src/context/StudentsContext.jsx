
import { createContext, useContext, useEffect, useState } from 'react'
import { fetchStudents } from '../services/api'

const StudentsContext = createContext()

export function StudentsProvider({ children }) {
  const [students, setStudents] = useState([])

  useEffect(() => {
    fetchStudents().then(setStudents).catch(console.error)
  }, [])

  const addStudent = (s) => {
    setStudents(prev => {
      const id = prev.length ? Math.max(...prev.map(x=>x.id)) + 1 : 1
      return [...prev, { ...s, id }]
    })
  }

  return <StudentsContext.Provider value={{ students, addStudent }}>{children}</StudentsContext.Provider>
}

export const useStudents = () => useContext(StudentsContext)
