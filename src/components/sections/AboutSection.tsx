import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "../ui/Button";

const FEATURES = [
	"Técnicos certificados por Hikvision y Dahua",
	"Visita técnica sin costo en Antofagasta",
	"Garantía de 12 meses en instalaciones",
	"Soporte remoto 24/7 incluido",
	"Financiamiento disponible hasta 12 cuotas sin interés",
];

export function AboutSection() {
	return (
		<section id="nosotros" className="py-24">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
				<div className="relative">
					<div className="rounded-lg overflow-hidden border border-border aspect-[4/3] bg-muted">
						<img
							src="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=700&h=525&fit=crop&auto=format"
							alt="Técnico instalando cámara de seguridad profesionalmente"
							className="w-full h-full object-cover opacity-65"
							loading="lazy"
						/>
						<div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
					</div>
					<div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-lg p-4 shadow-2xl max-w-[180px]">
						<div className="flex items-center gap-1 mb-1">
							{[1, 2, 3, 4, 5].map((s) => (
								<Star key={s} size={10} className="text-accent fill-accent" />
							))}
						</div>
						<div className="text-xs text-foreground font-semibold mb-0.5">Certificados Hikvision</div>
						<div className="text-[11px] text-muted-foreground">Partner oficial en Chile</div>
					</div>
				</div>

				<div>
					<div className="text-xs font-mono text-primary tracking-widest mb-3 uppercase">{`// ¿Por qué elegirnos?`}</div>
					<h2 className="text-4xl lg:text-5xl font-extrabold mb-6 font-heading">
						EXPERTOS EN SEGURIDAD
						<br />
						<span className="text-primary">PARA TU TRANQUILIDAD</span>
					</h2>
					<p className="text-muted-foreground leading-relaxed mb-8">
						Somos una empresa chilena especializada en proteger hogares y negocios en la Región Metropolitana.
						Trabajamos con las mejores marcas del mercado y ofrecemos garantía real en todos nuestros trabajos.
					</p>

					<div className="space-y-4">
						{FEATURES.map((text) => (
							<div key={text} className="flex items-center gap-3">
								<CheckCircle2 size={16} className="text-primary shrink-0" />
								<span className="text-sm text-foreground">{text}</span>
							</div>
						))}
					</div>

					<Button href="#contacto" className="mt-8">
						Solicitar visita técnica <ArrowRight size={16} />
					</Button>
				</div>
			</div>
		</section>
	);
}
