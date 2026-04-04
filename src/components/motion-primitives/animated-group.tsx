import { type MotionProps, motion, type Variants } from "motion/react";
import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type AnimatedGroupProps = {
	children: ReactNode;
	variants?: {
		container?: Variants;
		item?: Variants;
	};
} & HTMLAttributes<HTMLDivElement> &
	Omit<MotionProps, "variants">;

const defaultContainerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const defaultItemVariants: Variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 },
};

export function AnimatedGroup({
	children,
	className,
	variants,
	...props
}: AnimatedGroupProps) {
	const containerVariants = variants?.container || defaultContainerVariants;
	const itemVariants = variants?.item || defaultItemVariants;

	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={containerVariants}
			className={cn(className)}
			{...props}
		>
			{Array.isArray(children)
				? children.map((child, index) => (
						<motion.div key={index} variants={itemVariants}>
							{child}
						</motion.div>
					))
				: children}
		</motion.div>
	);
}
