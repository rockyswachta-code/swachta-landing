import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { serviceArea } from "@/data/site-content";

const mapsEmbedSrc =
	"https://www.google.com/maps?q=Trzebunia%20305%2C%2032-438&z=10&output=embed";
const mapsOpenUrl =
	"https://www.google.com/maps/search/?api=1&query=Trzebunia+305%2C+32-438";

export default function ServiceAreaSection() {
	return (
		<section id="obszar" className="py-16 md:py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="grid gap-8 lg:grid-cols-2">
					<div>
						<h2 className="text-balance text-3xl font-semibold md:text-4xl">
							Obszar działania
						</h2>
						<p className="text-muted-foreground mt-4 max-w-xl">
							Działamy głównie na terenie Małopolski. Dojazd i zakres prac
							ustalamy indywidualnie na etapie wyceny.
						</p>

						<div className="mt-6 flex flex-wrap gap-2">
							{serviceArea.map((city) => (
								<span
									key={city}
									className="bg-muted rounded-full border px-3 py-1 text-sm"
								>
									{city}
								</span>
							))}
						</div>
					</div>

					<div className="bg-card rounded-2xl border p-3">
						<div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm">
							<MapPin className="size-4" />
							Małopolska
						</div>
						<div className="overflow-hidden rounded-xl border">
							<iframe
								title="Mapa obszaru działania S-BUD"
								src={mapsEmbedSrc}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
								className="h-[320px] w-full"
							/>
						</div>
						<div className="mt-3 flex justify-end">
							<Button
								size="sm"
								variant="outline"
								nativeButton={false}
								render={
									<a href={mapsOpenUrl} target="_blank" rel="noreferrer" />
								}
							>
								<span>Otwórz mapę Google</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
