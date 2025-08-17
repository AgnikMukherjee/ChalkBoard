
import { Routes, Route, Navigate } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import StudentsList from './pages/StudentsList.jsx'
import AddStudent from './pages/AddStudent.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import { StudentsProvider } from './context/StudentsContext.jsx'

function Protected({ children }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <StudentsProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/*"
            element={
              <Protected>
                <MainLayout>
                  <Routes>
                    <Route path="/" element={<Navigate to="/dashboard" replace />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/students" element={<StudentsList />} />
                    <Route path="/add-student" element={<AddStudent />} />
                  </Routes>
                </MainLayout>
              </Protected>
            }
          />
        </Routes>
      </StudentsProvider>
    </AuthProvider>
  )
}
