import { useAuth } from '../context/AuthContext.jsx'

export default function Navbar({ onMenu }) {
  const { logout } = useAuth()

  return (
    <header className="topbar z-20 bg-white/80 backdrop-blur shadow fixed top-0 left-0 right-0 md:left-64 h-16">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-end gap-3">
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden btn-ghost"
          onClick={onMenu}
          aria-label="Open menu"
        >
          ☰
        </button>

        {/* Search box */}
        {/* <div className="flex-1">
          <input className="input max-w-md" placeholder="Search..." />
        </div> */}

        {/* Greeting */}
        <div className="text-sm text-slate-600 hidden sm:block">
          Hello Chris!
        </div>

        {/* Logout button */}
        <button
          className="btn-ghost ml-4"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </header>
  )
}
