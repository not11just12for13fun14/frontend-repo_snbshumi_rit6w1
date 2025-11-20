import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const location = useLocation()
  const isActive = (path) => location.pathname === path
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur border-b border-black/5 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#D4AF37]"></div>
          <div className="text-sm leading-tight">
            <div className="font-semibold tracking-tight">Abdelhadi Jasim Al Hammadi</div>
            <div className="text-neutral-500">Advocates & Legal Consultants</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className={isActive('/') ? 'text-black' : 'text-neutral-600 hover:text-black transition-colors'}>الرئيسية</Link>
          <Link to="/packages" className={isActive('/packages') ? 'text-black' : 'text-neutral-600 hover:text-black transition-colors'}>الباقات</Link>
        </nav>
        <div className="flex items-center gap-3">
          <a href="https://wa.me/971000000000" target="_blank" className="hidden sm:inline-flex items-center rounded-full border border-black/10 px-4 py-2 text-sm hover:shadow-sm transition">WhatsApp</a>
          <a href="tel:+971000000000" className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm hover:bg-neutral-800 transition">Call</a>
        </div>
      </div>
    </header>
  )
}
