"use client";

import { experience } from "@/lib/experience";
import { modernVariants, StaggerContainer, StaggerItem } from "@/lib/modern-animations";
import { gradients } from "@/lib/design-system";
import { motion } from "framer-motion";

const ExperienceCard = ({ exp, index }: { exp: any; index: number }) => {
	return (
		<StaggerItem className="relative group">
			{/* Timeline dot */}
			<motion.div
				className="absolute left-0 top-8 w-4 h-4 rounded-full border-4 border-white bg-gradient-to-r from-purple-500 to-pink-500 z-10"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ delay: index * 0.1 }}
			/>

			{/* Connecting line */}
			<motion.div
				className="absolute left-2 top-12 w-0.5 h-full bg-gradient-to-b from-purple-500 to-pink-500"
				initial={{ height: 0 }}
				whileInView={{ height: "100%" }}
				transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
			/>

			{/* Content card */}
			<motion.div className="relative ml-12 pb-12" whileHover={{ x: 8 }} transition={{ duration: 0.05 }}>
				<motion.div
					className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-50"
					whileHover={{
						boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)",
						borderColor: "rgba(255, 255, 255, 0.2)",
					}}
				>
					{/* Header */}
					<div className="mb-4">
						<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
							<div>
								<h3 className="text-xl font-semibold text-primary mb-1">{exp.role}</h3>
								<motion.div
									className="flex items-center gap-2 text-purple-400"
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ delay: index * 0.1 + 0.3 }}
								>
									<span className="text-secondary">at</span>
									<span className="font-medium">{exp.company}</span>
								</motion.div>
							</div>

							<motion.div
								className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 self-start sm:self-auto"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								transition={{ delay: index * 0.1 + 0.4 }}
							>
								<span className="text-xs font-medium text-purple-300">{exp.period}</span>
							</motion.div>
						</div>
					</div>

					{/* Impact/achievements */}
					<motion.ul
						className="space-y-3 mb-6"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ delay: index * 0.1 + 0.5 }}
					>
						{exp.impact.map((item: string, i: number) => (
							<motion.li
								key={i}
								className="flex items-start gap-3 text-secondary"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ delay: index * 0.1 + 0.5 + i * 0.1 }}
							>
								<motion.div
									className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{ delay: index * 0.1 + 0.6 + i * 0.1 }}
								/>
								<span className="text-sm leading-relaxed">{item}</span>
							</motion.li>
						))}
					</motion.ul>

					{/* Tech stack */}
					<motion.div
						className="flex flex-wrap gap-2"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: index * 0.1 + 0.7 }}
					>
						{exp.tech.map((tech: string) => (
							<motion.span
								key={tech}
								className="px-3 py-1.5 text-xs rounded-full bg-white/10 border border-white/20 text-secondary hover:bg-white/20 transition-all duration-50"
								whileHover={{
									scale: 1.05,
									backgroundColor: "rgba(139, 92, 246, 0.2)",
									borderColor: "rgba(139, 92, 246, 0.4)",
								}}
							>
								{tech}
							</motion.span>
						))}
					</motion.div>

					{/* Hover gradient overlay */}
					<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-50 pointer-events-none" />
				</motion.div>
			</motion.div>
		</StaggerItem>
	);
};

export function Experience() {
	return (
		<section id="experience" className="relative py-32 px-6 overflow-hidden">
			<div className="mx-auto max-w-5xl relative z-10">
				<StaggerContainer>
					{/* Section Header */}
					<motion.div className="text-center mb-20" variants={modernVariants.fadeInUp}>
						<motion.h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-primary">
							Professional Journey
						</motion.h2>
						<motion.p className="text-lg text-secondary max-w-3xl mx-auto">
							Building and scaling real-world systems with focus on performance, reliability, and user
							impact. Every role contributed to growth and innovation.
						</motion.p>
					</motion.div>

					{/* Timeline */}
					<div className="relative">
						{experience.map((exp, index) => (
							<ExperienceCard key={index} exp={exp} index={index} />
						))}
					</div>
				</StaggerContainer>
			</div>
		</section>
	);
}
