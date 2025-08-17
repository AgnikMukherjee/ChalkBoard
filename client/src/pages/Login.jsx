
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const nav = useNavigate()

  const submit = (e) => {
    e.preventDefault()
    login(email)
    nav('/dashboard')
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-50 to-white flex items-center justify-center p-4">
      <div className="card w-full max-w-md p-6">
        <h1 className="text-2xl font-semibold mb-2 text-navy-900">Welcome back</h1>
        <p className="text-slate-500 mb-6">Log in to continue</p>
        <form onSubmit={submit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1 text-slate-600">Email</label>
            <input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm mb-1 text-slate-600">Password</label>
            <input className="input" type="password" value={password} onChange={e=>setPassword(e.target.value)} required />
          </div>
          <button className="btn w-full">Login</button>
        </form>
        <div className="mt-4 text-sm text-center text-slate-600">
          No account? <Link className="text-navy-700 hover:underline" to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  )
}
