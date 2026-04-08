import { useState, useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

// ── helpers ─────────────────────────────────────────────────────────────────
const formatCurrency = (n) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n)

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

// ── empty state ──────────────────────────────────────────────────────────────
function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-800">No projects yet</h3>
      <p className="mb-6 max-w-xs text-sm text-slate-500">
        You haven't generated any project plans yet. Create your first one!
      </p>
      <Link
        to="/get-started"
        className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        Generate a Plan
      </Link>
    </div>
  )
}

// ── project detail modal ─────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 py-8 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* header */}
        <div className="sticky top-0 z-10 flex items-start justify-between rounded-t-2xl bg-white px-6 py-5 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900 leading-snug pr-8">
              {project.scope}
            </h2>
            <p className="mt-1 text-xs text-slate-400">{formatDate(project.createdAt)}</p>
          </div>
          <button
            onClick={onClose}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* features */}
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-emerald-800">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-emerald-200 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
              </span>
              Key Features
            </h3>
            <ul className="space-y-1.5">
              {project.features?.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-200 text-xs font-bold text-emerald-700">{i + 1}</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* tech stack */}
          <div className="rounded-xl border border-sky-200 bg-sky-50 p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-sky-800">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-sky-200 text-sky-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              </span>
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack?.map((tech, i) => (
                <span key={i} className="rounded-lg bg-sky-100 px-3 py-1 text-sm font-semibold text-sky-700">{tech}</span>
              ))}
            </div>
          </div>

          {/* timeline */}
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-amber-800">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-amber-200 text-amber-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              Timeline
            </h3>
            <div className="relative ml-3">
              <div className="absolute left-0 top-0 h-full w-0.5 bg-amber-200" />
              <div className="space-y-4 pl-6">
                {project.timeline?.map((phase, i) => (
                  <div key={i} className="relative">
                    <span className="absolute -left-[26px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-amber-400 bg-white shadow-sm" />
                    <p className="text-sm font-bold text-slateate-800">{phase.phase}</p>
                    <p className="text-sm text-slate-500">{phase.duration}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* cost */}
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4">
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-rose-800">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded bg-rose-200 text-rose-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              Estimated Cost
            </h3>
            <div className="flex gap-4">
              <div className="flex-1 rounded-lg bg-rose-100 p-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-500">Minimum</p>
                <p className="text-xl font-extrabold text-rose-700">{formatCurrency(project.cost?.minimum)}</p>
              </div>
              <div className="flex-1 rounded-lg bg-rose-200 p-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Maximum</p>
                <p className="text-xl font-extrabold text-rose-800">{formatCurrency(project.cost?.maximum)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── project card ─────────────────────────────────────────────────────────────
function ProjectCard({ project, onClick }) {
  return (
    <div
      onClick={() => onClick(project)}
      className="group cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
    >
      {/* scope */}
      <p className="mb-3 line-clamp-2 text-sm font-semibold leading-snug text-slate-800 group-hover:text-slate-900">
        {project.scope}
      </p>

      {/* tech badge strip */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {project.techStack?.slice(0, 4).map((tech, i) => (
          <span key={i} className="rounded-md bg-sky-50 px-2 py-0.5 text-xs font-medium text-sky-700 border border-sky-100">
            {tech}
          </span>
        ))}
        {project.techStack?.length > 4 && (
          <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
            +{project.techStack.length - 4} more
          </span>
        )}
      </div>

      {/* cost + date row */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400 mb-0.5">Estimated Cost</p>
          <p className="text-sm font-bold text-rose-600">
            {formatCurrency(project.cost?.minimum)} – {formatCurrency(project.cost?.maximum)}
          </p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400 mb-0.5">Created</p>
          <p className="text-xs font-medium text-slate-600">{formatDate(project.createdAt)}</p>
        </div>
      </div>

      {/* features count */}
      <div className="mt-3 border-t border-slate-100 pt-3 flex items-center justify-between text-xs text-slate-400">
        <span>{project.features?.length || 0} features</span>
        <span>{project.timeline?.length || 0} phases</span>
        <span className="flex items-center gap-1 text-slate-500 font-medium group-hover:text-slate-800 transition">
          View details
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </div>
  )
}

// ── main page ────────────────────────────────────────────────────────────────
function History() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [selectedProject, setSelectedProject] = useState(null)
  const [search, setSearch] = useState("")

  const { user, authFetch } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate("/login")
      return
    }
    fetchProjects()
  }, [user])

  const fetchProjects = async () => {
    setLoading(true)
    setError("")
    try {
      const response = await authFetch("/api/myprojects")
      const data = await response.json()
      if (!response.ok) throw new Error(data.message || "Failed to fetch projects")
      setProjects(data.data?.projects || [])
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const filtered = projects.filter((p) =>
    p.scope?.toLowerCase().includes(search.toLowerCase()) ||
    p.techStack?.some((t) => t.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* page header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Project History
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              {loading ? "Loading…" : `${projects.length} project${projects.length !== 1 ? "s" : ""} generated`}
            </p>
          </div>
          <Link
            to="/get-started"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            New Plan
          </Link>
        </div>

        {/* search */}
        {!loading && projects.length > 0 && (
          <div className="mb-6 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by project scope or tech stack…"
              className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100 shadow-sm"
            />
          </div>
        )}

        {/* error */}
        {error && (
          <div className="mb-6 flex items-center gap-3 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            {error}
          </div>
        )}

        {/* loading skeleton */}
        {loading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5">
                <div className="mb-3 space-y-2">
                  <div className="h-4 w-full rounded bg-slate-200" />
                  <div className="h-4 w-3/4 rounded bg-slate-200" />
                </div>
                <div className="mb-4 flex gap-1.5">
                  {[...Array(3)].map((_, j) => <div key={j} className="h-5 w-14 rounded-md bg-slate-100" />)}
                </div>
                <div className="h-10 rounded-lg bg-slate-100" />
              </div>
            ))}
          </div>
        )}

        {/* empty */}
        {!loading && !error && projects.length === 0 && <EmptyState />}

        {/* no results from search */}
        {!loading && !error && projects.length > 0 && filtered.length === 0 && (
          <div className="py-16 text-center text-sm text-slate-500">
            No projects match "<span className="font-semibold text-slate-700">{search}</span>"
          </div>
        )}

        {/* project grid */}
        {!loading && filtered.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* detail modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}

export default History
