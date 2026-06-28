import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: "--font-space-grotesk",
	weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
