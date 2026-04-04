import {
	AnimatePresence,
	type MotionProps,
	motion,
	type Variants,
} from "motion/react";
import { type ElementType, type HTMLAttributes, useMemo } from "react";
import { cn } from "@/lib/utils";

type PresetType = "blur" | "fade-in-blur" | "scale" | "fade" | "slide";

type Per = "word" | "char" | "line";

type TextEffectProps = {
	children: string;
	per?: Per;
	as?: ElementType;
	preset?: PresetType;
	delay?: number;
	speedReveal?: number;
	speedSegment?: number;
	trigger?: boolean;
	onAnimationComplete?: () => void;
	segmentWrapperClassName?: string;
	containerClassName?: string;
} & HTMLAttributes<HTMLElement> &
	MotionProps;

const presetVariants: Record<PresetType, Variants> = {
	blur: {
		hidden: { opacity: 0, filter: "blur(12px)" },
		visible: { opacity: 1, filter: "blur(0px)" },
		exit: { opacity: 0, filter: "blur(12px)" },
	},
	"fade-in-blur": {
		hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
		visible: { opacity: 1, y: 0, filter: "blur(0px)" },
		exit: { opacity: 0, y: 20, filter: "blur(12px)" },
	},
	scale: {
		hidden: { opacity: 0, scale: 0.9 },
		visible: { opacity: 1, scale: 1 },
		exit: { opacity: 0, scale: 0.9 },
	},
	fade: {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
		exit: { opacity: 0 },
	},
	slide: {
		hidden: { opacity: 0, y: 20 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 20 },
	},
};

const AnimationComponent: React.FC<{
	segment: string;
	variants: Variants;
	per: Per;
	segmentWrapperClassName?: string;
}> = ({ segment, variants, per, segmentWrapperClassName }) => {
	const content =
		per === "line" ? (
			<motion.span variants={variants} className="block">
				{segment}
			</motion.span>
		) : per === "word" ? (
			<motion.span
				aria-hidden="true"
				variants={variants}
				className="inline-block whitespace-pre"
			>
				{segment}
			</motion.span>
		) : (
			<motion.span
				aria-hidden="true"
				variants={variants}
				className="inline-block whitespace-pre"
			>
				{segment}
			</motion.span>
		);

	if (!segmentWrapperClassName) return content;

	return (
		<span className={cn("inline-block", segmentWrapperClassName)}>
			{content}
		</span>
	);
};

export function TextEffect({
	children,
	per = "word",
	as = "p",
	preset = "fade-in-blur",
	delay = 0,
	speedReveal = 0.05,
	speedSegment = 0.3,
	trigger = true,
	onAnimationComplete,
	segmentWrapperClassName,
	className,
	...props
}: TextEffectProps) {
	const segments = useMemo(() => {
		if (per === "line") return children.split("\n");
		if (per === "word") return children.split(/(\s+)/);
		return children.split("");
	}, [children, per]);

	const MotionTag = motion.create(as as React.ElementType);
	const selectedVariants = presetVariants[preset];

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: speedReveal,
				delayChildren: delay,
			},
		},
		exit: {
			transition: {
				staggerChildren: speedReveal,
				staggerDirection: -1,
			},
		},
	};

	const itemVariants: Variants = {
		hidden: selectedVariants.hidden,
		visible: {
			...selectedVariants.visible,
			transition: {
				duration: speedSegment,
			},
		},
		exit: selectedVariants.exit,
	};

	return (
		<AnimatePresence mode="popLayout">
			{trigger && (
				<MotionTag
					initial="hidden"
					animate="visible"
					exit="exit"
					variants={containerVariants}
					onAnimationComplete={onAnimationComplete}
					className={className}
					aria-label={per === "line" ? undefined : children}
					{...props}
				>
					{segments.map((segment, index) => (
						<AnimationComponent
							key={`${per}-${index}-${segment}`}
							segment={segment}
							variants={itemVariants}
							per={per}
							segmentWrapperClassName={segmentWrapperClassName}
						/>
					))}
				</MotionTag>
			)}
		</AnimatePresence>
	);
}
