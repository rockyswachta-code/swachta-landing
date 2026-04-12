import { portfolioItems } from "@/data/site-content";

export default function PortfolioSection() {
	return (
		<section id="portfolio" className="py-16 md:py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-3xl font-semibold md:text-4xl">
						Nasze realizacje
					</h2>
					<p className="text-muted-foreground mt-4">
						Poniżej przykładowe realizacje. W przyszłości możesz dodać kolejne
						zdjęcia bez zmian w układzie.
					</p>
				</div>

				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{portfolioItems.map((item) => (
						<article
							key={item.title}
							className="bg-card rounded-2xl border p-3"
						>
							<img
								src={item.image}
								onError={(event) => {
									event.currentTarget.onerror = null;
									event.currentTarget.src = item.fallback;
								}}
								alt={`${item.title} - ${item.location}`}
								className="aspect-[4/3] w-full rounded-xl object-cover"
							/>
							<div className="p-3 pb-2">
								<h3 className="text-base font-medium">{item.title}</h3>
								<p className="text-muted-foreground mt-1 text-sm">
									{item.location}
								</p>
								<div className="mt-3 space-y-2 border-t pt-3 text-sm">
									<p>
										<span className="font-medium">Zakres:</span> {item.scope}
									</p>
									<p>
										<span className="font-medium">Czas:</span> {item.duration}
									</p>
									<p className="text-muted-foreground leading-relaxed">
										<span className="text-foreground font-medium">Efekt:</span>{" "}
										{item.result}
									</p>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
