import { processSteps } from "@/data/site-content";

export default function ProcessSection() {
	return (
		<section id="process" className="py-16 md:py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-3xl font-semibold md:text-4xl">
						Jak wygląda współpraca
					</h2>
					<p className="text-muted-foreground mt-4">
						Prosty proces, który daje Ci pełną kontrolę nad zakresem i budżetem.
					</p>
				</div>

				<div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
					{processSteps.map((step, index) => (
						<div key={step.title} className="bg-card rounded-2xl border p-5">
							<div className="text-primary text-xs font-semibold">
								KROK {index + 1}
							</div>
							<h3 className="mt-2 text-lg font-medium">{step.title}</h3>
							<p className="text-muted-foreground mt-2 text-sm leading-relaxed">
								{step.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
