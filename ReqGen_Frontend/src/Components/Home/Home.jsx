import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

function Home() {
  const { user } = useAuth()

  const coreOutputs = [
    { icon: '🎯', text: 'Clear project scope with priorities and milestones' },
    { icon: '📅', text: 'Estimated timeline with delivery phases' },
    { icon: '✅', text: 'Feature breakdown from must-have to nice-to-have' },
    { icon: '💰', text: 'Practical cost estimate based on scope complexity' },
  ]

  const steps = [
    { num: '01', title: 'Describe Your Idea', desc: 'Enter a rough project idea in plain language using the prompt input.' },
    { num: '02', title: 'AI Processes It', desc: 'AI breaks it into requirements, features, timeline & cost.' },
    { num: '03', title: 'Review the Plan', desc: 'Each section is displayed clearly — scope, stack, timeline, budget.' },
    { num: '04', title: 'Save & Revisit', desc: 'All your projects are saved in History for future reference.' },
  ]

  const productFeatures = [
    { icon: '⚡', text: 'Prompt input for any project idea' },
    { icon: '📋', text: 'Generated plan with readable sections' },
    { icon: '🗂️', text: 'Full project history dashboard' },
    { icon: '🤝', text: 'Collaboration-ready structure for teams' },
  ]

  const aiFeatures = [
    { icon: '🧠', text: 'AI requirement breakdown from rough ideas' },
    { icon: '🛠️', text: 'Tech stack suggestions tailored for your project' },
    { icon: '🗺️', text: 'Architecture direction for implementation planning' },
    { icon: '🚀', text: 'Task generation for sprint or milestone execution' },
  ]

  return (
    <main className="relative overflow-hidden bg-slate-50">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_86%_24%,rgba(56,189,248,0.16),transparent_34%)]" />

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-700">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-500" />
              AI-Powered · MERN Stack
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.15] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Turn vague ideas into{' '}
              <span className="bg-gradient-to-r from-amber-500 to-sky-500 bg-clip-text text-transparent">
                clear project plans
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-7 text-slate-600">
              ReqGen takes rough client ideas and generates structured scope, timelines,
              feature lists, and cost estimates — in under a minute.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <NavLink
                to={user ? '/get-started' : '/register'}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/20 transition hover:bg-slate-700 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {user ? 'Generate a Plan' : 'Get Started Free'}
              </NavLink>
              {!user && (
                <NavLink
                  to="/login"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Login
                </NavLink>
              )}
              {user && (
                <NavLink
                  to="/history"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  View History
                </NavLink>
              )}
            </div>
          </div>

          {/* problem card */}
          <div className="animate-slide-up rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 sm:p-8" style={{ animationDelay: '0.1s' }}>
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-100 text-base">⚠️</span>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Problem We Solve</p>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900">Clients give vague requirements</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Instead of spending hours in back-and-forth clarification, ReqGen converts rough ideas
              into a delivery-ready project blueprint.
            </p>

            <ul className="mt-5 space-y-2.5">
              {coreOutputs.map((item) => (
                <li key={item.text} className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-amber-50">
                  <span className="text-base">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ────────────────────────────────────────────── */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-white p-6 transition hover:shadow-md">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-100 text-base">📦</span>
              <h3 className="text-lg font-extrabold text-slate-900">Core Product Features</h3>
            </div>
            <p className="mb-5 text-sm text-slate-500">Built for practical pre-sales and project kickoff workflows.</p>
            <ul className="space-y-2.5">
              {productFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm border border-slate-100 transition hover:border-cyan-200">
                  <span>{f.icon}</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 transition hover:shadow-md">
            <div className="mb-4 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-base">🤖</span>
              <h3 className="text-lg font-extrabold text-slate-900">AI Integration Layer</h3>
            </div>
            <p className="mb-5 text-sm text-slate-500">Intelligence that assists decisions, architecture, and execution.</p>
            <ul className="space-y-2.5">
              {aiFeatures.map((f) => (
                <li key={f.text} className="flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm border border-slate-100 transition hover:border-amber-200">
                  <span>{f.icon}</span>
                  {f.text}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────────── */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 px-6 py-10 text-white sm:px-10">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-extrabold sm:text-3xl">How It Works</h2>
            <p className="mt-2 text-sm text-slate-400">From idea to structured plan in 4 simple steps</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="group rounded-2xl bg-white/8 border border-white/10 p-5 transition hover:bg-white/12 hover:border-white/20">
                <p className="mb-2 text-2xl font-black text-amber-400">{step.num}</p>
                <p className="mb-1.5 text-sm font-bold text-white">{step.title}</p>
                <p className="text-xs leading-5 text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA inside dark section */}
          <div className="mt-8 text-center">
            <NavLink
              to={user ? '/get-started' : '/register'}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:bg-amber-50"
            >
              {user ? 'Generate Now →' : 'Start for Free →'}
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
