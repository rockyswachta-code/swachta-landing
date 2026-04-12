import { useState } from "react";
import { beforeAfterItems } from "@/data/site-content";

type BeforeAfterItem = {
	title: string;
	location: string;
	beforeImage: string;
	afterImage: string;
	beforeFallback: string;
	afterFallback: string;
};

function BeforeAfterCard({ item }: { item: BeforeAfterItem }) {
	const [position, setPosition] = useState(50);

	return (
		<article className="bg-card rounded-2xl border p-4">
			<div className="mb-3 flex items-center justify-between">
				<h3 className="text-base font-semibold">{item.title}</h3>
				<span className="text-muted-foreground text-xs">{item.location}</span>
			</div>

			<div className="relative overflow-hidden rounded-xl border">
				<img
					src={item.beforeImage}
					onError={(event) => {
						event.currentTarget.onerror = null;
						event.currentTarget.src = item.beforeFallback;
					}}
					alt={`${item.title} - przed`}
					className="aspect-[4/3] w-full object-cover"
				/>
				<div
					className="absolute inset-y-0 left-0 overflow-hidden"
					style={{ width: `${position}%` }}
				>
					<img
						src={item.afterImage}
						onError={(event) => {
							event.currentTarget.onerror = null;
							event.currentTarget.src = item.afterFallback;
						}}
						alt={`${item.title} - po`}
						className="h-full w-full object-cover"
					/>
				</div>
				<div
					className="bg-primary/90 absolute inset-y-0 w-0.5"
					style={{ left: `${position}%` }}
				/>
				<div className="absolute left-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
					Przed
				</div>
				<div className="absolute right-3 top-3 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
					Po
				</div>
			</div>

			<div className="mt-3">
				<input
					type="range"
					min={0}
					max={100}
					value={position}
					onChange={(event) => setPosition(Number(event.target.value))}
					className="w-full"
					aria-label={`Suwak przed i po dla ${item.title}`}
				/>
			</div>
		</article>
	);
}

export default function BeforeAfterSection() {
	return (
		<section id="before-after" className="py-16 md:py-24">
			<div className="mx-auto max-w-6xl px-6">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-balance text-3xl font-semibold md:text-4xl">
						Przed i po
					</h2>
					<p className="text-muted-foreground mt-4">
						Porównaj efekty naszych realizacji i zobacz różnicę po zakończeniu
						prac.
					</p>
				</div>

				<div className="mt-10 grid gap-5 md:grid-cols-2">
					{beforeAfterItems.map((item) => (
						<BeforeAfterCard
							key={`${item.title}-${item.location}`}
							item={item}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
