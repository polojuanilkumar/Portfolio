"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project }: { project: any }) {
	const [open, setOpen] = useState(false);

	return (
		<div
			className={cn(
				"rounded-2xl border border-white/10",
				"bg-white/5 backdrop-blur-xl p-6",
				"transition-all duration-300",
				"hover:border-white/20 hover:-translate-y-1",
			)}
		>
			{/* Header */}
			<div onClick={() => setOpen(!open)} className="cursor-pointer flex items-start justify-between">
				<div>
					<h3 className="text-xl font-semibold text-primary">{project.title}</h3>
					<p className="mt-2 text-sm text-secondary">{project.tagline}</p>
				</div>

				<ChevronDown className={cn("transition-transform duration-300", open && "rotate-180")} />
			</div>

			{/* Always Visible */}
			<ul className="mt-4 space-y-2 text-sm text-secondary">
				{project.highlights.slice(0, 2).map((item: string, i: number) => (
					<li key={i}>• {item}</li>
				))}
			</ul>

			{/* Expandable Content */}
			<AnimatePresence initial={false}>
				{open && (
					<motion.div
						key="content"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="overflow-hidden"
					>
						{/* Description */}
						<p className="mt-4 text-sm text-secondary">{project.description}</p>

						{/* Full Highlights */}
						<ul className="mt-4 space-y-2 text-sm text-secondary">
							{project.highlights.map((item: string, i: number) => (
								<li key={i}>• {item}</li>
							))}
						</ul>

						{/* Tech Stack */}
						<div className="mt-4 flex flex-wrap gap-2">
							{project.techStack.map((tech: string) => (
								<span key={tech} className="text-xs px-2 py-1 rounded-md">
									{tech}
								</span>
							))}
						</div>

						{/* Links */}
						<div className="mt-6 flex gap-4 text-secondary">
							{project.links.github && (
								<a href={project.links.github} target="_blank">
									<svg
										viewBox="0 0 24 24"
										fill="currentColor"
										className="w-6 h-6 text-gray-400 hover:text-gray-200 transition-colors"
									>
										<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.65.23 2.87.11 3.17.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.38-5.25 5.67.41.36.77 1.08.77 2.17v3.22c0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
									</svg>
								</a>
							)}
							{project.links.live && (
								<a href={project.links.live} target="_blank">
									<ExternalLink size={18} />
								</a>
							)}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
