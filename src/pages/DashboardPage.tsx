import {
	ContactSection,
	ExperienceSection,
	FooterSection,
	HeroSection,
	ProjectSection,
} from "@/components/sections";
import { motion } from "framer-motion";
import { useEffect } from "react";

const DashboardPage = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="relative w-full min-h-screen bg-background text-foreground overflow-hidden">
			{/* === GLOBAL AMBIENCE === */}

			{/* Glow radial subtle */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(153,255,6,0.08),transparent_40%)]" />
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_60%,rgba(0,128,255,0.06),transparent_40%)]" />

			{/* Vignette effect */}
			<div className="pointer-events-none absolute inset-0 bg-black/40 [mask-image:radial-gradient(circle,transparent_60%,black_100%)]" />

			{/* Scanline overlay already handled globally in CSS */}

			{/* === CONTENT WRAPPER === */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, ease: "easeOut" }}
				className="relative z-10 flex flex-col"
			>
				{/* === HERO === */}
				<section className="relative">
					<HeroSection />
				</section>

				{/* === PROJECTS === */}
				<motion.section
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5 }}
					className="relative"
				>
					<ProjectSection />
				</motion.section>

				{/* === EXPERIENCE === */}
				<motion.section
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.1 }}
					className="relative"
				>
					<ExperienceSection />
				</motion.section>

				{/* === CONTACT === */}
				<motion.section
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="relative"
				>
					<ContactSection />
				</motion.section>

				{/* === FOOTER === */}
				<FooterSection />
			</motion.div>
		</main>
	);
};

export default DashboardPage;
