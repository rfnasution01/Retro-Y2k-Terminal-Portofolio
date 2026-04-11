import { useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "@/data/projects";
import {
	LuExternalLink,
	LuFileCode,
	LuFolder,
	LuMinus,
	LuMonitor,
	LuSquare,
	LuX,
} from "react-icons/lu";

export const ProjectSection = () => {
	const [activeTab, setActiveTab] = useState("All Projects");

	const filteredProjects = projectsData.projects.filter((p) =>
		activeTab === "All Projects" ? true : p.category === activeTab,
	);

	return (
		<section className="py-20 px-6">
			<div className="container max-w-6xl mx-auto flex justify-center">
				{/* === WINDOW === */}
				<div className="win95-outset overflow-hidden shadow-win mx-auto">
					{/* === TITLE BAR === */}
					<div className="bg-win-blue text-white px-3 py-1 flex items-center justify-between">
						<div className="flex items-center gap-2 text-sm font-bold">
							<LuMonitor size={14} />
							<span>{projectsData.sectionTitle}</span>
						</div>

						<div className="flex gap-1">
							{[LuMinus, LuSquare, LuX].map((Icon, i) => (
								<div
									key={i}
									className="win95-outset w-5 h-5 flex items-center justify-center active:translate-y-[1px]"
								>
									<Icon size={10} strokeWidth={3} className="text-black" />
								</div>
							))}
						</div>
					</div>

					{/* === BODY === */}
					<div className="flex flex-col md:flex-row">
						{/* === SIDEBAR === */}
						<aside className="w-full md:w-56 bg-win-bg border-r-2 border-black/30 p-3">
							<p className="text-[10px] font-bold mb-3 text-black/60 uppercase">
								Directories
							</p>

							<div className="space-y-1">
								{projectsData.sidebarFolders.map((folder) => {
									const active = activeTab === folder;

									return (
										<button
											key={folder}
											onClick={() => setActiveTab(folder)}
											className={`w-full flex items-center gap-2 px-2 py-1 text-sm ${
												active
													? "bg-win-blue text-white"
													: "text-black hover:bg-black/10"
											}`}
										>
											<LuFolder
												size={14}
												className={active ? "text-white" : "text-black"}
											/>
											{folder}
										</button>
									);
								})}
							</div>
						</aside>

						{/* === MAIN === */}
						<main className="flex-1 p-4 bg-[#eaeaea] min-h-[500px]">
							{/* GRID */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{filteredProjects.map((project, idx) => (
									<motion.div
										key={project.id}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: idx * 0.05 }}
										className="win95-outset p-3 group cursor-pointer active:translate-y-[2px]"
									>
										{/* IMAGE */}
										<div className="aspect-video bg-black border border-black mb-3 relative overflow-hidden">
											<img
												src={project.image}
												alt={project.title}
												className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
											/>

											{/* STATUS */}
											<div className="absolute top-1 right-1 text-[9px] bg-black text-primary px-1 font-mono">
												{project.status}
											</div>
										</div>

										{/* TITLE */}
										<div className="flex items-start justify-between gap-2 mb-1">
											<h3 className="text-sm font-bold text-black flex items-center gap-1">
												<LuFileCode size={14} />
												{project.title}
											</h3>

											<a
												href={project.link}
												target="_blank"
												className="text-black/60 hover:text-black"
											>
												<LuExternalLink size={14} />
											</a>
										</div>

										{/* DESC */}
										<p className="text-[11px] text-black/70 mb-2 line-clamp-2">
											{project.description}
										</p>

										{/* TECH */}
										<div className="flex flex-wrap gap-1 border-t border-black/20 pt-2">
											{project.tech.map((t) => (
												<span
													key={t}
													className="text-[9px] text-black font-mono px-1.5 py-0.5 border border-black bg-white"
												>
													{t}
												</span>
											))}
										</div>

										{/* FOOT INFO */}
										<div className="flex justify-between text-[9px] mt-2 text-black/60">
											<span>{project.category}</span>
											<span>{project.size}</span>
										</div>
									</motion.div>
								))}
							</div>
						</main>
					</div>

					{/* === STATUS BAR === */}
					<div className="bg-win-bg border-t-2 border-white px-3 py-1 flex justify-between text-[10px] text-black">
						<span>{filteredProjects.length} object(s)</span>
						<span>System Ready</span>
					</div>
				</div>
			</div>
		</section>
	);
};
