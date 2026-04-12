import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQs() {
	const faqItems = [
		{
			id: "item-1",
			question: "Jak długo trwa realizacja usługi?",
			answer:
				"Czas realizacji zależy od zakresu prac i technologii oraz typu usługi, jaki mamy wykonać. Każda usługa jest rozpatrywana indywidualnie i uzgadniana z oczekiwaniami klientów.",
		},
		{
			id: "item-2",
			question: "Czy pomagacie w formalnościach i dokumentacji?",
			answer:
				"Tak. Wspieramy klientów przy dokumentacji projektowej, uzgodnieniach oraz organizacji prac, tak aby cały proces był prostszy i przewidywalny.",
		},
		{
			id: "item-3",
			question: "Jak wygląda wycena i czy jest darmowa?",
			answer:
				"Pierwsza konsultacja i wstępna wycena są bezpłatne. Po ustaleniu szczegółów przygotowujemy szczegółowy kosztorys, aby od początku było jasne, co obejmuje realizacja.",
		},
		{
			id: "item-4",
			question: "Jakie usługi wykonujecie?",
			answer:
				"Realizujemy budowy domów, przebudowy, remonty generalne i wykończenia pod klucz. Podejmujemy się także pojedynczych etapów prac, np. elewacji, dachów czy instalacji. Zakres naszych usług jest bardzo szeroki.",
		},
		{
			id: "item-5",
			question: "Czy dajecie gwarancję na wykonane prace?",
			answer:
				"Tak. Prace odbieramy protokołem, a gwarancję i rękojmię realizujemy zgodnie z umową i Kodeksem cywilnym.",
		},
		{
			id: "item-6",
			question: "Na jakim terenie działacie?",
			answer:
				"Działamy głównie na terenie Małopolski. Po wcześniejszym uzgodnieniu realizujemy także wybrane zlecenia poza regionem.",
		},
		{
			id: "item-7",
			question: "Jak wygląda płatność i zaliczka?",
			answer:
				"Płatność realizujemy etapami, zgodnie z postępem prac i harmonogramem. W zależności od zakresu może być wymagana zaliczka na start i materiały.",
		},
		{
			id: "item-8",
			question: "Czy wystawiacie fakturę i jakie są widełki cen?",
			answer:
				"Tak, wystawiamy fakturę. Orientacyjne widełki cen podajemy po krótkiej konsultacji i analizie zakresu, aby wycena była realna i dopasowana do Twojej realizacji.",
		},
	];

	return (
		<section id="faq" className="py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
						Najczęstsze pytania
					</h2>
					<p className="text-muted-foreground mt-4 text-balance">
						Krótkie odpowiedzi na najczęstsze pytania dotyczące współpracy,
						wyceny i realizacji usług S-BUD.
					</p>
				</div>

				<div className="mx-auto mt-12 max-w-xl">
					<Accordion className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
						{faqItems.map((item) => (
							<AccordionItem
								key={item.id}
								value={item.id}
								className="border-dashed"
							>
								<AccordionTrigger className="cursor-pointer text-base hover:no-underline">
									{item.question}
								</AccordionTrigger>
								<AccordionContent>
									<p className="text-base">{item.answer}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<p className="text-muted-foreground mt-6 px-8">
						Nie znalazłeś odpowiedzi? Napisz do nas na{" "}
						<a
							href="mailto:rocky.swachta@gmail.com"
							className="text-primary font-medium hover:underline"
						>
							rocky.swachta@gmail.com
						</a>{" "}
						lub zadzwoń pod{" "}
						<a
							href="tel:+48881665685"
							className="text-primary font-medium hover:underline"
						>
							+48 881 665 685
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
