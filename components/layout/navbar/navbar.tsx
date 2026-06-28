"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { gradients } from "@/lib/design-system";

export function Navbar() {
	const { scrollY, direction } = useScroll();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const isScrolled = scrollY > 10;
	const isHidden = direction === "down" && scrollY > 80;

	// Close mobile menu when scrolling
	useEffect(() => {
		if (isScrolled) {
			setIsMobileMenuOpen(false);
		}
	}, [isScrolled]);

	const navItems = [
		{ name: "About", href: "#about" },
		{ name: "Experience", href: "#experience" },
		{ name: "Projects", href: "#projects" },
		{ name: "Skills", href: "#skills" },
		{ name: "Contact", href: "#contact" },
	];

	const mobileMenuVariants = {
		initial: { opacity: 0, y: -20 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: -20 },
	};

	const navItemVariants = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
	};

	return (
		<>
			<motion.header
				className={cn(
					"fixed top-0 left-0 w-full z-50 transition-all duration-300",
					isHidden && "-translate-y-full",
					isScrolled && "backdrop-blur-xl bg-slate-900/80 border-b border-white/10",
				)}
				initial={{ y: -100 }}
				animate={{ y: 0 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				<div className="mx-auto max-w-7xl px-6 py-4">
					<div className="flex items-center justify-between">
						{/* Logo */}
						<motion.a
							href="#"
							className="group flex items-center gap-2"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
								<span className="text-on-primary font-bold text-sm">A</span>
							</div>
							<span className="text-lg font-semibold text-primary group-hover:text-purple-400 transition-colors">
								Anil Poloju
							</span>
						</motion.a>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center gap-8">
							{navItems.map((item, index) => (
								<motion.button
									key={item.name}
									onClick={(e) => {
										e.preventDefault();
										const element = document.querySelector(item.href);
										if (element) {
											element.scrollIntoView({ behavior: "smooth" });
										}
									}}
									className="relative text-sm font-medium text-secondary hover:text-primary transition-colors py-2"
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ y: -2 }}
								>
									{item.name}
									<motion.span
										className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
										initial={{ scaleX: 0 }}
										whileHover={{ scaleX: 1 }}
										transition={{ duration: 0.3 }}
									/>
								</motion.button>
							))}
						</nav>

						{/* Mobile Menu Button */}
						<motion.button
							className="md:hidden relative w-10 h-10 flex items-center justify-center"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							<div className="w-6 h-5 relative">
								<span
									className={cn(
										"absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300",
										isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
									)}
								/>
								<span
									className={cn(
										"absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300",
										isMobileMenuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2",
									)}
								/>
								<span
									className={cn(
										"absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300",
										isMobileMenuOpen
											? "top-1/2 -translate-y-1/2 -rotate-45"
											: "top-full -translate-y-full",
									)}
								/>
							</div>
						</motion.button>
					</div>
				</div>
			</motion.header>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						className="fixed top-16 left-0 right-0 bottom-0 z-40 md:hidden"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						transition={{ duration: 0.3 }}
					>
						{/* Menu Panel */}
						<motion.div
							className="w-full h-full bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
							variants={mobileMenuVariants}
							initial="initial"
							animate="animate"
							exit="exit"
							transition={{ duration: 0.3, ease: "easeOut" }}
						>
							<div className="flex flex-col p-6 h-full">
								{/* Navigation Items */}
								<nav className="flex flex-col gap-6">
									{navItems.map((item, index) => (
										<motion.button
											key={item.name}
											onClick={(e) => {
												e.preventDefault();
												const element = document.querySelector(item.href);
												if (element) {
													element.scrollIntoView({ behavior: "smooth" });
												}
												setIsMobileMenuOpen(false);
											}}
											className="text-lg font-medium text-secondary hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-white/10 text-left"
											variants={navItemVariants}
											initial="initial"
											animate="animate"
											transition={{ delay: index * 0.1 }}
											whileHover={{ x: 10 }}
										>
											{item.name}
										</motion.button>
									))}
								</nav>

								{/* Mobile CTA */}
								<motion.div
									className="mt-auto"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5 }}
								>
									<motion.button
										onClick={(e) => {
											e.preventDefault();
											const element = document.querySelector("#contact");
											if (element) {
												element.scrollIntoView({ behavior: "smooth" });
											}
											setIsMobileMenuOpen(false);
										}}
										className="w-full py-4 text-center font-semibold text-on-primary rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Let's Talk
									</motion.button>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
