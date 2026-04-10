import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
	variant?: "default" | "outline";
};

const Card = ({ className, variant = "default", ...props }: CardProps) => {
	return (
		<div
			className={cn(
				"rounded-xl border shadow-sm",
				variant === "outline"
					? "border-input bg-transparent"
					: "bg-card text-card-foreground",
				className,
			)}
			{...props}
		/>
	);
};

export { Card };
