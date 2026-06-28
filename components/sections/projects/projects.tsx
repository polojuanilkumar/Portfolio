"use client";

import { projects } from "@/lib/projects";
import { motion } from "framer-motion";
import { modernVariants, StaggerContainer, StaggerItem } from "@/lib/modern-animations";
import { ExternalLink, ArrowRight } from "lucide-react";

export default function Projects() {
	return (
		<section id="projects" className="relative py-32 px-6 overflow-hidden">
			<div className="mx-auto max-w-6xl relative z-10">
				<StaggerContainer>
					{/* Section Header */}
					<motion.div className="text-center mb-20" variants={modernVariants.fadeInUp}>
						<motion.h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-primary">
							Featured Projects
						</motion.h2>
					</motion.div>

					{/* Projects Grid */}
					<div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
						{projects.map((project, index) => (
							<StaggerItem key={project.id}>
								<motion.div
									className="group relative rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 p-8 transition-all duration-50 h-full flex flex-col shadow-xl shadow-white/5"
									whileHover={{
										y: -8,
										boxShadow: "0 30px 60px rgba(139, 92, 246, 0.25)",
										transition: { duration: 0.05, ease: "easeOut" },
									}}
								>
									{/* Project Content */}
									<div className="flex flex-col h-full">
										<h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
										<p className="text-sm text-secondary mb-4 leading-relaxed flex-grow">
											{project.description}
										</p>

										{/* Tech Stack */}
										<div className="flex flex-wrap gap-2 mb-6">
											{project.techStack.map((tech: string) => (
												<span
													key={tech}
													className="px-3 py-1.5 text-xs rounded-full text-primary border border-white/30"
												>
													{tech}
												</span>
											))}
										</div>

										{/* Links */}
										<div className="flex gap-3 mt-auto">
											{project.links.live && (
												<a
													href={project.links.live}
													target="_blank"
													className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/10 text-primary border border-white/20 hover:bg-transparent hover:border-white/40 transition-all duration-50"
												>
													<span>View Live</span>
													<ArrowRight size={14} />
												</a>
											)}
											{project.links.github && (
												<a
													href={project.links.github}
													target="_blank"
													className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-primary border border-white/20 hover:bg-gray-800 hover:text-gray-600 transition-all duration-50"
												>
													<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
														<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.65.23 2.87.11 3.17.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.38-5.25 5.67.41.36.77 1.08.77 2.17v3.22c0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
													</svg>
												</a>
											)}
										</div>
									</div>
								</motion.div>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>
			</div>
		</section>
	);
}
