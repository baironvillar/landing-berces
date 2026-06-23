import emailjs from "@emailjs/browser";
import { ArrowRight, CheckCircle2, Loader2, XCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT_INFO } from "../../data/contact";
import { EMAILJS_CONFIG } from "../../data/emailjs";

const SERVICE_OPTIONS = [
	"Instalación de cámaras",
	"Venta de equipos",
	"Mantención preventiva",
	"Reparación de sistema",
	"Otro",
];

export function ContactSection() {
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

	useEffect(() => {
		if (status === "success" || status === "error") {
			const timer = setTimeout(() => setStatus("idle"), 6000);
			return () => clearTimeout(timer);
		}
	}, [status]);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget;
		const data = new FormData(form);
		const rawService = data.get("service") as string;
		const service = rawService === "Otro" ? "NUEVA SOLICITUD DE COTIZACIÓN" : rawService;

		try {
			await emailjs.send(
				EMAILJS_CONFIG.SERVICE_ID,
				EMAILJS_CONFIG.TEMPLATE_ID,
				{
					name: data.get("name") as string,
					phone: data.get("phone") as string,
					email: data.get("email") as string,
					service,
					message: data.get("message") as string,
				},
				EMAILJS_CONFIG.PUBLIC_KEY,
			);
			setStatus("success");
			form.reset();
		} catch (err) {
			console.error("EmailJS error:", err);
			setStatus("error");
		}
	};

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

					{status === "success" && (
						<div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
							<CheckCircle2 size={20} className="text-green-400 shrink-0" />
							<div>
								<div className="text-sm font-semibold text-green-400">¡Solicitud enviada con éxito!</div>
								<div className="text-xs text-green-400/70">
									Recibimos tu mensaje. Te contactaremos en menos de 2 horas hábiles.
								</div>
							</div>
						</div>
					)}

					{status === "error" && (
						<div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
							<XCircle size={20} className="text-red-400 shrink-0" />
							<div>
								<div className="text-sm font-semibold text-red-400">Error al enviar</div>
								<div className="text-xs text-red-400/70">
									Hubo un problema. Intentá de nuevo o escribinos por{" "}
									<a href="https://wa.me/56946198238" className="underline">
										WhatsApp
									</a>
									.
								</div>
							</div>
						</div>
					)}

					<form className="space-y-4" onSubmit={handleSubmit}>
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
							disabled={status === "sending"}
							className="w-full bg-primary text-primary-foreground py-3 rounded font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
						>
							{status === "sending" ? (
								<>
									<Loader2 size={16} className="animate-spin" />
									Enviando...
								</>
							) : (
								<>
									Enviar Solicitud Gratuita
									<ArrowRight size={16} />
								</>
							)}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
