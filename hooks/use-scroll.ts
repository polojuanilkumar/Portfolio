"use client";

import { useEffect, useState } from "react";

export function useScroll() {
	const [scrollY, setScrollY] = useState(0);
	const [direction, setDirection] = useState<"up" | "down">("up");

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateScroll = () => {
			const current = window.scrollY;

			setDirection(current > lastScrollY ? "down" : "up");
			setScrollY(current);

			lastScrollY = current;
		};

		window.addEventListener("scroll", updateScroll, { passive: true });

		return () => window.removeEventListener("scroll", updateScroll);
	}, []);

	return { scrollY, direction };
}
