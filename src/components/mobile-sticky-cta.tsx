import { Button } from "@/components/ui/button";

export default function MobileStickyCTA() {
	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
			<div className="pointer-events-auto mx-auto grid max-w-md grid-cols-2 gap-2 rounded-2xl border bg-background/95 p-2 backdrop-blur">
				<Button
					nativeButton={false}
					render={<a href="tel:+48881665685" />}
					className="h-10"
				>
					<span>Zadzwoń</span>
				</Button>
				<Button
					nativeButton={false}
					variant="outline"
					render={<a href="#contact" />}
					className="h-10"
				>
					<span>Napisz</span>
				</Button>
			</div>
		</div>
	);
}
