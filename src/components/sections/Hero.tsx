import { ArrowRight } from "lucide-react";
import { STATS } from "../../data/stats";
import { Button } from "../ui/Button";
import { StatCard } from "../ui/StatCard";

const CAMERA_FEED = [
	{
		label: "CAM01 — ENTRADA",
		img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&auto=format&sat=-80",
	},
	{
		label: "CAM02 — ESTACIONAMIENTO",
		img: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=400&h=300&fit=crop&auto=format&sat=-80",
	},
	{
		label: "CAM03 — PASILLO",
		img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=400&h=300&fit=crop&auto=format&sat=-80",
	},
	{
		label: "CAM04 — PATIO",
		img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop&auto=format&sat=-80",
	},
];

export function Hero() {
	return (
		<section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
			<div
				className="absolute inset-0 z-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 60% at 60% 40%, rgba(14,165,233,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(245,158,11,0.07) 0%, transparent 50%), #080c14",
				}}
			/>
			<div
				className="absolute inset-0 z-0 opacity-[0.04]"
				style={{
					backgroundImage:
						"linear-gradient(rgba(14,165,233,1) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,1) 1px, transparent 1px)",
					backgroundSize: "60px 60px",
				}}
			/>

			<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<div className="inline-flex items-center gap-2 border border-primary/30 bg-primary/10 text-primary text-xs font-mono px-3 py-1.5 rounded-full mb-6">
						<div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
						Sistema activo — Antofagasta
					</div>

					<h1 className="text-5xl lg:text-7xl font-extrabold leading-none tracking-tight mb-6 font-heading">
						PROTEGE LO
						<br />
						QUE MÁS
						<br />
						<span className="text-primary">IMPORTA</span>
					</h1>

					<p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-md">
						Instalación, venta y mantención de sistemas de cámaras de seguridad para hogares y empresas en Chile. Más de
						1.200 proyectos completados con garantía.
					</p>

					<div className="flex flex-col sm:flex-row gap-3 mb-12">
						<Button href="#contacto">
							Cotizar Gratis <ArrowRight size={16} />
						</Button>
						<Button href="#servicios" variant="outline">
							Ver Servicios
						</Button>
					</div>

					<div className="grid grid-cols-2 gap-4">
						{STATS.map((s) => (
							<StatCard key={s.label} stat={s} />
						))}
					</div>
				</div>

				<div className="relative hidden lg:block">
					<div className="rounded-lg overflow-hidden border border-primary/20 bg-black aspect-[4/3]">
						<div className="flex items-center justify-between px-3 py-1.5 bg-black border-b border-primary/20">
							<span className="text-[10px] text-primary/70 font-mono">NVR — 4CH LIVE VIEW</span>
							<div className="flex items-center gap-1.5">
								<div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
								<span className="text-[10px] text-red-400 font-mono">REC</span>
								<span className="text-[10px] text-muted-foreground ml-2 font-mono">19/06/2026 14:32:07</span>
							</div>
						</div>

						<div className="grid grid-cols-2 grid-rows-2 h-[calc(100%-32px)]">
							{CAMERA_FEED.map((cam) => (
								<div key={cam.label} className="relative overflow-hidden border border-primary/10">
									<img
										src={cam.img}
										alt={cam.label}
										className="w-full h-full object-cover opacity-75 grayscale"
										loading="lazy"
									/>
									<div
										className="absolute inset-0"
										style={{
											background:
												"repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 3px)",
										}}
									/>
									<div className="absolute bottom-1 left-1.5">
										<span className="text-[9px] text-primary/80 font-mono">{cam.label}</span>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
