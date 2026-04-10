import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => {
	return (
		<span
			className={cn(
				"text-foreground inline-flex items-center gap-2",
				className,
			)}
		>
			<LogoIcon className="size-9" />
			<span className="text-base font-semibold tracking-[0.08em]">S-BUD</span>
		</span>
	);
};

export const LogoIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			viewBox="0 0 48 48"
			aria-hidden
			className={cn(className)}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				x="4"
				y="4"
				width="40"
				height="40"
				rx="12"
				fill="#111827"
				stroke="#374151"
			/>
			<path
				d="M12.5 23.5L24 13.5L35.5 23.5"
				stroke="#F59E0B"
				strokeWidth="2.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M17.5 22.5V34.5H30.5V22.5"
				stroke="#F59E0B"
				strokeWidth="2.75"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M24 27V34.5"
				stroke="#FCD34D"
				strokeWidth="2.75"
				strokeLinecap="round"
			/>
		</svg>
	);
};
