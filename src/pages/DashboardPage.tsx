import { portfolio } from "@/data/portfolio";
import { useEffect, useMemo, useState } from "react";

type Project = (typeof portfolio.projects)[number];

const konamiCode = [
	"ArrowUp",
	"ArrowUp",
	"ArrowDown",
	"ArrowDown",
	"ArrowLeft",
	"ArrowRight",
	"ArrowLeft",
	"ArrowRight",
	"b",
	"a",
];

const prompt = "user@portfolio:~$";

const DashboardPage = () => {
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [matrixActive, setMatrixActive] = useState(false);
	const [terminalOutput, setTerminalOutput] = useState("Type 'help' or press F1 for available commands.");
	const [command, setCommand] = useState("");

	const projectRows = useMemo(
		() =>
			portfolio.projects.map((project) => ({
				...project,
				permission: "-rwxr-xr-x",
				owner: "user",
				group: "hacker",
			})),
		[],
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		let konamiPosition = 0;
		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "F1") {
				e.preventDefault();
				setTerminalOutput("COMMANDS: help, clear, boot, whoami, about, projects, skills, tree, contact, logout");
				return;
			}

			if (e.key === konamiCode[konamiPosition]) {
				konamiPosition += 1;
				if (konamiPosition === konamiCode.length) {
					setMatrixActive(true);
					setTerminalOutput("INITIATING MATRIX RAIN... STAGE 1 COMPLETE");
					konamiPosition = 0;
				}
			} else {
				konamiPosition = 0;
			}
		};

		document.addEventListener("keydown", onKeyDown);
		return () => document.removeEventListener("keydown", onKeyDown);
	}, []);

	const runCommand = (rawCommand: string) => {
		const normalizedCommand = rawCommand.trim().toLowerCase();
		const routeMap: Record<string, string> = {
			boot: "boot",
			whoami: "hero",
			about: "about",
			"cat about.txt": "about",
			projects: "projects",
			"ls projects": "projects",
			"ls -la projects/": "projects",
			skills: "skills",
			"cat skills.txt": "skills",
			tree: "tree",
			"tree infrastructure/": "tree",
			contact: "contact",
			"ping -c 3 secure-mail.net": "contact",
			logout: "footer",
		};

		if (!normalizedCommand || normalizedCommand === "help") {
			setTerminalOutput("COMMANDS: help, clear, boot, whoami, about, projects, skills, tree, contact, logout");
			return;
		}
		if (normalizedCommand === "clear") {
			setTerminalOutput("");
			return;
		}
		const target = routeMap[normalizedCommand];
		if (target) {
			document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
			setTerminalOutput(`executed: ${normalizedCommand}`);
			return;
		}
		setTerminalOutput(`command not found: ${rawCommand}. Type 'help'.`);
	};

	return (
		<main className={matrixActive ? "matrix-mode" : undefined}>
			<div className="crt-noise-overlay" />
			{matrixActive && <div className="matrix-rain">0101010011010110 001101 CYBER MATRIX ONLINE 1011001010</div>}

			<section id="boot" className="terminal-section boot-section">
				<pre className="typewriter">{`PhoenixBIOS 4.0 Release 6.0
Copyright 1985-1999 Phoenix Technologies Ltd.
All Rights Reserved

CPU: Intel Pentium III @ 800MHz
Memory Test: 524288K OK

Broadcom NetXtreme Ethernet Boot Agent v2.1.4
Initializing IDE Controller 0... OK
Loading Portfolio.exe ......................... DONE

Type 'help' for available system commands.`}</pre>
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">run portfolio.exe</span><span className="cursor" /></div>
			</section>

			<section id="hero" className="terminal-section hero-section">
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">whoami</span></div>
				<pre className="ascii-name">{portfolio.asciiName}</pre>
				<div className="role">&gt;&gt; ROLE: [{portfolio.identity.role}]</div>
				<img className="avatar" src={portfolio.identity.avatar} alt="Dummy cyber operator workstation" />
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">cat about.txt</span><span className="cursor" /></div>
			</section>

			<section id="about" className="terminal-section">
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">cat about.txt</span></div>
				<div className="terminal-window dashed">
					<p className="objective">[OBJECTIVE]: {portfolio.identity.objective}</p>
					<p>{portfolio.identity.bio}</p>
					<p className="dim">LOCATION: {portfolio.identity.location}</p>
				</div>
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">ls -la projects/</span><span className="cursor" /></div>
			</section>

			<section id="projects" className="terminal-section">
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">ls -la projects/</span></div>
				<div className="terminal-window project-list">
					<pre>total 42K{`\n`}drwxr-xr-x  2 user  hacker  4.0K Jun 16 15:18 .{`\n`}drwxr-xr-x  8 user  hacker  4.0K Jun 16 15:18 ..</pre>
					{projectRows.map((project) => (
						<div className="project-row" key={project.file}>
							<span>{project.permission} 1 {project.owner} {project.group} {project.size} {project.date}</span>
							<button className="glitch-hover link-button" onClick={() => setSelectedProject(project)} type="button">{project.file}*</button>
						</div>
					))}
				</div>
				<p className="dim">* Click executable file to view project details. Every executable opens a handled dialog.</p>
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">cat skills.txt</span><span className="cursor" /></div>
			</section>

			<section id="skills" className="terminal-section">
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">cat skills.txt</span></div>
				<div className="terminal-window">
					<p className="dim"># Security & Penetration Testing Core Tools</p>
					<p><span className="magenta">[+] Offensive:</span> {portfolio.skills.offensive.join(", ")}</p>
					<p><span className="magenta">[+] Codebase:</span> {portfolio.skills.codebase.join(", ")}</p>
					<p><span className="magenta">[+] Frameworks:</span> {portfolio.skills.frameworks.join(", ")}</p>
					<p className="dim"># Certified System Credentials</p>
					{portfolio.skills.certifications.map((certification) => <p key={certification}>- {certification}</p>)}
				</div>
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">tree infrastructure/</span><span className="cursor" /></div>
			</section>

			<section id="tree" className="terminal-section">
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">tree infrastructure/</span></div>
				<pre className="tree-output">{`infrastructure/
├── root-servers
│   ├── secondary-firewall.conf
│   └── secure-gateway.sh
├── skills-matrix
│   ├── reverse-engineering
│   ├── web-exploitation
│   └── binary-analysis
└── trophies-archive
    ├── ctf-national-1st-place.cert
    └── bug-bounty-hall-of-fame.md`}</pre>
				<p className="dim">Indexed nodes: {portfolio.infrastructure.length}</p>
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">ping -c 3 secure-mail.net</span><span className="cursor" /></div>
			</section>

			<section id="contact" className="terminal-section">
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">ping -c 3 secure-mail.net</span></div>
				<pre>{`PING secure-mail.net (127.0.0.1) 56(84) bytes of data.
64 bytes from localhost (127.0.0.1): icmp_seq=1 ttl=64 time=0.045 ms
64 bytes from localhost (127.0.0.1): icmp_seq=2 ttl=64 time=0.038 ms
64 bytes from localhost (127.0.0.1): icmp_seq=3 ttl=64 time=0.041 ms

--- secure-mail.net ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2046ms`}</pre>
				<div className="contact-actions">
					<a className="glitch-hover cta" href={`mailto:${portfolio.identity.email}`}>[ INITIALIZE SECURE TRANSMISSION ]</a>
					{portfolio.socials.map((social) => <a className="glitch-hover cta secondary" href={social.url} key={social.label} target="_blank" rel="noreferrer">[{social.label}]</a>)}
				</div>
			</section>

			<section id="footer" className="terminal-section footer-section">
				<div className="prompt-line"><span className="prompt-prefix">{prompt}</span> <span className="command-text">logout</span></div>
				<div className="session-end">
					<p>*** SESSION TERMINATED SUCCESSFULLY ***</p>
					<p>SYS_REV: Y2K-CRT-V2.0 // NO BACKDOOR DETECTED</p>
					<p>&copy; 2026 NETRUNNER. ALL RIGHTS RESERVED. <span className="cursor" /></p>
				</div>
			</section>

			<form className="command-bar" onSubmit={(e) => { e.preventDefault(); runCommand(command); setCommand(""); }}>
				<label htmlFor="terminal-command" className="prompt-prefix">{prompt}</label>
				<input id="terminal-command" value={command} onChange={(e) => setCommand(e.target.value)} placeholder="type help, projects, contact..." />
				<button className="glitch-hover" type="submit">RUN</button>
				<span className="command-output">{terminalOutput}</span>
			</form>

			{selectedProject && (
				<div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={() => setSelectedProject(null)}>
					<div className="terminal-window modal" onClick={(e) => e.stopPropagation()}>
						<img src={selectedProject.image} alt={`${selectedProject.title} dummy preview`} />
						<h2 id="project-title">{selectedProject.title}</h2>
						<p>{selectedProject.description}</p>
						<div className="contact-actions">
							<a className="glitch-hover cta" href={selectedProject.url} target="_blank" rel="noreferrer">[ OPEN REPOSITORY ]</a>
							<button className="glitch-hover cta secondary" onClick={() => setSelectedProject(null)} type="button">[ CLOSE ]</button>
						</div>
					</div>
				</div>
			)}
		</main>
	);
};

export default DashboardPage;
