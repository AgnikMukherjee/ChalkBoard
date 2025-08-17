
import { useState } from 'react'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { COURSES } from '../utils/courses'
import { useStudents } from '../context/StudentsContext.jsx'

export default function AddStudent() {
  const { addStudent } = useStudents()
  const [form, setForm] = useState({ name:'', email:'', course: COURSES[0], status:'Active' })
  const [created, setCreated] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
    addStudent(form)
    setCreated(form)
    setForm({ name:'', email:'', course: COURSES[0], status:'Active' })
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
      <Card className="lg:col-span-2">
        <h2 className="text-xl font-semibold mb-4 text-navy-900">Add Student</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-slate-600 mb-1">Name</label>
            <input className="input" value={form.name} onChange={e=>setForm({...form, name:e.target.value})} required />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Email</label>
            <input type="email" className="input" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} required />
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Course</label>
            <select className="input" value={form.course} onChange={e=>setForm({...form, course:e.target.value})}>
              {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm text-slate-600 mb-1">Status</label>
            <select className="input" value={form.status} onChange={e=>setForm({...form, status:e.target.value})}>
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <button className="btn">Save Student</button>
          </div>
        </form>
      </Card>

      <Card>
        <h3 className="text-lg font-medium mb-2 text-navy-900">Preview</h3>
        {created ? (
          <div className="space-y-1 text-sm">
            <div><span className="text-slate-500">Name:</span> {created.name}</div>
            <div><span className="text-slate-500">Email:</span> {created.email}</div>
            <div><span className="text-slate-500">Course:</span> {created.course}</div>
            <div><span className="text-slate-500">Status:</span> <Badge variant={created.status==='Active'?'success':'danger'}>{created.status}</Badge></div>
          </div>
        ) : (
          <div className="text-sm text-slate-500">Fill the form to preview.</div>
        )}
      </Card>
    </div>
  )
}
