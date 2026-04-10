import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts/authContext"

// --- Icon Components ---
const ScopeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)
const FeaturesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)
const TimelineIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const CostIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const TechIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
)
const SpinnerIcon = () => (
  <svg className="h-6 w-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
  </svg>
)
const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
)

// --- Section Card component ---
function SectionCard({ icon, title, color, children }) {
  const colorMap = {
    violet: { border: "border-violet-200", bg: "bg-violet-50", badge: "bg-violet-100 text-violet-700", title: "text-violet-800" },
    emerald: { border: "border-emerald-200", bg: "bg-emerald-50", badge: "bg-emerald-100 text-emerald-700", title: "text-emerald-800" },
    amber:   { border: "border-amber-200",   bg: "bg-amber-50",   badge: "bg-amber-100 text-amber-700",   title: "text-amber-800"   },
    rose:    { border: "border-rose-200",    bg: "bg-rose-50",    badge: "bg-rose-100 text-rose-700",    title: "text-rose-800"    },
    sky:     { border: "border-sky-200",     bg: "bg-sky-50",     badge: "bg-sky-100 text-sky-700",     title: "text-sky-800"     },
  }
  const c = colorMap[color] || colorMap.violet

  return (
    <div className={`rounded-2xl border ${c.border} ${c.bg} p-5 shadow-sm transition hover:shadow-md`}>
      <div className="mb-4 flex items-center gap-2">
        <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${c.badge}`}>
          {icon}
        </span>
        <h2 className={`text-base font-bold tracking-tight ${c.title}`}>{title}</h2>
      </div>
      {children}
    </div>
  )
}

function Get_Started() {
  const [idea, setIdea] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const { user, authFetch } = useAuth()
  const navigate = useNavigate()

  const formatCurrency = (n) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n)

  const handleGenerate = async (e) => {
    e.preventDefault()
    if (!user) {
      navigate("/login")
      return
    }
    if (!idea.trim()) return

    setError("")
    setResult(null)
    setLoading(true)

    try {
      const response = await authFetch("/api/generateplan", {
        method: "POST",
        body: JSON.stringify({ idea }),
      })
      const data = await response.json()

      if (!response.ok) {
        throw new Error("Failed to generate plan")
      }

      const plan = data.data?.result
      if (!plan) throw new Error("Unexpected response format from server")
      setResult(plan)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

 
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">

        {/* --- Header --- */}
        <div className="mb-10 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            AI Project Planner
          </h1>
          <p className="mt-2 text-slate-500">
            Describe your project idea and get an AI‑generated plan in seconds
          </p>
          {!user && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-800 animate-fade-in">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 shrink-0 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              You must be{" "}
              <button onClick={() => navigate("/login")} className="font-bold underline">
                logged in
              </button>{" "}
              to generate a plan.
            </div>
          )}
        </div>

        {/* --- Prompt Input --- */}
        <form onSubmit={handleGenerate} className="mb-10">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-200">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g. Build a mobile app for food delivery with real-time tracking, payment integration, and a restaurant dashboard..."
              rows={4}
              required
              className="w-full resize-none bg-white px-5 pt-5 text-slate-800 outline-none placeholder:text-slate-400 text-sm leading-6"
            />
            <div className="flex items-center justify-between px-4 py-3">
              <span className="text-xs text-slate-400">{idea.length} characters</span>
              <button
                type="submit"
                disabled={loading || !idea.trim()}
                className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-400"
              >
                {loading ? (
                  <>
                    <SpinnerIcon />
                    Generating…
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate Plan
                  </>
                )}
              </button>
            </div>
          </div>
        </form>

        {/* --- Error --- */}
        {error && (
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="mt-0.5 h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* --- Loading Skeleton --- */}
        {loading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`${i === 0 ? "sm:col-span-2" : ""} animate-pulse rounded-2xl border border-slate-200 bg-slate-100 p-5`}>
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-8 w-8 rounded-lg bg-slate-200" />
                  <div className="h-4 w-32 rounded bg-slate-200" />
                </div>
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-slate-200" />
                  <div className="h-3 w-4/5 rounded bg-slate-200" />
                  <div className="h-3 w-2/3 rounded bg-slate-200" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* --- Result Sections --- */}
        {result && !loading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

            {/* Scope — full width */}
            <div className="sm:col-span-2">
              <SectionCard icon={<ScopeIcon />} title="Project Scope" color="violet">
                <p className="leading-relaxed text-slate-700">{result.scope}</p>
              </SectionCard>
            </div>

            {/* Features */}
            <SectionCard icon={<FeaturesIcon />} title="Key Features" color="emerald">
              <ul className="space-y-2">
                {result.features?.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-xs font-bold text-emerald-700">
                      {i + 1}
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Tech Stack */}
            <SectionCard icon={<TechIcon />} title="Tech Stack" color="sky">
              <div className="flex flex-wrap gap-2">
                {result.techStack?.map((tech, i) => (
                  <span key={i} className="rounded-lg bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">
                    {tech}
                  </span>
                ))}
              </div>
            </SectionCard>

            {/* Timeline — full width */}
            <div className="sm:col-span-2">
              <SectionCard icon={<TimelineIcon />} title="Project Timeline" color="amber">
                <div className="relative ml-3">
                  {/* vertical line */}
                  <div className="absolute left-0 top-0 h-full w-0.5 bg-amber-200" />
                  <div className="space-y-5 pl-6">
                    {result.timeline?.map((phase, i) => (
                      <div key={i} className="relative">
                        {/* dot */}
                        <span className="absolute -left-[26px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-amber-400 bg-white shadow-sm" />
                        <p className="text-sm font-bold text-slate-800">{phase.phase}</p>
                        <p className="text-sm text-slate-500">{phase.duration}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionCard>
            </div>

            {/* Cost — full width */}
            <div className="sm:col-span-2">
              <SectionCard icon={<CostIcon />} title="Estimated Cost" color="rose">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                  <div className="flex-1 rounded-xl bg-rose-100 px-5 py-4 text-center">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-rose-500">Minimum</p>
                    <p className="text-2xl font-extrabold text-rose-700">
                      {formatCurrency(result.cost?.minimum)}
                    </p>
                  </div>
                  <div className="hidden text-slate-300 sm:block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                  <div className="flex-1 rounded-xl bg-rose-200 px-5 py-4 text-center">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-rose-600">Maximum</p>
                    <p className="text-2xl font-extrabold text-rose-800">
                      {formatCurrency(result.cost?.maximum)}
                    </p>
                  </div>
                </div>
              </SectionCard>
            </div>

    

          </div>
        )}
      </div>
    </div>
  )
}

export default Get_Started
