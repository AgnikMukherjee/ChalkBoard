
import { useMemo, useState } from 'react'
import { useStudents } from '../context/StudentsContext.jsx'
import Badge from '../components/Badge.jsx'
import Card from '../components/Card.jsx'

export default function StudentsList() {
  const { students } = useStudents()
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState({ key: 'id', dir: 'asc' })

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    const base = students.filter(s => 
      s.name.toLowerCase().includes(q) ||
      s.email.toLowerCase().includes(q) ||
      String(s.id).includes(q) ||
      s.course.toLowerCase().includes(q) ||
      s.status.toLowerCase().includes(q)
    )
    const sorted = [...base].sort((a,b) => {
      const { key, dir } = sort
      const A = a[key], B = b[key]
      const comp = A > B ? 1 : A < B ? -1 : 0
      return dir === 'asc' ? comp : -comp
    })
    return sorted
  }, [students, query, sort])

  const columns = [
    { key: 'id', title: 'ID' },
    { key: 'name', title: 'Name' },
    { key: 'email', title: 'Email' },
    { key: 'course', title: 'Course' },
    { key: 'status', title: 'Status', render: (v) => (
      <Badge variant={v === 'Active' ? 'success' : 'danger'}>{v}</Badge>
    )}
  ]

  const toggleSort = (key) => {
    setSort(prev => prev.key === key ? { key, dir: prev.dir === 'asc' ? 'desc' : 'asc' } : { key, dir: 'asc' })
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <input className="input max-w-sm" placeholder="Search students..." value={query} onChange={e=>setQuery(e.target.value)} />
      </div>

      <Card>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <table className="min-w-full">
            <thead className="bg-slate-50/60">
              <tr>
                {columns.map(c => (
                  <th key={c.key} onClick={() => toggleSort(c.key)} className="px-4 py-3 text-left text-sm font-medium text-slate-600 cursor-pointer select-none">
                    {c.title}
                    {sort.key === c.key && <span className="ml-1 text-xs text-slate-400">({sort.dir})</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((row, idx) => (
                <tr key={row.id} className={idx % 2 ? "bg-slate-50/40" : "bg-white hover:bg-slate-50"}>
                  {columns.map((c) => (
                    <td key={c.key} className="px-4 py-3 border-t border-slate-100">
                      {c.render ? c.render(row[c.key], row) : row[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
