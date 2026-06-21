import { TESTIMONIALS } from "../../data/testimonials";
import { SectionTitle } from "../ui/SectionTitle";
import { TestimonialCard } from "../ui/TestimonialCard";

export function TestimonialsSection() {
	return (
		<section className="py-24 bg-muted/30">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="mb-12 text-center">
					<SectionTitle label="Testimonios" title="LO QUE DICEN" highlight="NUESTROS CLIENTES" center />
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					{TESTIMONIALS.map((t) => (
						<TestimonialCard key={t.name} testimonial={t} />
					))}
				</div>
			</div>
		</section>
	);
}
