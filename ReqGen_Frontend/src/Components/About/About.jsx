import { NavLink } from 'react-router-dom'

function About() {
  const highlights = [
    {
      icon: '⚠️',
      color: 'rose',
      title: 'The Problem',
      description:
        'Freelancers and agencies often receive vague client ideas, causing repeated clarification calls, misaligned expectations, and delayed project starts.',
    },
    {
      icon: '💡',
      color: 'amber',
      title: 'Our Solution',
      description:
        'ReqGen transforms rough project ideas into structured requirement documents with scope, timeline, feature mapping, and cost estimation in minutes.',
    },
    {
      icon: '🚀',
      color: 'sky',
      title: 'Why It Matters',
      description:
        'Teams move from discovery to execution faster with better planning quality, fewer misunderstandings, and clear documentation for all stakeholders.',
    },
  ]

  const colorMap = {
    rose:  { border: 'border-rose-200',  bg: 'bg-rose-50',  badge: 'bg-rose-100',  title: 'text-rose-800'  },
    amber: { border: 'border-amber-200', bg: 'bg-amber-50', badge: 'bg-amber-100', title: 'text-amber-800' },
    sky:   { border: 'border-sky-200',   bg: 'bg-sky-50',   badge: 'bg-sky-100',   title: 'text-sky-800'   },
  }

  const capabilities = [
    { icon: '💬', text: 'Prompt-based project idea input' },
    { icon: '🧠', text: 'AI-powered requirement breakdown' },
    { icon: '🛠️', text: 'Suggested MERN-aligned tech stack' },
    { icon: '🗺️', text: 'Architecture diagram direction & planning' },
    { icon: '📋', text: 'Task generation for implementation sprints' },
    { icon: '🗂️', text: 'Project history saved to your dashboard' },
  ]

  const stack = [
    { label: 'MongoDB', color: 'bg-green-100 text-green-800 border-green-200' },
    { label: 'Express', color: 'bg-slate-100 text-slate-800 border-slate-200' },
    { label: 'React', color: 'bg-sky-100 text-sky-800 border-sky-200' },
    { label: 'Node.js', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { label: 'Groq AI', color: 'bg-violet-100 text-violet-800 border-violet-200' },
    { label: 'JWT Auth', color: 'bg-amber-100 text-amber-800 border-amber-200' },
  ]

  return (
    <main className="relative overflow-hidden bg-slate-50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.15),transparent_34%),radial-gradient(circle_at_88%_25%,rgba(251,191,36,0.16),transparent_35%)]" />

      {/* ── HERO ───────────────────────── */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-10 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="animate-slide-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-300 bg-sky-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-sky-700">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
              About ReqGen
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Built to bridge the gap between{' '}
              <span className="bg-gradient-to-r from-sky-500 to-amber-500 bg-clip-text text-transparent">
                idea and execution
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              ReqGen helps freelancers and agencies transform vague client briefs into
              execution-ready project plans — before a single line of code is written.
            </p>
          </div>

          {/* vision + stack card */}
          <div className="animate-slide-up rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 sm:p-8" style={{ animationDelay: '0.1s' }}>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🎯</span>
              <h2 className="text-xl font-extrabold text-slate-900">Vision</h2>
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Make requirement engineering faster, clearer, and more reliable by
              combining domain templates with practical AI assistance.
            </p>

            <div className="mt-6">
              <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400">Built With</h3>
              <div className="flex flex-wrap gap-2">
                {stack.map((s) => (
                  <span key={s.label} className={`rounded-lg border px-3 py-1 text-xs font-semibold ${s.color}`}>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM / SOLUTION / WHY ─── */}
      <section className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((item, i) => {
            const c = colorMap[item.color]
            return (
              <article
                key={item.title}
                className={`animate-slide-up rounded-2xl border ${c.border} ${c.bg} p-6 transition hover:shadow-md`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${c.badge} text-xl`}>
                  {item.icon}
                </div>
                <h3 className={`text-base font-extrabold ${c.title}`}>{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </article>
            )
          })}
        </div>
      </section>

      {/* ── CAPABILITIES GRID ──────────── */}
      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-sky-50 p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold text-slate-900">What You Can Do With ReqGen</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            From initial discovery to implementation planning, ReqGen helps you standardize
            and speed up requirement workflows.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((cap) => (
              <div key={cap.text} className="flex items-center gap-3 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm border border-white/80 transition hover:border-sky-200 hover:shadow-md">
                <span className="text-lg">{cap.icon}</span>
                {cap.text}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <NavLink
              to="/get-started"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-700"
            >
              Try It Now →
            </NavLink>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
