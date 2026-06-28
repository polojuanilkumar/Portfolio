"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { modernVariants } from "@/lib/modern-animations";
import { gradients } from "@/lib/design-system";

export function ContactForm() {
	const [loading, setLoading] = useState(false);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);

		// TODO: connect API later
		setTimeout(() => {
			alert("Message sent 🚀");
			setLoading(false);
			setFormData({ name: "", email: "", message: "" });
		}, 1000);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<motion.form
			onSubmit={handleSubmit}
			className="mt-12 space-y-6 max-w-2xl mx-auto"
			variants={modernVariants.fadeInUp}
		>
			{/* Name Input */}
			<motion.div className="relative" variants={modernVariants.fadeInUp} transition={{ delay: 0.1 }}>
				<input
					type="text"
					name="name"
					value={formData.name}
					onChange={handleInputChange}
					required
					placeholder="Your Name"
					className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-primary placeholder-text-secondary outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 text-base"
				/>
				<motion.div
					className="absolute left-6 top-1/2 text-xs text-purple-400 opacity-0"
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					Name
				</motion.div>
			</motion.div>

			{/* Email Input */}
			<motion.div className="relative" variants={modernVariants.fadeInUp} transition={{ delay: 0.2 }}>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleInputChange}
					required
					placeholder="Your Email"
					className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-primary placeholder-text-secondary outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 text-base"
				/>
				<motion.div
					className="absolute left-6 top-1/2 text-xs text-purple-400 opacity-0"
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3 }}
				>
					Email
				</motion.div>
			</motion.div>

			{/* Message Textarea */}
			<motion.div className="relative" variants={modernVariants.fadeInUp} transition={{ delay: 0.3 }}>
				<textarea
					name="message"
					value={formData.message}
					onChange={handleInputChange}
					required
					placeholder="Your Message"
					rows={5}
					className="w-full px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl text-primary placeholder-text-secondary outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 text-base resize-none"
				/>
				<motion.div
					className="absolute left-6 top-1/2 text-xs text-purple-400 opacity-0"
					initial={{ opacity: 0, y: -10 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
				>
					Message
				</motion.div>
			</motion.div>

			{/* Submit Button */}
			<motion.div variants={modernVariants.fadeInUp} transition={{ delay: 0.4 }}>
				<motion.button
					type="submit"
					disabled={loading}
					className="w-full relative px-8 py-4 font-semibold text-on-primary rounded-2xl overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
					style={{
						background: loading ? "linear-gradient(135deg, #666, #888)" : gradients.primary,
						boxShadow: loading ? "none" : "0 10px 30px rgba(139, 92, 246, 0.3)",
					}}
					whileHover={{ scale: loading ? 1 : 1.02 }}
					whileTap={{ scale: loading ? 1 : 0.98 }}
				>
					<span className="relative z-10">
						{loading ? (
							<motion.span
								className="flex items-center justify-center gap-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
							>
								<motion.div
									className="w-4 h-4 border-2 border-white/30 border-t-transparent rounded-full"
									animate={{ rotate: 360 }}
									transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
								/>
								Sending...
							</motion.span>
						) : (
							"Send Message"
						)}
					</span>

					{/* Button shine effect */}
					<motion.div
						className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
						initial={{ x: "-100%" }}
						whileHover={{ x: "100%" }}
						transition={{ duration: 0.6 }}
					/>
				</motion.button>
			</motion.div>
		</motion.form>
	);
}
