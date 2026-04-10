import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

function Header() {
  const { user, logoutUser } = useAuth()
  const navigate = useNavigate()
  
  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    ...(user ? [
      { label: 'Generate', to: '/get-started' },
      { label: 'History', to: '/history' },
    ] : []),
  ]

  const handleLogout = async () => {
    await logoutUser()
    navigate('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-gradient-to-r from-amber-50 via-white to-cyan-50/70 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-sm font-bold text-white shadow-lg shadow-slate-400/40 transition group-hover:scale-105">
            RG
          </span>
          <div>
            <p className="text-base font-extrabold tracking-tight text-slate-900">
              ReqGen
            </p>
            <p className="text-xs font-medium text-slate-500">
              Requirement Generator
            </p>
          </div>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-200/70 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="hidden sm:block mr-2 text-sm font-semibold text-slate-700">
                Hi, {user.username || user.fullName}
              </div>
              <button
                onClick={handleLogout}
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
