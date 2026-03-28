import { NavLink } from 'react-router-dom'

function Home() {
	const coreOutputs = [
		'Clear project scope with priorities and milestones',
		'Estimated timeline with delivery phases',
		'Feature breakdown from must-have to nice-to-have',
		'Practical cost estimate based on scope complexity',
	]

	const productFeatures = [
		'Prompt input for client project ideas',
		'Generated project plan with readable sections',
		'Export project plan to PDF for proposals',
		'Collaboration-ready structure for teams and clients',
	]

	const aiFeatures = [
		'AI requirement breakdown from rough client statements',
		'AI tech stack suggestions tailored for MERN projects',
		'AI architecture diagrams for implementation planning',
		'AI task generation for sprint or milestone execution',
	]

	return (
		<main className="relative overflow-hidden bg-slate-50 [font-family:'Segoe_UI',sans-serif]">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,rgba(251,191,36,0.18),transparent_35%),radial-gradient(circle_at_86%_24%,rgba(56,189,248,0.16),transparent_34%)]" />

			<section className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-16">
				<div className="grid items-center gap-10 lg:grid-cols-2">
					<div>
						<p className="inline-flex items-center rounded-full border border-slate-300 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
							MERN + AI Workflow
						</p>
						<h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
							AI Project Requirement Generator
						</h1>
						<p className="mt-4 text-lg font-semibold text-slate-700">
							Perfect for freelancers and agencies who need fast, structured,
							and client-friendly project documentation.
						</p>
						<p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
							Turn vague client ideas into complete implementation plans with
							actionable scope, realistic timelines, feature mapping, and cost
							estimates generated in minutes.
						</p>

						<div className="mt-8 flex flex-wrap gap-3">
							<NavLink
								to="/get-started"
								className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
							>
								Start Generating
							</NavLink>
							<NavLink
								to="/login"
								className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
							>
								Login
							</NavLink>
						</div>
					</div>

					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 sm:p-8">
						<p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
							Problem We Solve
						</p>
						<h2 className="mt-3 text-2xl font-extrabold text-slate-900">
							Clients often provide vague requirements
						</h2>
						<p className="mt-3 text-sm leading-7 text-slate-600">
							Instead of spending hours in back-and-forth clarification, ReqGen
							converts rough ideas into a delivery-ready project blueprint.
						</p>

						<ul className="mt-6 space-y-3">
							{coreOutputs.map((item) => (
								<li
									key={item}
									className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700"
								>
									{item}
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			<section className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid gap-6 md:grid-cols-2">
					<article className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
						<h3 className="text-xl font-extrabold text-slate-900">
							Core Product Features
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Built for practical pre-sales and project kickoff workflows.
						</p>
						<ul className="mt-5 space-y-3">
							{productFeatures.map((feature) => (
								<li
									key={feature}
									className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-700"
								>
									{feature}
								</li>
							))}
						</ul>
					</article>

					<article className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
						<h3 className="text-xl font-extrabold text-slate-900">
							AI Integration Layer
						</h3>
						<p className="mt-2 text-sm text-slate-600">
							Intelligence that assists decisions, architecture, and execution.
						</p>
						<ul className="mt-5 space-y-3">
							{aiFeatures.map((feature) => (
								<li
									key={feature}
									className="rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-700"
								>
									{feature}
								</li>
							))}
						</ul>
					</article>
				</div>
			</section>

			<section className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8 lg:pb-16">
				<div className="rounded-3xl bg-slate-900 px-6 py-8 text-white sm:px-8 sm:py-10">
					<h3 className="text-2xl font-extrabold">How It Works</h3>
					<div className="mt-6 grid gap-4 md:grid-cols-4">
						{[
							'Client enters project idea using prompt input',
							'AI breaks idea into requirements and features',
							'System outputs scope, timeline, and cost estimate',
							'Team exports PDF and starts collaboration',
						].map((step, index) => (
							<div key={step} className="rounded-xl bg-white/10 p-4">
								<p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-200">
									Step {index + 1}
								</p>
								<p className="mt-2 text-sm leading-6 text-slate-100">{step}</p>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

export default Home
