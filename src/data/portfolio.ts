export const portfolio = {
	identity: {
		name: "CYBER DEV",
		role: "CYBERSECURITY ANALYST / FULL-STACK DEV / CTF PLAYER",
		email: "netrunner@domain.com",
		location: "Jakarta Digital Realm",
		avatar: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&w=900&q=80",
		objective:
			"Break through defensive assumptions and build secure software architecture from kernel-level tooling to modern web interfaces.",
		bio:
			"Specialized in automated vulnerability assessment, penetration testing, and reverse engineering. Experienced in national CTF competitions, secure-by-design web platforms, and pragmatic zero-day mitigation playbooks for critical infrastructure simulations.",
	},
	asciiName: String.raw`
 ██████╗██╗  ██╗██████╗ ███████╗██████╗    ██████╗ ███████╗██╗   ██╗
██╔════╝╚██╗██╔╝██╔══██╗██╔════╝██╔══██╗   ██╔══██╗██╔════╝██║   ██║
██║      ╚███╔╝ ██████╔╝█████╗  ██████╔╝   ██║  ██║█████╗  ██║   ██║
██║      ██╔██╗ ██╔══██╗██╔══╝  ██╔══██╗   ██║  ██║██╔══╝  ╚██╗ ██╔╝
╚██████╗██╔╝ ██╗██████╔╝███████╗██║  ██║   ██████╔╝███████╗ ╚████╔╝ 
 ╚═════╝╚═╝  ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝   ╚═════╝ ╚══════╝  ╚═══╝`,
	projects: [
		{
			file: "ai-malware-detector.exe",
			size: "12K",
			date: "Jan 2026",
			title: "AI Malware Detector",
			description: "Dummy ML-assisted scanner that classifies suspicious binaries and produces analyst-readable triage notes.",
			image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
			url: "https://github.com/",
		},
		{
			file: "zero-trust-auth.exe",
			size: "8.5K",
			date: "Nov 2025",
			title: "Zero Trust Auth",
			description: "Dummy identity gateway with risk scoring, device posture checks, and hardened audit trails.",
			image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=900&q=80",
			url: "https://github.com/",
		},
		{
			file: "kernel-rootkit-remover.exe",
			size: "5.2K",
			date: "Aug 2025",
			title: "Kernel Rootkit Remover",
			description: "Dummy forensic utility concept for detecting persistence hooks and generating safe removal steps.",
			image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
			url: "https://github.com/",
		},
		{
			file: "automated-recon-bot.exe",
			size: "14K",
			date: "May 2025",
			title: "Automated Recon Bot",
			description: "Dummy reconnaissance assistant that maps public attack surface and exports prioritized findings.",
			image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
			url: "https://github.com/",
		},
	],
	skills: {
		offensive: ["Kali Linux", "Metasploit", "Burp Suite Pro", "Ghidra", "Wireshark", "Nmap"],
		codebase: ["Python", "Go", "Rust", "Bash", "C/C++", "x86 Assembly"],
		frameworks: ["React", "Next.js", "Node.js", "FastAPI", "Docker", "Kubernetes"],
		certifications: ["OSCP", "CEH"],
	},
	infrastructure: [
		"root-servers/secondary-firewall.conf",
		"root-servers/secure-gateway.sh",
		"skills-matrix/reverse-engineering",
		"skills-matrix/web-exploitation",
		"skills-matrix/binary-analysis",
		"trophies-archive/ctf-national-1st-place.cert",
		"trophies-archive/bug-bounty-hall-of-fame.md",
	],
	socials: [
		{ label: "GitHub", url: "https://github.com/" },
		{ label: "LinkedIn", url: "https://www.linkedin.com/" },
		{ label: "Writeups", url: "https://medium.com/" },
	],
} as const;
