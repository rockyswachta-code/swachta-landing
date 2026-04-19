import { Button } from "@/components/ui/button";

const furnitureItems = [
	{
		title: "Stoły i blaty",
		description:
			"Solidne stoły i blaty z opalanego drewna, zabezpieczone pod codzienne użytkowanie.",
		image:
			"https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=1200&q=80",
	},
	{
		title: "Półki i zabudowy",
		description:
			"Półki ścienne i zabudowy na wymiar, dopasowane do wnętrza i stylu pomieszczenia.",
		image:
			"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
	},
	{
		title: "Elementy dekoracyjne",
		description:
			"Ławy, konsole i dodatki z charakterem, które podkreślają klimat naturalnego drewna.",
		image:
			"https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1200&q=80",
	},
];

export default function BurntWoodFurnitureSection() {
	return (
		<section id="meble-opalane" className="py-16 md:py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-3xl font-semibold md:text-4xl">
						Meble z opalanego drewna
					</h2>
					<p className="text-muted-foreground mt-4">
						Tworzymy trwałe i wyjątkowe realizacje z opalanego drewna - od
						funkcjonalnych mebli po elementy dekoracyjne i nie tylko.
					</p>
				</div>

				<div className="mt-10 grid gap-5 md:grid-cols-3">
					{furnitureItems.map((item) => (
						<article
							key={item.title}
							className="bg-card rounded-2xl border p-3"
						>
							<img
								src={item.image}
								alt={item.title}
								className="aspect-[4/3] w-full rounded-xl object-cover"
							/>
							<div className="p-3 pb-2">
								<h3 className="text-base font-medium">{item.title}</h3>
								<p className="text-muted-foreground mt-2 text-sm leading-relaxed">
									{item.description}
								</p>
							</div>
						</article>
					))}
				</div>

				<div className="mt-8 text-center">
					<Button size="lg" nativeButton={false} render={<a href="#contact" />}>
						<span>Zapytaj o wycenę mebli</span>
					</Button>
				</div>
			</div>
		</section>
	);
}
