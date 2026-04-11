import ImgProduct1 from "@/assets/img/produk-1.jpg";
import ImgProduct2 from "@/assets/img/produk-2.jpg";

export const projectsData = {
	sectionTitle: "C:\\Projects\\Recent_Works",
	sidebarFolders: ["All Projects", "Web Apps", "UI/UX"],

	projects: [
		{
			id: 1,
			title: "E-Commerce OS",
			category: "Web Apps",
			description: "Platform belanja dengan antarmuka command-line.",
			tech: ["React", "Tailwind", "Framer Motion"],
			image: ImgProduct1, // Ganti dengan screenshot proyek
			link: "https://github.com",
			status: "Stable",
			size: "1.2 MB",
		},
		{
			id: 2,
			title: "Terminal Chat",
			category: "UI/UX",
			description:
				"Real-time chat app menggunakan socket.io dengan estetika Y2K.",
			tech: ["Next.js", "Socket.io", "TypeScript"],
			image: ImgProduct2,
			link: "https://github.com",
			status: "Beta",
			size: "850 KB",
		},
		// Tambahkan proyek lainnya di sini
	],
};
