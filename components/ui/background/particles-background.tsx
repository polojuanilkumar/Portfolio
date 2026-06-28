"use client";

import { useCallback, useMemo } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

interface ParticlesBackgroundProps {
	className?: string;
}

export function ParticlesBackground({ className = "" }: ParticlesBackgroundProps) {
	const particlesInit = useCallback(async (engine: any) => {
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: any) => {
		// Optional: Handle particles loaded event
	}, []);

	const options = useMemo(
		() => ({
			background: {
				color: {
					value: "transparent",
				},
			},
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onHover: {
						enable: true,
						mode: "repulse",
					},
					resize: true,
				},
				modes: {
					push: {
						quantity: 3,
					},
					repulse: {
						distance: 150,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				links: {
					color: "#ffffff",
					distance: 100,
					enable: true,
					opacity: 0.03,
					width: 1,
				},
				move: {
					direction: "none" as const,
					enable: true,
					outModes: {
						default: "bounce" as const,
					},
					random: false,
					speed: 0.4,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					value: 80,
				},
				opacity: {
					value: 0.15,
				},
				shape: {
					type: "circle",
				},
				size: {
					value: { min: 1, max: 2 },
				},
			},
			detectRetina: true,
		}),
		[],
	);

	return (
		<div className={`fixed inset-0 -z-10 ${className}`}>
			<Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
		</div>
	);
}
