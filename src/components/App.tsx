import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./sections/Footer";
import { Hero } from "./sections/Hero";
import { Navbar } from "./sections/Navbar";
import { ProcessSection } from "./sections/ProcessSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { WhatsAppFloat } from "./sections/WhatsAppFloat";

export default function App() {
	return (
		<div className="min-h-screen bg-background text-foreground font-sans">
			<Navbar />
			<Hero />
			<ServicesSection />
			<ProcessSection />
			<AboutSection />
			<TestimonialsSection />
			<ContactSection />
			<WhatsAppFloat />
			<Footer />
		</div>
	);
}
