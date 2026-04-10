import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactSection() {
	const [submitState, setSubmitState] = useState<
		"idle" | "sending" | "success" | "error"
	>("idle");

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setSubmitState("sending");

		const form = event.currentTarget;
		const formData = new FormData(form);
		const honey = formData.get("_honey");

		if (typeof honey === "string" && honey.length > 0) {
			setSubmitState("success");
			return;
		}

		try {
			const response = await fetch(
				"https://formsubmit.co/ajax/rocky.swachta@gmail.com",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
					},
					body: formData,
				},
			);

			if (!response.ok) {
				throw new Error("Błąd wysyłki formularza");
			}

			form.reset();
			setSubmitState("success");
		} catch {
			setSubmitState("error");
		}
	};

	return (
		<section id="contact" className="bg-background py-24">
			<div className="mx-auto max-w-3xl px-6">
				<div>
					<h2 className="text-balance font-serif text-4xl font-medium sm:text-5xl">
						Skontaktuj się z nami
					</h2>
					<p className="text-muted-foreground mt-4 max-w-md text-balance">
						Masz pytania? Chętnie Ci pomożemy. Napisz do nas, a odpowiemy tak
						szybko, jak to możliwe.
					</p>
				</div>

				<div className="mt-12 grid gap-8 md:grid-cols-5">
					<div className="space-y-6 md:col-span-2">
						<div>
							<p className="text-sm font-medium">Email</p>
							<a
								href="mailto:rocky.swachta@gmail.com"
								className="text-muted-foreground text-sm hover:text-primary"
							>
								rocky.swachta@gmail.com
							</a>
						</div>

						<div>
							<p className="text-sm font-medium">Telefon</p>
							<a
								href="tel:+48881665685"
								className="text-muted-foreground text-sm hover:text-primary"
							>
								+48 881 665 685
							</a>
						</div>

						<div>
							<p className="text-sm font-medium">Adres</p>
							<p className="text-muted-foreground text-sm">
								Trzebunia 305, 32-438 Polska
							</p>
						</div>

						<div>
							<p className="text-sm font-medium">Obszar działania</p>
							<p className="text-muted-foreground text-sm">
								Działamy głównie na terenie Małopolski
							</p>
						</div>
					</div>

					<Card variant="outline" className="md:col-span-3 p-6">
						<form onSubmit={handleSubmit} className="space-y-5">
							<input
								type="hidden"
								name="_subject"
								value="Nowa wiadomość z formularza S-BUD"
							/>
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="table" />
							<input
								type="text"
								name="_honey"
								className="hidden"
								tabIndex={-1}
								autoComplete="off"
							/>
							<div className="grid gap-4 md:grid-cols-2">
								<div className="space-y-2">
									<Label htmlFor="name" className="text-sm">
										Imię
									</Label>
									<Input
										type="text"
										id="name"
										name="name"
										placeholder="Twoje imię"
										required
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="email" className="text-sm">
										Email
									</Label>
									<Input
										type="email"
										id="email"
										name="email"
										placeholder="twoj@email.com"
										autoComplete="email"
										required
									/>
								</div>
							</div>

							<div className="space-y-2">
								<Label htmlFor="subject" className="text-sm">
									Temat
								</Label>
								<Input
									type="text"
									id="subject"
									name="Temat"
									placeholder="Jak możemy Ci pomóc?"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="message" className="text-sm">
									Wiadomość
								</Label>
								<Textarea
									id="message"
									name="Wiadomość"
									rows={4}
									placeholder="Opisz szczegółowo..."
									required
									className="min-h-28"
								/>
							</div>

							<Button className="w-full" disabled={submitState === "sending"}>
								{submitState === "sending"
									? "Wysyłanie..."
									: "Wyślij wiadomość"}
							</Button>

							{submitState === "success" && (
								<p className="text-sm text-emerald-600 dark:text-emerald-400">
									Dziękujemy! Wiadomość została wysłana.
								</p>
							)}
							{submitState === "error" && (
								<p className="text-sm text-destructive">
									Nie udało się wysłać formularza. Spróbuj ponownie albo
									zadzwoń.
								</p>
							)}
						</form>
					</Card>
				</div>
			</div>
		</section>
	);
}
