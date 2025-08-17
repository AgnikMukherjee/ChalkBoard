
import { useMemo } from 'react'
import Card from '../components/Card.jsx'
import {
  LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts'
import { useStudents } from '../context/StudentsContext.jsx'

export default function Dashboard() {
  const { students } = useStudents()

  const totals = useMemo(() => ({
    total: students.length,
    present: Math.round(students.length * 0.9),
    absent: Math.max(0, Math.round(students.length * 0.1) - 2),
    late: 5
  }), [students])

  const attendanceData = useMemo(() => {
    const days = ['Jan 1','Jan 4','Jan 7','Jan 10','Jan 13','Jan 16','Jan 19','Jan 22','Jan 25','Jan 28']
    return days.map((d, i) => ({ day: d, present: totals.present - (i % 4 === 0 ? 5 : i % 3 === 0 ? 2 : 0) }))
  }, [totals.present])

  const distribution = useMemo(() => {
    const byStatus = students.reduce((acc, s) => { acc[s.status] = (acc[s.status] || 0) + 1; return acc }, {})
    return Object.entries(byStatus).map(([name, value]) => ({ name, value }))
  }, [students])

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <h1 className="text-2xl font-semibold text-navy-900">Overview</h1>
        <span className="text-sm text-slate-500">We hope you're having a great day.</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card><div className="text-sm text-slate-500">Total Students</div><div className="text-3xl font-semibold text-navy-900 mt-1">{totals.total}</div></Card>
        <Card><div className="text-sm text-slate-500">Present Today</div><div className="text-3xl font-semibold text-navy-900 mt-1">{totals.present}</div></Card>
        <Card><div className="text-sm text-slate-500">Absent Today</div><div className="text-3xl font-semibold text-navy-900 mt-1">{totals.absent}</div></Card>
        <Card><div className="text-sm text-slate-500">Late Students</div><div className="text-3xl font-semibold text-navy-900 mt-1">{totals.late}</div></Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="lg:col-span-2">
          <div className="mb-3 text-sm text-slate-500">Total Attendance Report</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={attendanceData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="present" stroke="#0b5fff" strokeWidth={1} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <div className="mb-3 text-sm text-slate-500">Students by Status</div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie dataKey="value" data={distribution} innerRadius={60} outerRadius={80} paddingAngle={2}>
                  {distribution.map((_, i) => <Cell key={i} fill={i % 2 ? '#0b5fff' : '#94a3b8'} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  )
}
