import { Button } from "@/components/ui/button";

export default function CTASection() {
	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-6">
				<div className="bg-card rounded-3xl border px-6 py-10 text-center md:px-10">
					<h2 className="text-balance text-3xl font-semibold md:text-4xl">
						Darmowa wycena w 24h
					</h2>
					<p className="text-muted-foreground mx-auto mt-4 max-w-2xl">
						Napisz lub zadzwoń. Przygotujemy propozycję dopasowaną do Twoich
						potrzeb i zakresu prac.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-3">
						<Button
							size="lg"
							nativeButton={false}
							render={<a href="#contact" />}
						>
							<span>Wyślij zapytanie</span>
						</Button>
						<Button
							size="lg"
							variant="outline"
							nativeButton={false}
							render={<a href="tel:+48881665685" />}
						>
							<span>Zadzwoń teraz</span>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
