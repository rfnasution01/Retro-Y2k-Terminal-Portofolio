export const experienceData = {
	title: "SYSTEM_LOG: Work_Experience",
	subtitle: "Melihat riwayat pembaruan karir dan kontribusi profesional.",
	logs: [
		{
			date: "2023 - PRESENT",
			role: "Frontend Developer",
			company: "Tech StartUp X",
			description:
				"Memimpin migrasi codebase dari JavaScript ke TypeScript. Mengoptimalkan performa React hingga 40% menggunakan teknik memoization.",
			tags: ["React", "Next.js", "Performance"],
			type: "PATCH", // Bisa: PATCH, MAJOR, MINOR (ala SemVer)
		},
		{
			date: "2022 - 2023",
			role: "Junior Web Developer",
			company: "Creative Agency Y",
			description:
				"Membangun 10+ landing page responsif menggunakan Tailwind CSS dan Framer Motion untuk klien internasional.",
			tags: ["Tailwind", "GSAP", "UI/UX"],
			type: "MINOR",
		},
		{
			date: "2021 - 2022",
			role: "IT Internship",
			company: "Government Office",
			description:
				"Melakukan maintenance database dan membantu troubleshooting jaringan internal.",
			tags: ["SQL", "Networking", "Linux"],
			type: "INITIAL_COMMIT",
		},
	],
};
