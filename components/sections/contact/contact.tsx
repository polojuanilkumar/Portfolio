"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { modernVariants } from "@/lib/modern-animations";
import { Phone, Mail, Send } from "lucide-react";
import { ClientOnly } from "@/components/ui/client-only/client-only";

// Formspree configuration - Replace with your actual form ID (just the ID, not full URL)
const FORMSPREE_FORM_ID = "xkopvdpr";

interface FormData {
	name: string;
	email: string;
	message: string;
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

export function Contact() {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		// Name validation
		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		} else if (formData.name.trim().length < 2) {
			newErrors.name = "Name must be at least 2 characters";
		}

		// Email validation
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Please enter a valid email address";
		}

		// Message validation
		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Message must be at least 10 characters";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error for this field when user starts typing
		if (errors[name as keyof FormErrors]) {
			setErrors((prev) => ({ ...prev, [name]: undefined }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault(); // Prevent default form submission

		if (!validateForm()) {
			return; // Stop if validation fails
		}

		setIsSubmitting(true);

		try {
			// Check if Formspree is configured
			if (!FORMSPREE_FORM_ID) {
				console.warn("Formspree not configured. Please set your Formspree form ID.");
				// Fallback to simulation for demo
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} else {
				// Send form using Formspree
				const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(formData),
				});

				if (!response.ok) {
					throw new Error("Form submission failed");
				}
			}

			// Show success state
			setIsSubmitted(true);

			// Clear form fields
			setFormData({
				name: "",
				email: "",
				message: "",
			});

			// Reset success state after 3 seconds
			setTimeout(() => {
				setIsSubmitted(false);
			}, 3000);
		} catch (error) {
			console.error("Error submitting form:", error);
			// You could show an error message to user here
		} finally {
			setIsSubmitting(false);
		}
	};

	const resetForm = () => {
		setFormData({
			name: "",
			email: "",
			message: "",
		});
		setErrors({});
		setIsSubmitted(false);
	};

	return (
		<section id="contact" className="relative py-32 px-6 overflow-hidden">
			<div className="mx-auto max-w-6xl relative z-10">
				{/* Section Header */}
				<motion.div className="text-center mb-20" variants={modernVariants.fadeInUp}>
					<motion.h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-primary">
						Get In Touch
					</motion.h2>
				</motion.div>

				{/* Two Column Layout */}
				<div className="grid lg:grid-cols-2 gap-16 items-start">
					{/* Left Column - Contact Info */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6 }}
					>
						{/* Let's Connect Section */}
						<div>
							<h3 className="text-2xl font-semibold text-primary mb-4">Let's Connect</h3>
							<p className="text-secondary leading-relaxed">
								Reach out for .NET, ASP.NET, Web API, and SQL Server project opportunities.
							</p>
						</div>

						{/* Phone Card */}
						<motion.div
							className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-50"
							whileHover={{ scale: 1.02, y: -4 }}
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
									<Phone className="w-6 h-6 text-primary" />
								</div>
								<div>
									<h4 className="text-lg font-medium text-primary mb-1">Phone</h4>
								<p className="text-secondary">
									<a href="tel:+918886845107" className="hover:underline">
										+91 88868 45107
									</a>
								</p>
							</div>
						</div>
						</motion.div>

						{/* Email Card */}
						<motion.div
							className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-50"
							whileHover={{ scale: 1.02, y: -4 }}
						>
							<div className="flex items-center gap-4">
								<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
									<Mail className="w-6 h-6 text-primary" />
								</div>
								<div>
									<h4 className="text-lg font-medium text-primary mb-1">Email</h4>
									<p className="text-secondary">
										<a href="mailto:polojuanilkumar2@gmail.com" className="hover:underline">
											polojuanilkumar25@gmail.com
										</a>
									</p>
								</div>
							</div>
						</motion.div>

						{/* Connect with me */}
						<div className="pt-4">
							<h4 className="text-lg font-medium text-primary mb-4">Connect with me</h4>
							<div className="flex gap-4">
								<motion.a
									href="https://github.com/polojuanilkumar"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-50 cursor-pointer"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-primary">
										<path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.74 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.27 1.2-3.07-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.17a11.1 11.1 0 0 1 5.82 0c2.22-1.48 3.2-1.17 3.2-1.17.63 1.65.23 2.87.11 3.17.75.8 1.2 1.82 1.2 3.07 0 4.41-2.69 5.38-5.25 5.67.41.36.77 1.08.77 2.17v3.22c0 .31.21.68.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
									</svg>
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/anil-kumar-poloju-460a95200"
									target="_blank"
									rel="noopener noreferrer"
									className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-50 cursor-pointer"
									whileHover={{ scale: 1.1, y: -2 }}
									whileTap={{ scale: 0.95 }}
								>
									<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
										<path d="M4.98 3.5C4.98 5 3.77 6.2 2.27 6.2 0.77 6.2-.44 5 -.44 3.5 -.44 2 0.77.8 2.27.8c1.5 0 2.71 1.2 2.71 2.7zM.24 8.98h4.07V24H.24zM7.98 8.98h3.9v2.05h.05c.54-1.03 1.86-2.12 3.83-2.12 4.1 0 4.86 2.7 4.86 6.2V24h-4.07v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24H7.98z" />
									</svg>
								</motion.a>
							</div>
						</div>
					</motion.div>

					{/* Right Column - Form */}
					<motion.div
						className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<ClientOnly
							fallback={
								<div className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-8">
									<div className="animate-pulse space-y-6">
										<div className="h-4 bg-white/10 rounded w-20"></div>
										<div className="h-12 bg-white/10 rounded"></div>
										<div className="h-4 bg-white/10 rounded w-20"></div>
										<div className="h-12 bg-white/10 rounded"></div>
										<div className="h-4 bg-white/10 rounded w-20"></div>
										<div className="h-32 bg-white/10 rounded"></div>
										<div className="h-12 bg-white/10 rounded"></div>
									</div>
								</div>
							}
						>
							{isSubmitted ? (
								/* Success Message */
								<motion.div
									className="text-center py-12"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.3 }}
								>
									<div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-green-500"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M5 13l4 4L19 7"
											/>
										</svg>
									</div>
									<h3 className="text-2xl font-semibold text-primary mb-2">Message Sent!</h3>
									<p className="text-secondary mb-6">
										Thank you for reaching out. I'll get back to you soon.
									</p>
									<motion.button
										onClick={resetForm}
										className="px-6 py-2 bg-white/10 border border-white/20 rounded-lg text-primary hover:bg-white/20 transition-all duration-50"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										Send Another Message
									</motion.button>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit} className="space-y-6">
									{/* Name Input */}
									<div>
										<label className="block text-primary font-medium mb-2">Name</label>
										<input
											type="text"
											name="name"
											value={formData.name}
											onChange={handleInputChange}
											placeholder="Enter your name"
											className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-primary placeholder-text-secondary focus:outline-none focus:bg-white/15 transition-all duration-50 ${
												errors.name
													? "border-red-500 focus:border-red-500"
													: "border-white/20 focus:border-white/40"
											}`}
											disabled={isSubmitting}
										/>
										{errors.name && (
											<motion.p
												className="mt-1 text-sm text-red-400"
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
											>
												{errors.name}
											</motion.p>
										)}
									</div>

									{/* Email Input */}
									<div>
										<label className="block text-primary font-medium mb-2">Email</label>
										<input
											type="email"
											name="email"
											value={formData.email}
											onChange={handleInputChange}
											placeholder="Enter your email"
											className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-primary placeholder-text-secondary focus:outline-none focus:bg-white/15 transition-all duration-50 ${
												errors.email
													? "border-red-500 focus:border-red-500"
													: "border-white/20 focus:border-white/40"
											}`}
											disabled={isSubmitting}
										/>
										{errors.email && (
											<motion.p
												className="mt-1 text-sm text-red-400"
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
											>
												{errors.email}
											</motion.p>
										)}
									</div>

									{/* Message Textarea */}
									<div>
										<label className="block text-primary font-medium mb-2">Message</label>
										<textarea
											name="message"
											value={formData.message}
											onChange={handleInputChange}
											placeholder="Enter your message"
											rows={5}
											className={`w-full px-4 py-3 bg-white/10 border rounded-lg text-primary placeholder-text-secondary focus:outline-none focus:bg-white/15 transition-all duration-50 resize-none ${
												errors.message
													? "border-red-500 focus:border-red-500"
													: "border-white/20 focus:border-white/40"
											}`}
											disabled={isSubmitting}
										/>
										{errors.message && (
											<motion.p
												className="mt-1 text-sm text-red-400"
												initial={{ opacity: 0, y: -10 }}
												animate={{ opacity: 1, y: 0 }}
											>
												{errors.message}
											</motion.p>
										)}
									</div>

									{/* Submit Button */}
									<motion.button
										type="submit"
										disabled={isSubmitting}
										className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-on-primary font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-50 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
										whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
										whileTap={!isSubmitting ? { scale: 0.98 } : {}}
									>
										{isSubmitting ? (
											<>
												<motion.div
													className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
													animate={{ rotate: 360 }}
													transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
												/>
												Sending...
											</>
										) : (
											<>
												Send Message
												<Send className="w-5 h-5" />
											</>
										)}
									</motion.button>
								</form>
							)}
						</ClientOnly>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
