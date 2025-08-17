import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex">
      {/* Fixed Sidebar for desktop */}
      <Sidebar className="hidden md:block fixed top-0 left-0 h-screen w-64" />

      {/* Mobile Sidebar */}
      <Sidebar
        mobile
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />

      {/* Main area */}
      <div className="flex-1 md:ml-64">
        <Navbar onMenu={() => setMobileOpen(true)} />

        {/* Page content */}
        <main className="max-w-7xl mx-auto w-full p-4 lg:p-6 md:mt-12 pt-20">
          {children}
        </main>

        <Footer/>
      </div>
    </div>
  )
}
