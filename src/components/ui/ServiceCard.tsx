import type { Service } from "../../types";

interface ServiceCardProps {
	service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
	const Icon = service.icon;

	return (
		<div className="group bg-card border border-border rounded-lg p-6 hover:border-primary/40 transition-all duration-300 hover:bg-secondary/30 cursor-pointer">
			<div className="w-10 h-10 bg-primary/15 rounded flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
				<Icon size={20} className="text-primary" />
			</div>
			<h3 className="text-xl font-bold text-foreground mb-3 font-heading">{service.title}</h3>
			<p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
			<div className="flex flex-wrap gap-1.5">
				{service.tags.map((t) => (
					<span
						key={t}
						className="text-[10px] bg-secondary text-muted-foreground px-2 py-0.5 rounded border border-border font-mono"
					>
						{t}
					</span>
				))}
			</div>
		</div>
	);
}
