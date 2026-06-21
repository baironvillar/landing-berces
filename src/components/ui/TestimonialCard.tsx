import { MapPin, Star, Users } from "lucide-react";
import type { Testimonial } from "../../types";

interface TestimonialCardProps {
	testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
	return (
		<div className="bg-card border border-border rounded-lg p-6">
			<div className="flex items-center gap-1 mb-4">
				{Array.from({ length: testimonial.stars }).map((_, s) => (
					<Star key={s} size={12} className="text-accent fill-accent" />
				))}
			</div>
			<p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">&ldquo;{testimonial.text}&rdquo;</p>
			<div className="flex items-center gap-3">
				<div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border border-border">
					<Users size={14} className="text-primary" />
				</div>
				<div>
					<div className="text-sm font-semibold text-foreground">{testimonial.name}</div>
					<div className="text-[11px] text-muted-foreground font-mono">
						<MapPin size={9} className="inline mr-0.5" />
						{testimonial.location}
					</div>
				</div>
			</div>
		</div>
	);
}
