import { ArrowRight } from "lucide-react";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";

const transitionVariants = {
	item: {
		hidden: {
			opacity: 0,
			filter: "blur(12px)",
			y: 12,
		},
		visible: {
			opacity: 1,
			filter: "blur(0px)",
			y: 0,
			transition: {
				type: "spring" as const,
				bounce: 0.3,
				duration: 1.5,
			},
		},
	},
};

const services = [
	"Malowanie",
	"Szpachlowanie",
	"Meblowanie",
	"Meble na wymiar",
	"Płytki",
	"Złota rączka",
	"Spawanie",
	"Elektryka",
	"Ciesielstwo",
	"Hydraulika",
	"Dekarstwo",
	"Prace ziemne",
	"Stolarstwo",
	"Mycie dachów",
	"Mycie kostki",
	"Wiele innych",
];

const realizationPhoto = "/realizacje/realizacja-1.jpg";
const realizationFallback =
	"https://images.unsplash.com/photo-1504307651254-35680f356df?auto=format&fit=crop&w=1600&q=80";

export default function HeroSection() {
	return (
		<>
			<HeroHeader />
			<main className="overflow-hidden">
				<div
					aria-hidden
					className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
				>
					<div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
					<div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
					<div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
				</div>
				<section id="oferta">
					<div className="relative pt-24 md:pt-36">
						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											delayChildren: 1,
										},
									},
								},
								item: {
									hidden: {
										opacity: 0,
										y: 20,
									},
									visible: {
										opacity: 1,
										y: 0,
										transition: {
											type: "spring" as const,
											bounce: 0.3,
											duration: 2,
										},
									},
								},
							}}
							className="mask-b-from-35% mask-b-to-90% absolute inset-0 top-56 -z-20 lg:top-32"
						>
							<img
								src="https://ik.imagekit.io/lrigu76hy/tailark/night-background.jpg?updatedAt=1745733451120"
								alt="background"
								className="hidden size-full dark:block"
								width="3276"
								height="4095"
							/>
						</AnimatedGroup>

						<div
							aria-hidden
							className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"
						/>

						<div className="mx-auto max-w-7xl px-6">
							<div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
								<AnimatedGroup variants={transitionVariants}>
									<a
										href="#contact"
										className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
									>
										<span className="text-foreground text-sm">
											Nowoczesne rozwiązania budowlane
										</span>
										<span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700" />

										<div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
											<div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
												<span className="flex size-6">
													<ArrowRight className="m-auto size-3" />
												</span>
												<span className="flex size-6">
													<ArrowRight className="m-auto size-3" />
												</span>
											</div>
										</div>
									</a>
								</AnimatedGroup>

								<TextEffect
									preset="fade-in-blur"
									speedSegment={0.3}
									as="h1"
									className="mx-auto mt-8 max-w-4xl text-balance text-5xl font-semibold md:text-7xl lg:mt-16 xl:text-[5.25rem]"
								>
									Budujemy solidnie. Wykańczamy z dbałością.
								</TextEffect>
								<TextEffect
									per="line"
									preset="fade-in-blur"
									speedSegment={0.3}
									delay={0.5}
									as="p"
									className="mx-auto mt-8 max-w-2xl text-balance text-lg"
								>
									S-BUD to ekipa, która prowadzi inwestycje od stanu surowego po
									gotowe wnętrza. Terminowo, przejrzyście i bez kompromisów
									jakościowych. Działamy głównie na terenie Małopolski i
									współpracujemy z wieloma sprawdzonymi specjalistami:
									hydraulikami, dekarzami, cieślami, elektrykami, operatorami
									prac ziemnych oraz stolarzami - i nie tylko. Przygotujemy
									rozwiązanie szyte na miarę twojej potrzeby.
								</TextEffect>

								<div className="mx-auto mt-8 max-w-3xl">
									<p className="text-muted-foreground text-sm font-medium">
										Wykonujemy m.in.:
									</p>
									<ul className="mt-3 flex flex-wrap justify-center gap-2">
										{services.map((service) => (
											<li
												key={service}
												className="bg-muted text-foreground rounded-full border px-3 py-1 text-sm"
											>
												{service}
											</li>
										))}
									</ul>
								</div>

								<AnimatedGroup
									variants={{
										container: {
											visible: {
												transition: {
													staggerChildren: 0.05,
													delayChildren: 0.75,
												},
											},
										},
										...transitionVariants,
									}}
									className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
								>
									<div className="bg-foreground/10 rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5">
										<Button
											size="lg"
											nativeButton={false}
											className="rounded-xl px-5 text-base"
											render={<a href="#contact" />}
										>
											<span className="text-nowrap">Umow konsultacje</span>
										</Button>
									</div>
									<Button
										size="lg"
										variant="ghost"
										nativeButton={false}
										className="h-10.5 rounded-xl px-5"
										render={<a href="#faq" />}
									>
										<span className="text-nowrap">Zobacz pytania</span>
									</Button>
								</AnimatedGroup>
							</div>
						</div>

						<AnimatedGroup
							variants={{
								container: {
									visible: {
										transition: {
											staggerChildren: 0.05,
											delayChildren: 0.75,
										},
									},
								},
								...transitionVariants,
							}}
						>
							<div
								id="realizacje"
								className="mask-b-from-55% relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20"
							>
								<div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1">
									<img
										className="bg-background aspect-[15/8] relative rounded-2xl w-full"
										src={realizationPhoto}
										onError={(event) => {
											event.currentTarget.onerror = null;
											event.currentTarget.src = realizationFallback;
										}}
										alt="Realizacja poddasza - S-BUD, Małopolska"
										width="1600"
										height="900"
									/>
									<p className="text-muted-foreground mt-3 px-1 text-sm">
										Realizacja: adaptacja poddasza, Małopolska
									</p>
								</div>
							</div>
						</AnimatedGroup>
					</div>
				</section>
			</main>
		</>
	);
}
