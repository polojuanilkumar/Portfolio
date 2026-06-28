import { Navbar } from "@/components/layout/navbar/navbar";
import { ParticlesBackground } from "@/components/ui/background/particles-background";
import { Hero } from "@/components/sections/hero/hero";
import { About } from "@/components/sections/about/about";
import Projects from "@/components/sections/projects/projects";
import { Experience } from "@/components/sections/experience/experience";
import { Contact } from "@/components/sections/contact/contact";
import { Skills } from "@/components/sections/skills/skills";

export default function Home() {
	return (
		<main className="relative">
			{/* Dark background */}
			<div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

			{/* Particles */}
			<ParticlesBackground />

			<Navbar />
			<Hero />
			<About />
			<Experience />
			<Projects />
			<Skills />
			<Contact />
		</main>
	);
}
