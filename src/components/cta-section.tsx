import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		if (!isModalOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsModalOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isModalOpen]);

	const handleCopyNumber = async () => {
		try {
			await navigator.clipboard.writeText("+48 881 665 685");
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch {
			setCopied(false);
		}
	};

	return (
		<>
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
								onClick={() => setIsModalOpen(true)}
							>
								<span>Zadzwoń teraz</span>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{isModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
					onClick={() => setIsModalOpen(false)}
				>
					<div
						className="bg-card w-full max-w-md rounded-2xl border p-6"
						onClick={(event) => event.stopPropagation()}
					>
						<h3 className="text-xl font-semibold">Zadzwoń do S-BUD</h3>
						<p className="text-muted-foreground mt-2 text-sm">
							Najszybciej skontaktujesz się z nami telefonicznie.
						</p>
						<p className="mt-5 text-2xl font-bold tracking-wide">
							+48 881 665 685
						</p>

						<div className="mt-5 grid gap-2 sm:grid-cols-2">
							<Button
								nativeButton={false}
								render={<a href="tel:+48881665685" />}
							>
								<span>Zadzwoń teraz</span>
							</Button>
							<Button variant="outline" onClick={handleCopyNumber}>
								<span>Skopiuj numer</span>
							</Button>
						</div>

						{copied && (
							<p className="mt-3 text-sm text-emerald-600 dark:text-emerald-400">
								Skopiowano numer.
							</p>
						)}

						<div className="mt-4 flex justify-end">
							<Button variant="ghost" onClick={() => setIsModalOpen(false)}>
								<span>Zamknij</span>
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
