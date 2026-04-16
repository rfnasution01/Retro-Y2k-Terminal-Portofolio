import ImgProduct1 from "@/assets/img/produk-1.jpg";
import ImgProduct2 from "@/assets/img/produk-2.jpg";

export const projectsData = {
	sectionTitle: "/projects/recent_work",
	sidebarFolders: ["All Projects", "Web Apps", "UI/UX"],

	projects: [
		{
			id: 1,
			title: "Global E-Commerce Platform",
			category: "Web Apps",
			description:
				"Scalable e-commerce platform with modern UI, optimized performance, and seamless checkout experience.",
			tech: ["React", "Next.js", "Stripe", "Tailwind"],
			image: ImgProduct1,
			link: "https://github.com/yourname/project",
			status: "Production",
			size: "2.4 MB",
		},
		{
			id: 2,
			title: "Realtime Collaboration App",
			category: "Web Apps",
			description:
				"Real-time chat and collaboration platform with socket-based architecture and modern UX.",
			tech: ["Next.js", "Socket.io", "TypeScript"],
			image: ImgProduct2,
			link: "https://github.com/yourname/project",
			status: "Beta",
			size: "1.1 MB",
		},
	],
};
