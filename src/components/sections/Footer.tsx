import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { PHONE } from "../../data/navigation";

const FOOTER_SERVICES = ["Venta de cámaras", "Instalación", "Mantención", "Reparación"];

export function Footer() {
	return (
		<footer className="border-t border-border py-10">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="grid md:grid-cols-4 gap-8 mb-8">
					<div className="md:col-span-2">
						<div className="flex items-center gap-2 mb-3">
							<div className="w-7 h-7 bg-primary rounded flex items-center justify-center">
								<Camera size={13} className="text-primary-foreground" />
							</div>
							<span className="text-lg font-extrabold font-heading">
								BER<span className="text-primary">CES</span>
							</span>
						</div>
						<p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
							Empresa chilena especializada en sistemas de videovigilancia y seguridad electrónica para hogares y
							empresas.
						</p>
					</div>

					<div>
						<div className="text-xs text-muted-foreground mb-3 uppercase tracking-widest font-mono">Servicios</div>
						{FOOTER_SERVICES.map((s) => (
							<a
								key={s}
								href="#servicios"
								className="block text-sm text-muted-foreground hover:text-foreground transition-colors mb-2"
							>
								{s}
							</a>
						))}
					</div>

					<div>
						<div className="text-xs text-muted-foreground mb-3 uppercase tracking-widest font-mono">Contacto</div>
						<div className="space-y-2 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Phone size={12} />
								<span>{PHONE}</span>
							</div>
							<div className="flex items-center gap-2">
								<Mail size={12} />
								<span>berces.ltda.spa@gmail.com</span>
							</div>
							<div className="flex items-center gap-2">
								<MapPin size={12} />
								<span>Antofagasta, Chile</span>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
					<span className="text-xs text-muted-foreground font-mono">
						© 2026 Berces · RUT 76.XXX.XXX-X · Todos los derechos reservados
					</span>
					<div className="flex items-center gap-1 text-xs text-muted-foreground">
						<div className="w-1.5 h-1.5 rounded-full bg-green-400" />
						Sistemas operativos — 99.9% uptime
					</div>
				</div>
			</div>
		</footer>
	);
}
