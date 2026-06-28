"use client";

import { motion } from "framer-motion";
import { modernVariants, StaggerContainer, StaggerItem } from "@/lib/modern-animations";

// Resume-aligned skills data
const skillsData = {
	dotnet: {
		title: ".NET Stack",
		icon: "🧩",
		description: "Core technologies from the resume",
		skills: [
			{ name: "C#.NET", icon: "🔷" },
			{ name: "ASP.NET MVC", icon: "🧱" },
			{ name: "ASP.NET Web API", icon: "🌐" },
			{ name: "ADO.NET", icon: "🗄️" },
			{ name: "Entity Framework", icon: "🧠" },
			{ name: "jQuery", icon: "⚙️" },
			{ name: "AJAX", icon: "🔄" },
			{ name: "HTML/CSS", icon: "🎨" },
		],
	},
	data: {
		title: "Data & SQL",
		icon: "🗃️",
		description: "Database and query expertise",
		skills: [
			{ name: "SQL Server 2008", icon: "🛢️" },
			{ name: "T-SQL", icon: "📊" },
			{ name: "Stored Procedures", icon: "⚙️" },
			{ name: "Database Design", icon: "🧱" },
		],
	},
	delivery: {
		title: "Delivery & Engineering",
		icon: "🚀",
		description: "Enterprise application development focus",
		skills: [
			{ name: "Enterprise Web Applications", icon: "🏢" },
			{ name: "Legacy System Modernization", icon: "🔧" },
			{ name: "Requirement Analysis", icon: "🧩" },
			{ name: "Cross-team Collaboration", icon: "🤝" },
			{ name: "Production Support", icon: "🛠️" },
		],
	},
};

const SkillCard = ({ skill }: { skill: { name: string; icon: React.ReactNode } }) => {
	return (
		<motion.div
			className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 text-primary border border-white/10 backdrop-blur-lg cursor-pointer shadow-lg"
			whileHover={{
				y: -4,
				scale: 1.05,
				transition: { type: "spring", stiffness: 800, damping: 20 },
			}}
			whileTap={{ scale: 0.95 }}
			style={{ width: "fit-content" }}
		>
			<span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
		</motion.div>
	);
};

export function Skills() {
	return (
		<section id="skills" className="py-32 px-6 relative overflow-hidden">
			<div className="mx-auto max-w-6xl relative z-10">
				<StaggerContainer>
					{/* Section Header */}
					<motion.div className="text-center mb-20" variants={modernVariants.fadeInUp}>
						<motion.h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-primary">
						Skills & Expertise
					</motion.h2>
					<motion.p className="text-lg text-secondary max-w-2xl mx-auto">
						A focused toolkit built around .NET, enterprise web applications, SQL Server, and maintainable
						software delivery.
						</motion.p>
					</motion.div>

					{/* Skills Categories */}
					<div className="space-y-12">
						{Object.entries(skillsData).map(([category, data], categoryIndex) => (
							<StaggerItem key={category} className="space-y-6">
								{/* Category Header */}
								<motion.div
									className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
									variants={modernVariants.scaleIn}
									transition={{ delay: categoryIndex * 0.1 }}
								>
									<div className="text-4xl mb-3">{data.icon}</div>
									<h3 className="text-xl font-semibold text-primary mb-2">{data.title}</h3>
									<p className="text-sm text-secondary">{data.description}</p>
								</motion.div>

								{/* Skills Grid */}
								<div className="flex flex-wrap gap-3">
									{data.skills.map((skill, skillIndex) => (
										<SkillCard key={skill.name} skill={skill} />
									))}
								</div>
							</StaggerItem>
						))}
					</div>
				</StaggerContainer>
			</div>
		</section>
	);
}
