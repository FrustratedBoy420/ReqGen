function About() {
	const highlights = [
		{
			title: 'The Problem',
			description:
				'Freelancers and agencies often receive vague client ideas, which causes repeated clarification calls, misaligned expectations, and delayed project starts.',
		},
		{
			title: 'Our Solution',
			description:
				'ReqGen transforms rough project ideas into structured requirement documents with scope, timeline, feature mapping, and cost estimation in a few minutes.',
		},
		{
			title: 'Why It Matters',
			description:
				'Teams can move from discovery to execution faster with better planning quality, fewer misunderstandings, and clear documentation for stakeholders.',
		},
	]

	const capabilities = [
		'Prompt-based project idea input',
		'AI-powered requirement breakdown',
		'Suggested MERN-aligned tech stack',
		'Architecture diagram direction and planning',
		'Task generation for implementation sprints',
		'Project plan export to PDF for client sharing',
		'Collaboration-ready structure for teams',
	]

	return (
		<main className="relative overflow-hidden bg-slate-50 [font-family:'Segoe_UI',sans-serif]">
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(56,189,248,0.15),transparent_34%),radial-gradient(circle_at_88%_25%,rgba(251,191,36,0.16),transparent_35%)]" />

			<section className="relative mx-auto w-full max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-16">
				<div className="grid items-start gap-10 lg:grid-cols-2">
					<div>
						<p className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
							About ReqGen
						</p>
						<h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl">
							AI Project Requirement Generator for Freelancers and Agencies
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
							ReqGen is designed to bridge the gap between vague client ideas and
							execution-ready project plans. It helps teams define what to build,
							estimate effort, and align technical decisions before development
							begins.
						</p>
					</div>

					<div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/80 sm:p-8">
						<h2 className="text-xl font-extrabold text-slate-900">Vision</h2>
						<p className="mt-3 text-sm leading-7 text-slate-600">
							Make requirement engineering faster, clearer, and more reliable by
							combining domain templates with practical AI assistance.
						</p>

						<h3 className="mt-6 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">
							Built With
						</h3>
						<div className="mt-3 flex flex-wrap gap-2">
							{['MongoDB', 'Express', 'React', 'Node.js', 'AI APIs'].map((item) => (
								<span
									key={item}
									className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700"
								>
									{item}
								</span>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="relative mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
				<div className="grid gap-6 md:grid-cols-3">
					{highlights.map((item) => (
						<article
							key={item.title}
							className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
						>
							<h3 className="text-lg font-extrabold text-slate-900">{item.title}</h3>
							<p className="mt-3 text-sm leading-7 text-slate-600">
								{item.description}
							</p>
						</article>
					))}
				</div>
			</section>

			<section className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-6 sm:px-6 lg:px-8 lg:pb-16">
				<div className="rounded-3xl border border-cyan-200 bg-cyan-50 p-6 sm:p-8">
					<h2 className="text-2xl font-extrabold text-slate-900">
						What You Can Do With ReqGen
					</h2>
					<p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
						From initial discovery to implementation planning, ReqGen helps you
						standardize and speed up requirement workflows.
					</p>

					<div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{capabilities.map((capability) => (
							<div
								key={capability}
								className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-700"
							>
								{capability}
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	)
}

export default About
