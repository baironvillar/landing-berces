import { HardHat, Laptop, UserRound } from "lucide-react";
import { SectionTitle } from "../ui/SectionTitle";

const TEAM = [
	{
		icon: Laptop,
		name: "Ingeniero en Sistemas",
		desc: "Encargado del diseño, implementación y soporte de sistemas de videovigilancia, redes y equipos tecnológicos.",
		iconColor: "text-sky-400",
		iconBg: "bg-sky-400/10",
	},
	{
		icon: UserRound,
		name: "Gerente General",
		desc: "Lidera la empresa, coordina proyectos y asegura que cada cliente reciba la mejor atención y solución personalizada.",
		iconColor: "text-amber-400",
		iconBg: "bg-amber-400/10",
	},
	{
		icon: HardHat,
		name: "Técnico",
		desc: "Ejecuta instalaciones en terreno, mantención preventiva y correctiva de sistemas CCTV con altos estándares de calidad.",
		iconColor: "text-emerald-400",
		iconBg: "bg-emerald-400/10",
	},
];

export function TeamSection() {
	return (
		<section id="equipo" className="py-24">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<SectionTitle label="Nuestro equipo" title="CONOCE A LOS" highlight="EXPERTOS" />
				<div className="grid md:grid-cols-3 gap-6">
					{TEAM.map((member) => {
						const Icon = member.icon;
						return (
							<div
								key={member.name}
								className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
							>
								<div
									className={`w-12 h-12 ${member.iconBg} rounded-lg flex items-center justify-center mb-4 ${member.iconColor}`}
								>
									<Icon size={24} />
								</div>
								<h3 className="text-lg font-bold text-foreground font-heading mb-2">{member.name}</h3>
								<p className="text-sm text-muted-foreground leading-relaxed">{member.desc}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
