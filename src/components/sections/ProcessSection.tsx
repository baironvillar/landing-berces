import { PROCESS } from "../../data/process";
import { SectionTitle } from "../ui/SectionTitle";

export function ProcessSection() {
	return (
		<section className="py-24">
			<div className="max-w-7xl mx-auto px-6 lg:px-10">
				<div className="mb-14 text-center">
					<SectionTitle label="¿Cómo funciona?" title="CUATRO PASOS PARA" highlight="TU TRANQUILIDAD" center />
				</div>

				<div className="grid md:grid-cols-4 gap-0">
					{PROCESS.map((p, i) => (
						<div key={p.step} className="relative flex flex-col items-center text-center p-6">
							{i < PROCESS.length - 1 && (
								<div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-border" />
							)}
							<div className="w-16 h-16 rounded-full border-2 border-primary/40 bg-secondary flex items-center justify-center mb-4 z-10 relative font-heading">
								<span className="text-xl font-extrabold text-primary">{p.step}</span>
							</div>
							<h3 className="text-lg font-bold text-foreground mb-2 font-heading">{p.title}</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
