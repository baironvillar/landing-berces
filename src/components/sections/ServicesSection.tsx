import { SERVICES } from "../../data/services";
import { SectionTitle } from "../ui/SectionTitle";
import { ServiceCard } from "../ui/ServiceCard";

export function ServicesSection() {
	return (
		<section id="servicios" className="py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<SectionTitle label="Nuestros servicios" title="TODO LO QUE NECESITAS" highlight="EN UN SOLO LUGAR" />
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
					{SERVICES.map((s) => (
						<ServiceCard key={s.title} service={s} />
					))}
				</div>
			</div>
		</section>
	);
}
