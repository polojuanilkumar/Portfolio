"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { modernVariants, ModernMotionWrapper } from "@/lib/modern-animations";
import { colors, gradients, typography } from "@/lib/design-system";
import { FileText, Mail } from "lucide-react";

export function Hero() {
	return (
		<section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
			{/* Floating elements */}
			<motion.div
				className="absolute top-20 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
				animate={{
					x: [0, 100, 0],
					y: [0, -50, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute top-40 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
				animate={{
					x: [0, -80, 0],
					y: [0, 60, 0],
				}}
				transition={{
					duration: 15,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>
			<motion.div
				className="absolute bottom-20 left-1/3 w-28 h-28 bg-pink-500/20 rounded-full blur-xl"
				animate={{
					x: [0, 60, 0],
					y: [0, -40, 0],
				}}
				transition={{
					duration: 18,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			/>

			<ModernMotionWrapper variants={modernVariants.fadeInUp}>
				<div className="text-center max-w-5xl relative z-10">
					{/* Main heading */}
					<motion.h1
						className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.4 }}
					>
						<span className="text-xl md:text-2xl lg:text-3xl font-sans font-medium inline-block text-secondary mb-3">
							Hello! I'm
						</span>
						<br />
						<span className="bg-linear-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
							Anil Poloju
						</span>
					</motion.h1>

					{/* Subtitle with typing animation */}
					<motion.div
						className="text-xl md:text-2xl text-secondary mb-12 h-8"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						<TypeAnimation
							sequence={[
								".NET Software Engineer",
								2000,
								"Building enterprise ASP.NET applications",
								2000,
								"Delivering Web API, ADO.NET & EF solutions",
								2000,
								"Optimizing SQL Server data workflows",
								2000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
							className="font-light"
						/>
					</motion.div>

					{/* CTA buttons */}
					<motion.div
						className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1 }}
					>
						<motion.a
							href="https://drive.google.com/file/d/1MNzMhC-Fq4qyOS1otso5HdAbcWznXYsb/view"
							target="_blank"
							className="group relative px-10 py-5 text-lg font-semibold text-on-primary rounded-xl overflow-hidden transition-all duration-50"
							style={{
								background: "linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)",
								boxShadow: "0 4px 15px rgba(124, 58, 237, 0.3)",
							}}
							whileHover={{ y: -2, boxShadow: "0 8px 25px rgba(124, 58, 237, 0.4)" }}
							whileTap={{ y: -2 }}
						>
							<span className="relative z-10 flex items-center gap-2">
								<FileText className="w-5 h-5" />
								View Resume
							</span>
							<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-50" />
						</motion.a>

						<motion.button
							onClick={(e) => {
								e.preventDefault();
								const element = document.querySelector("#contact");
								if (element) {
									element.scrollIntoView({ behavior: "smooth" });
								}
							}}
							className="px-10 py-5 text-lg font-semibold text-primary rounded-xl border-2 border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-50"
							whileHover={{ y: -2, boxShadow: "0 15px 40px rgba(255, 255, 255, 0.2)" }}
							whileTap={{ y: -2 }}
						>
							<span className="flex items-center gap-2">
								<Mail className="w-5 h-5" />
								Get In Touch
							</span>
						</motion.button>
					</motion.div>
				</div>
			</ModernMotionWrapper>
		</section>
	);
}
