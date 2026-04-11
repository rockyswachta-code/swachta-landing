import { Star } from "lucide-react";
import { testimonials } from "@/data/site-content";

export default function TestimonialsSection() {
	return (
		<section id="opinie" className="py-16 md:py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-3xl font-semibold md:text-4xl">
						Opinie klientów
					</h2>
					<p className="text-muted-foreground mt-4">
						Zobacz, co mówią klienci po zakończonych realizacjach.
					</p>
				</div>

				<div className="mt-10 grid gap-4 md:grid-cols-3">
					{testimonials.map((item) => (
						<article key={item.name} className="bg-card rounded-2xl border p-5">
							<div className="flex gap-1 text-amber-500">
								<Star className="size-4 fill-current" />
								<Star className="size-4 fill-current" />
								<Star className="size-4 fill-current" />
								<Star className="size-4 fill-current" />
								<Star className="size-4 fill-current" />
							</div>
							<p className="mt-3 text-sm leading-relaxed">"{item.quote}"</p>
							<div className="mt-4 border-t pt-3">
								<p className="text-sm font-medium">{item.name}</p>
								<p className="text-muted-foreground text-xs">
									{item.location} · {item.service}
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
