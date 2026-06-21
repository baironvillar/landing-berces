import { ArrowRight } from "lucide-react";
import { CONTACT_INFO } from "../../data/contact";

const SERVICE_OPTIONS = [
	"Instalación de cámaras",
	"Venta de equipos",
	"Mantención preventiva",
	"Reparación de sistema",
	"Otro",
];

export function ContactSection() {
	return (
		<section id="contacto" className="py-24">
			<div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16">
				<div>
					<div className="text-xs font-mono text-primary tracking-widest mb-3 uppercase">{`// Contáctanos`}</div>
					<h2 className="text-4xl lg:text-5xl font-extrabold mb-6 font-heading">
						COTIZA HOY Y<br />
						<span className="text-primary">PROTEGE TU HOGAR</span>
					</h2>
					<p className="text-muted-foreground leading-relaxed mb-10">
						Rellena el formulario y te contactamos en menos de 2 horas hábiles. La visita técnica y la cotización son
						completamente gratis, sin compromiso.
					</p>

					<div className="space-y-5">
						{CONTACT_INFO.map((item) => {
							const Icon = item.icon;
							return (
								<div key={item.label} className="flex items-start gap-4">
									<div className="w-9 h-9 bg-secondary border border-border rounded flex items-center justify-center shrink-0">
										<Icon size={15} className="text-primary" />
									</div>
									<div>
										<div className="text-xs text-muted-foreground mb-0.5 font-mono">{item.label}</div>
										<div className="text-sm text-foreground font-medium">{item.value}</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>

				<div className="bg-card border border-border rounded-lg p-8">
					<h3 className="text-xl font-bold text-foreground mb-6 font-heading">Solicitar Cotización Gratuita</h3>
					<form className="space-y-4" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
						<div className="grid sm:grid-cols-2 gap-4">
							<div>
								<label htmlFor="contact-name" className="block text-xs text-muted-foreground mb-1.5 font-mono">
									Nombre completo
								</label>
								<input
									id="contact-name"
									type="text"
									name="name"
									placeholder="Juan Pérez"
									className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
									required
								/>
							</div>
							<div>
								<label htmlFor="contact-phone" className="block text-xs text-muted-foreground mb-1.5 font-mono">
									Teléfono
								</label>
								<input
									id="contact-phone"
									type="tel"
									name="phone"
									placeholder="+56 9 XXXX XXXX"
									className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
									required
								/>
							</div>
						</div>

						<div>
							<label htmlFor="contact-email" className="block text-xs text-muted-foreground mb-1.5 font-mono">
								Email
							</label>
							<input
								id="contact-email"
								type="email"
								name="email"
								placeholder="juan@correo.cl"
								className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors"
								required
							/>
						</div>

						<div>
							<label htmlFor="contact-service" className="block text-xs text-muted-foreground mb-1.5 font-mono">
								Servicio de interés
							</label>
							<select
								id="contact-service"
								name="service"
								className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
							>
								{SERVICE_OPTIONS.map((opt) => (
									<option key={opt}>{opt}</option>
								))}
							</select>
						</div>

						<div>
							<label htmlFor="contact-message" className="block text-xs text-muted-foreground mb-1.5 font-mono">
								Mensaje (opcional)
							</label>
							<textarea
								id="contact-message"
								name="message"
								rows={3}
								placeholder="Cuéntanos tu necesidad: tipo de propiedad, número de cámaras estimado, etc."
								className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-colors resize-none"
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
						>
							Enviar Solicitud Gratuita
							<ArrowRight size={16} />
						</button>
						<p className="text-center text-xs text-muted-foreground font-mono">
							Respuesta en menos de 2 horas hábiles · Sin compromiso
						</p>
					</form>
				</div>
			</div>
		</section>
	);
}
