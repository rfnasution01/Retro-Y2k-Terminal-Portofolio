import { motion } from "framer-motion";
import { contactData } from "@/data/contact";
import { useState } from "react";
import { LuTerminal } from "react-icons/lu";

export const ContactSection = () => {
	const [step, setStep] = useState(0);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const steps = [
		"Enter your name:",
		"Enter your email:",
		"Write your message:",
	];

	const handleInput = (value: string) => {
		if (step === 0) setForm({ ...form, name: value });
		if (step === 1) setForm({ ...form, email: value });
		if (step === 2) setForm({ ...form, message: value });

		setStep((prev) => prev + 1);
	};

	return (
		<section className="relative py-28 px-6 flex justify-center">
			{/* === AMBIENCE === */}
			<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(153,255,6,0.1),transparent_70%)]" />

			{/* === WRAPPER === */}
			<div className="w-full max-w-2xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: 40, scale: 0.97 }}
					whileInView={{ opacity: 1, y: 0, scale: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="terminal-card border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.7)] hover:shadow-[0_30px_100px_rgba(153,255,6,0.2)] transition-all duration-500"
				>
					{/* HEADER */}
					<div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-black/60">
						<div className="flex items-center gap-2 text-xs text-primary font-mono">
							<LuTerminal size={14} />
							<span>{contactData.title}</span>
						</div>
						<span className="text-[10px] text-white/40 font-mono">
							connection_module
						</span>
					</div>

					{/* BODY */}
					<div className="p-6 font-mono text-sm min-h-[320px]">
						<p className="text-white/50 mb-4">{contactData.description}</p>

						{/* CLI OUTPUT */}
						<div className="space-y-2">
							{step > 0 && (
								<p>
									<span className="text-primary">name:</span> {form.name}
								</p>
							)}
							{step > 1 && (
								<p>
									<span className="text-primary">email:</span> {form.email}
								</p>
							)}
							{step > 2 && (
								<p>
									<span className="text-primary">message:</span> {form.message}
								</p>
							)}

							{step < steps.length ? (
								<CLIInput label={steps[step]} onSubmit={handleInput} />
							) : (
								<div className="mt-4 text-primary">
									✔ Message sent successfully (simulated)
								</div>
							)}
						</div>

						<p className="text-red-400 text-xs mt-6">{contactData.errorLog}</p>

						{/* === SOCIALS INSIDE TERMINAL === */}
						<div className="flex gap-4 mt-6 text-[11px]">
							{contactData.socials.map((s) => (
								<a
									key={s.label}
									href={s.href}
									className="text-primary hover:underline"
								>
									[{s.label}]
								</a>
							))}
						</div>
					</div>

					{/* FOOTER */}
					<div className="border-t border-white/10 px-4 py-2 text-[10px] text-white/40 font-mono flex justify-between">
						<span>STATUS: {contactData.status}</span>
						<span>protocol: smtp_v1</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

/* === CLI INPUT === */
const CLIInput = ({
	label,
	onSubmit,
}: {
	label: string;
	onSubmit: (val: string) => void;
}) => {
	const [value, setValue] = useState("");

	return (
		<div className="flex flex-col gap-1">
			<label className="text-primary">{label}</label>

			<div className="flex items-center gap-2">
				<span className="text-primary">$</span>
				<input
					autoFocus
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter" && value.trim()) {
							onSubmit(value);
							setValue("");
						}
					}}
					className="bg-transparent outline-none flex-1 text-white"
				/>
				<span className="animate-cursor">█</span>
			</div>
		</div>
	);
};
