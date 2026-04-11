import { motion } from "framer-motion";
import { heroData } from "@/data/hero";
import { FaArrowRight } from "react-icons/fa6";
import { FaDownload } from "react-icons/fa";
import { useEffect, useState } from "react";

export const HeroSection = () => {
	const [displayedLines, setDisplayedLines] = useState<string[]>([]);
	const [currentLine, setCurrentLine] = useState(0);
	const [currentText, setCurrentText] = useState("");

	// === TYPEWRITER EFFECT (REAL, bukan fake) ===
	useEffect(() => {
		if (currentLine >= heroData.typingLines.length) return;

		const line = heroData.typingLines[currentLine];
		let index = 0;

		const interval = setInterval(() => {
			setCurrentText(line.slice(0, index));
			index++;

			if (index > line.length) {
				clearInterval(interval);
				setDisplayedLines((prev) => [...prev, line]);
				setCurrentText("");
				setCurrentLine((prev) => prev + 1);
			}
		}, 30);

		return () => clearInterval(interval);
	}, [currentLine]);

	return (
		<section className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
			{/* === GRID BACKGROUND === */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />

			<div className="container max-w-4xl relative z-10">
				{/* === TERMINAL WINDOW === */}
				<motion.div
					initial={{ opacity: 0, scale: 0.96, y: 30 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="terminal-card shadow-[0_0_40px_rgba(153,255,6,0.15)]"
				>
					{/* TOP BAR */}
					<div className="win95-outset flex items-center justify-between px-3 py-1">
						<span className="text-xs text-black font-bold">
							{heroData.terminalHeader}
						</span>
						<div className="flex gap-1">
							<div className="w-3 h-3 bg-red-500 border border-black" />
							<div className="w-3 h-3 bg-yellow-400 border border-black" />
							<div className="w-3 h-3 bg-green-500 border border-black" />
						</div>
					</div>

					{/* BODY */}
					<div className="p-6 text-sm text-primary min-h-[220px]">
						{/* COMMAND LINE */}
						<div className="flex gap-2 mb-3">
							<span>
								{heroData.username}@{heroData.hostname}
							</span>
							<span>{heroData.directory}</span>
							<span>$</span>
						</div>

						{/* OUTPUT */}
						<div className="space-y-1">
							{displayedLines.map((line, i) => (
								<p key={i}>
									<span className="opacity-50 mr-2">›</span>
									{line}
								</p>
							))}

							{/* CURRENT TYPING */}
							{currentLine < heroData.typingLines.length && (
								<p>
									<span className="opacity-50 mr-2">›</span>
									{currentText}
									<span className="animate-cursor ml-1">█</span>
								</p>
							)}
						</div>
					</div>
				</motion.div>

				{/* === HERO TEXT === */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: currentLine >= heroData.typingLines.length ? 1 : 0,
					}}
					transition={{ duration: 0.5 }}
					className="text-center mt-12 space-y-6"
				>
					<h1 className="text-4xl md:text-6xl font-bold text-primary tracking-tight">
						{heroData.mainTitle}
					</h1>

					<p className="text-base md:text-lg text-foreground/70 max-w-xl mx-auto leading-relaxed">
						{heroData.subTitle}
					</p>

					{/* === CTA BUTTONS (WIN95 STYLE) === */}
					<div className="flex flex-wrap justify-center gap-4 pt-4">
						<button className="win95-outset px-6 py-3 flex items-center gap-2 text-black font-bold active:translate-y-[2px] active:shadow-none">
							{heroData.cta.primary} <FaArrowRight size={14} />
						</button>

						<button className="win95-outset px-6 py-3 flex items-center gap-2 text-black font-bold active:translate-y-[2px] active:shadow-none">
							<FaDownload size={14} /> {heroData.cta.secondary}
						</button>
					</div>

					{/* === SOCIALS === */}
					<div className="flex justify-center gap-6 pt-6 text-sm">
						{heroData.socials.map((item, i) => (
							<a
								key={i}
								href={item.href}
								target="_blank"
								className="text-primary hover:underline"
							>
								[{item.label}]
							</a>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
};
