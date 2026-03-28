import { NavLink } from 'react-router-dom'

function Footer() {
  const year = new Date().getFullYear()

  const quickLinks = [
    { label: 'Home', to: '/' },
  ]

  const supportLinks = [
    { label: 'About', to: '/about' },
    { label: 'Login', to: '/login' },
    { label: 'Get Started', to: '/get-started' },
  ]

  return (
    <footer className="mt-12 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-10 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-bold text-slate-900">
              RG
            </span>
            <div>
              <p className="text-base font-extrabold tracking-tight text-white">
                ReqGen
              </p>
              <p className="text-xs text-slate-400">Requirement Generator</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-6 text-slate-400">
            Build clear, structured requirements faster with focused templates and
            project workflows.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Support
          </h3>
          <ul className="mt-4 space-y-2">
            {supportLinks.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Contact
          </h3>
          <div className="mt-4 space-y-2 text-sm text-slate-400">
            <p>Email: mridul@reqgen.app</p>
            <p>Location: India</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 px-4 py-4 sm:px-6 lg:px-8">
        <p className="mx-auto w-full max-w-7xl text-center text-xs text-slate-500 sm:text-left">
          © {year} ReqGen. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
