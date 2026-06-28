import { motion, Variants, MotionProps } from "framer-motion";
import { animations } from "./design-system";

// Modern animation variants
export const modernVariants = {
	// Fade and slide animations
	fadeInUp: {
		initial: { opacity: 0, y: 60 },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	fadeInDown: {
		initial: { opacity: 0, y: -60 },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	fadeInLeft: {
		initial: { opacity: 0, x: -60 },
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	fadeInRight: {
		initial: { opacity: 0, x: 60 },
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	// Scale animations
	scaleIn: {
		initial: { opacity: 0, scale: 0.8 },
		animate: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	scaleOut: {
		initial: { opacity: 1, scale: 1 },
		animate: {
			opacity: 0,
			scale: 0.8,
			transition: {
				duration: 0.4,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	// Stagger container animations
	staggerContainer: {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	staggerItem: {
		initial: { opacity: 0, y: 30 },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	// Hover animations
	hover: {
		whileHover: {
			scale: 1.05,
			transition: {
				duration: 0.08,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
		whileTap: {
			scale: 0.98,
			transition: {
				duration: 0.05,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	// Glow animations
	glow: {
		whileHover: {
			boxShadow: "0 0 30px rgba(139, 92, 246, 0.4)",
			transition: {
				duration: 0.08,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	// Slide animations for text
	slideInFromLeft: {
		initial: { opacity: 0, x: -100 },
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	slideInFromRight: {
		initial: { opacity: 0, x: 100 },
		animate: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
			},
		},
	},

	// Background animations
	float: {
		animate: {
			y: [-10, 10],
			transition: {
				duration: 3,
				repeat: Infinity,
				repeatType: "reverse" as const,
				ease: "easeInOut" as const,
			},
		},
	},

	pulse: {
		animate: {
			scale: [1, 1.05, 1],
			transition: {
				duration: 2,
				repeat: Infinity,
				repeatType: "reverse" as const,
				ease: "easeInOut" as const,
			},
		},
	},

	// Rotate animations
	rotate: {
		animate: {
			rotate: 360,
			transition: {
				duration: 20,
				repeat: Infinity,
				ease: "linear" as const,
			},
		},
	},
};

// Intersection observer hook for scroll animations
export const useScrollAnimation = (threshold = 0.1) => {
	return {
		initial: "initial",
		whileInView: "animate",
		viewport: { once: true, amount: threshold },
	};
};

// Modern motion wrapper component
export const ModernMotionWrapper: React.FC<{
	children: React.ReactNode;
	variants?: any;
	className?: string;
	delay?: number;
}> = ({ children, variants = modernVariants.fadeInUp, className = "", delay = 0 }) => {
	return (
		<motion.div
			className={className}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.2 }}
			variants={variants}
			transition={{ delay }}
		>
			{children}
		</motion.div>
	);
};

// Staggered animation wrapper
export const StaggerContainer: React.FC<{
	children: React.ReactNode;
	className?: string;
	staggerDelay?: number;
}> = ({ children, className = "", staggerDelay = 0.1 }) => {
	const staggerVariants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				staggerChildren: staggerDelay,
				delayChildren: 0.2,
			},
		},
	};

	return (
		<motion.div
			className={className}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true, amount: 0.1 }}
			variants={staggerVariants}
		>
			{children}
		</motion.div>
	);
};

// Staggered item wrapper
export const StaggerItem: React.FC<{
	children: React.ReactNode;
	className?: string;
	variants?: any;
}> = ({ children, className = "", variants = modernVariants.staggerItem }) => {
	return (
		<motion.div className={className} variants={variants}>
			{children}
		</motion.div>
	);
};

// Text animation component
export const AnimatedText: React.FC<{
	text: string;
	className?: string;
	delay?: number;
	animation?: keyof typeof modernVariants;
}> = ({ text, className = "", delay = 0, animation = "fadeInUp" }) => {
	const variants = modernVariants[animation as keyof typeof modernVariants];

	return (
		<motion.span
			className={className}
			initial="initial"
			whileInView="animate"
			viewport={{ once: true }}
			variants={variants}
			transition={{ delay }}
		>
			{text}
		</motion.span>
	);
};

// Counter animation utility
export const AnimatedCounter: React.FC<{
	from: number;
	to: number;
	duration?: number;
	className?: string;
}> = ({ from, to, duration = 2, className = "" }) => {
	return (
		<motion.span
			className={className}
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: true }}
		>
			<motion.span
				initial={{ scale: 0.5 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true }}
				transition={{ duration }}
			>
				{to}
			</motion.span>
		</motion.span>
	);
};

export default {
	modernVariants,
	useScrollAnimation,
	ModernMotionWrapper,
	StaggerContainer,
	StaggerItem,
	AnimatedText,
	AnimatedCounter,
};
