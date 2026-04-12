import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
	{ name: "Oferta", href: "#oferta" },
	{ name: "Realizacje", href: "#portfolio" },
	{ name: "Opinie", href: "#opinie" },
	{ name: "Jak działamy", href: "#process" },
	{ name: "Kontakt", href: "#contact" },
];

export const HeroHeader = () => {
	const [menuState, setMenuState] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [isCallModalOpen, setIsCallModalOpen] = useState(false);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		if (!isCallModalOpen) return;

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "Escape") {
				setIsCallModalOpen(false);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [isCallModalOpen]);

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
			<header>
				<nav
					data-state={menuState ? "active" : undefined}
					className="fixed z-20 w-full px-2"
				>
					<div
						className={cn(
							"mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
							isScrolled &&
								"bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5",
						)}
					>
						<div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
							<div className="flex w-full justify-between lg:w-auto">
								<a
									href="/"
									aria-label="home"
									className="flex items-center space-x-2"
								>
									<Logo />
								</a>

								<button
									onClick={() => setMenuState(!menuState)}
									aria-label={menuState ? "Zamknij menu" : "Otwórz menu"}
									className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
									type="button"
								>
									<Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
									<X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
								</button>
							</div>

							<div className="absolute inset-0 m-auto hidden size-fit lg:block">
								<ul className="flex gap-8 text-sm">
									{menuItems.map((item, index) => (
										<li key={index}>
											<a
												href={item.href}
												className="text-muted-foreground hover:text-accent-foreground block duration-150"
											>
												<span>{item.name}</span>
											</a>
										</li>
									))}
								</ul>
							</div>

							<div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
								<div className="lg:hidden">
									<ul className="space-y-6 text-base">
										{menuItems.map((item, index) => (
											<li key={index}>
												<a
													href={item.href}
													className="text-muted-foreground hover:text-accent-foreground block duration-150"
												>
													<span>{item.name}</span>
												</a>
											</li>
										))}
									</ul>
								</div>
								<div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
									<Button
										variant="outline"
										size="sm"
										className={cn(isScrolled && "lg:hidden")}
										onClick={() => setIsCallModalOpen(true)}
									>
										<span>Zadzwoń</span>
									</Button>
									<Button
										size="sm"
										nativeButton={false}
										className={cn(isScrolled && "lg:hidden")}
										render={<a href="#process" />}
									>
										<span>Proces</span>
									</Button>
									<Button
										size="sm"
										nativeButton={false}
										className={cn(isScrolled ? "lg:inline-flex" : "hidden")}
										render={<a href="#contact" />}
									>
										<span>Darmowa wycena</span>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</header>

			{isCallModalOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
					onClick={() => setIsCallModalOpen(false)}
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
							<Button variant="ghost" onClick={() => setIsCallModalOpen(false)}>
								<span>Zamknij</span>
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};
