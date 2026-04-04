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
			question: "Jak długo trwa wysyłka?",
			answer:
				"Standardowa wysyłka trwa 3-5 dni roboczych, w zależności od lokalizacji. Opcje ekspresowej wysyłki są dostępne przy kasie dla dostawy w 1-2 dni robocze.",
		},
		{
			id: "item-2",
			question: "Jakie metody płatności akceptujecie?",
			answer:
				"Akceptujemy wszystkie główne karty kredytowe (Visa, Mastercard, American Express), PayPal, Apple Pay i Google Pay. Dla klientów biznesowych oferujemy również opcje faktury.",
		},
		{
			id: "item-3",
			question: "Czy mogę zmienić lub anulować zamówienie?",
			answer:
				"Możesz zmodyfikować lub anulować zamówienie w ciągu 1 godziny od złożenia. Po tym czasie skontaktuj się z naszym zespołem obsługi klienta, który pomoże Ci wprowadzić zmiany.",
		},
		{
			id: "item-4",
			question: "Czy wysyłacie międzynarodowo?",
			answer:
				"Tak, wysyłamy do ponad 50 krajów na całym świecie. Wysyłka międzynarodowa zwykle trwa 7-14 dni roboczych. Dodatkowe opłaty celne mogą obowiązywać w zależności od przepisów importowych Twojego kraju.",
		},
		{
			id: "item-5",
			question: "Jaka jest polityka zwrotów?",
			answer:
				"Oferujemy 30-dniową politykę zwrotów dla większości produktów. Produkty muszą być w oryginalnym stanie z przyczepionymi metkami. Niektóre specjalistyczne produkty mogą mieć różne warunki zwrotu, które będą podane na stronie produktu.",
		},
	];

	return (
		<section className="py-16 md:py-24">
			<div className="mx-auto max-w-5xl px-4 md:px-6">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">
						Częste pytania
					</h2>
					<p className="text-muted-foreground mt-4 text-balance">
						Szybkie i kompleksowe odpowiedzi na najczęściej zadawane pytania
						dotyczące naszej platformy, usług i funkcji.
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
						Nie możesz znaleźć tego, czego szukasz? Skontaktuj się z naszym{" "}
						<a href="#" className="text-primary font-medium hover:underline">
							zespołem obsługi klienta
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}
