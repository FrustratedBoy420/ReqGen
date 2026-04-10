import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

function Footer() {
  const { user } = useAuth()
  const year = new Date().getFullYear()

  const links = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    ...(user
      ? [
          { label: 'Generate', to: '/get-started' },
          { label: 'History', to: '/history' },
        ]
      : [
          { label: 'Login', to: '/login' },
          { label: 'Register', to: '/register' },
        ]),
  ]

  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">

        {/* brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-bold text-slate-900">
              RG
            </span>
            <div>
              <p className="text-base font-extrabold tracking-tight text-white">ReqGen</p>
              <p className="text-xs text-slate-500">AI Requirement Generator</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-500">
            Turn rough client ideas into structured, delivery-ready project plans — powered by AI.
          </p>
        </div>

        {/* navigation */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Navigation</h3>
          <ul className="space-y-2.5">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="group flex items-center gap-1.5 text-sm text-slate-400 transition hover:text-white"
                >
                  <span className="h-0.5 w-3 rounded bg-slate-700 transition group-hover:w-5 group-hover:bg-white" />
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* contact */}
        <div>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">Contact</h3>
          <div className="space-y-3 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>mridul@reqgen.app</span>
            </div>
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>India</span>
            </div>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 px-4 py-4 sm:px-6 lg:px-8">
        <p className="mx-auto w-full max-w-7xl text-center text-xs text-slate-600 sm:text-left">
          © {year} ReqGen — Built with by Mridul. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
