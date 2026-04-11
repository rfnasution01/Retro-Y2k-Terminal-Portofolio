import { footerData } from "@/data/footer";
import { LuCpu } from "react-icons/lu";

export const FooterSection = () => {
	return (
		<footer className="relative w-full px-6 pb-10 pt-4 flex justify-center">
			{/* === AMBIENCE LINE === */}
			<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

			{/* === WRAPPER (CENTERED BAR) === */}
			<div className="w-full max-w-5xl mx-auto">
				<div className="win95-outset flex flex-col md:flex-row items-center justify-between gap-4 px-4 py-2 text-[10px] font-mono">
					{/* LEFT */}
					<div className="flex items-center gap-3 text-black">
						<span className="font-bold">PORTFOLIO_OS</span>
						<span className="bg-black text-primary px-1">
							{footerData.version}
						</span>
					</div>

					{/* CENTER (SYSTEM STATUS) */}
					<div className="flex items-center gap-2 text-black/70">
						<LuCpu size={12} className="text-primary animate-pulse" />
						<span>{footerData.systemStats}</span>
					</div>

					{/* RIGHT */}
					<div className="flex items-center gap-4">
						{footerData.links.map((link) => (
							<a
								key={link.label}
								href={link.href}
								className="text-black hover:underline"
							>
								[{link.label}]
							</a>
						))}
					</div>
				</div>

				{/* === COPYRIGHT (SUBTLE) === */}
				<p className="text-center text-[10px] text-white/30 mt-3 font-mono">
					{footerData.copyright}
				</p>
			</div>
		</footer>
	);
};
