
import { NavLink } from 'react-router-dom'
import clsx from 'classnames'

export default function Sidebar({ mobile=false, open=false, onClose }) {
  const content = (
    <div className="h-full flex flex-col">
      <div className="px-4 h-16 flex items-center text-lg font-semibold border-b border-navy-800">
        <h2 className="text-[34px] font-bold flex gap-0">
          <span className="text-white text-shadow-md/50">Chalk</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-sky-300 to-sky-800">Board</span>
        </h2>
      </div>
      <nav className="p-3 space-y-1 overflow-y-auto">
        {['/dashboard','/students','/add-student'].map((path, i) => {
          const label = ['Overview', 'Students', 'Add Student'][i]
          return (
            <NavLink key={path}
              to={path}
              className={({isActive}) => clsx(
                'block px-3 py-2 rounded-xl hover:bg-navy-800',
                isActive ? 'bg-navy-800 text-white' : 'text-navy-100/90'
              )}
              onClick={onClose}
            >{label}</NavLink>
          )
        })}
      </nav>
    </div>
  )

  if (!mobile) return <aside className="sidebar hidden lg:block">{content}</aside>
  return (
    <div className={clsx('fixed inset-0 z-30 lg:hidden', open ? '' : 'pointer-events-none')}>
      <div className={clsx('absolute inset-0 bg-black/30 transition', open ? 'opacity-100' : 'opacity-0')} onClick={onClose} />
      <aside className={clsx('absolute left-0 top-0 h-full w-64 bg-navy-900 text-white border-r border-navy-800 transform transition',
        open ? 'translate-x-0' : '-translate-x-full')}>
        {content}
      </aside>
    </div>
  )
}
