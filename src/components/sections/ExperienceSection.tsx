import { motion } from "framer-motion";
import { experienceData } from "@/data/experience";
import { LuGitCommitHorizontal, LuTerminal } from "react-icons/lu";

export const ExperienceSection = () => {
	return (
		<section className="relative py-28 px-6 flex justify-center">
			{/* === AMBIENCE BACKGROUND === */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,255,6,0.08),transparent_70%)]" />

			{/* === WRAPPER (CENTERED + FLOATING) === */}
			<div className="w-full max-w-4xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 40, scale: 0.98 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="terminal-card border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] hover:shadow-[0_25px_100px_rgba(153,255,6,0.15)] transition-all duration-500"
				>
					{/* HEADER */}
					<div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/60">
						<div className="flex items-center gap-2 text-xs text-primary font-mono">
							<LuTerminal size={14} />
							<span>{experienceData.title}</span>
						</div>
						<span className="text-[10px] text-white/40 font-mono">
							log_viewer.exe
						</span>
					</div>

					{/* BODY */}
					<div className="p-6 font-mono text-sm">
						<p className="text-white/40 mb-6 text-xs">
							{experienceData.subtitle}
						</p>

						<div className="space-y-6">
							{experienceData.logs.map((item, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.08 }}
									className="group"
								>
									<div className="flex gap-4">
										{/* GRAPH */}
										<div className="flex flex-col items-center">
											<div className="w-3 h-3 bg-primary rounded-full mt-1 shadow-[0_0_8px_rgba(153,255,6,0.9)]" />
											{index !== experienceData.logs.length - 1 && (
												<div className="w-px flex-1 bg-white/10 mt-1" />
											)}
										</div>

										{/* CONTENT */}
										<div className="flex-1 pb-4">
											<div className="flex flex-wrap items-center gap-3 text-[10px] mb-1">
												<span className="text-primary">commit {index + 1}</span>
												<span className="text-white/30">{item.date}</span>
												<span className="text-white/20">[{item.type}]</span>
											</div>

											<h3 className="text-primary text-base font-bold flex items-center gap-2">
												<LuGitCommitHorizontal size={14} />
												{item.role}
											</h3>

											<p className="text-white/60 text-xs mb-2">
												@ {item.company}
											</p>

											<p className="text-white/70 text-sm leading-relaxed mb-3">
												{item.description}
											</p>

											<div className="flex flex-wrap gap-2 text-[10px]">
												{item.tags.map((tag) => (
													<span
														key={tag}
														className="text-primary/80 border border-primary/20 px-2 py-0.5"
													>
														{tag}
													</span>
												))}
											</div>
										</div>
									</div>

									<div className="h-px bg-transparent group-hover:bg-primary/30 transition-all mt-2" />
								</motion.div>
							))}
						</div>
					</div>

					{/* FOOTER */}
					<div className="border-t border-white/10 px-4 py-2 text-[10px] text-white/40 font-mono flex justify-between">
						<span>{experienceData.logs.length} commits</span>
						<span>branch: main</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
};
