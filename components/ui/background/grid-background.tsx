import { ParticlesBackground } from "./particles-background";

export function GridBackground() {
	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			{/* Dark subtle background */}
			<div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

			{/* Particles */}
			<ParticlesBackground />
		</div>
	);
}
