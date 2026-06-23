import { Camera, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS, PHONE, PHONE_HREF } from "../../data/navigation";

export function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handler = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", handler);
		return () => window.removeEventListener("scroll", handler);
	}, []);

	return (
		<nav
			className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/95 backdrop-blur border-b border-border shadow-sm shadow-black/20" : "bg-background/60 backdrop-blur border-b border-transparent"}`}
		>
			<div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
				<a href="#inicio" className="flex items-center gap-2">
					<div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
						<Camera size={16} className="text-primary-foreground" />
					</div>
					<span
						className="text-xl font-extrabold tracking-tight text-foreground font-heading"
						style={{ letterSpacing: "0.02em" }}
					>
						BER<span className="text-primary">CES</span>
					</span>
				</a>

				<div className="hidden md:flex items-center gap-8">
					{NAV_LINKS.map((l) => (
						<a
							key={l.href}
							href={l.href}
							className="text-sm text-muted-foreground hover:text-foreground transition-colors"
						>
							{l.label}
						</a>
					))}
				</div>

				<a
					href={PHONE_HREF}
					className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold hover:bg-primary/90 transition-colors"
				>
					<Phone size={14} />
					{PHONE}
				</a>

				<button
					type="button"
					className="md:hidden text-foreground"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Toggle menu"
				>
					{menuOpen ? <X size={22} /> : <Menu size={22} />}
				</button>
			</div>

			{menuOpen && (
				<div className="md:hidden bg-card border-t border-border px-6 py-4 flex flex-col gap-4">
					{NAV_LINKS.map((l) => (
						<a key={l.href} href={l.href} className="text-foreground text-base" onClick={() => setMenuOpen(false)}>
							{l.label}
						</a>
					))}
					<a
						href={PHONE_HREF}
						className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-semibold w-fit"
					>
						<Phone size={14} />
						{PHONE}
					</a>
				</div>
			)}
		</nav>
	);
}
