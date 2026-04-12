import { Button } from "@/components/ui/button";

export default function MobileStickyCTA() {
	return (
		<div className="pointer-events-none fixed inset-x-0 bottom-4 z-40 px-4 md:hidden">
			<div className="pointer-events-auto mx-auto max-w-md rounded-2xl border bg-background/95 p-2 backdrop-blur">
				<p className="text-muted-foreground px-2 py-1 text-center text-xs">
					Oddzwaniamy tego samego dnia
				</p>
				<Button
					nativeButton={false}
					render={<a href="tel:+48881665685" />}
					className="h-10 w-full"
				>
					<span>Zadzwoń teraz</span>
				</Button>
			</div>
		</div>
	);
}
