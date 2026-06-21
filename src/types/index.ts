import type { LucideIcon } from "lucide-react";

export interface NavLink {
	label: string;
	href: string;
}

export interface Service {
	icon: LucideIcon;
	title: string;
	desc: string;
	tags: string[];
}

export interface Stat {
	value: string;
	label: string;
}

export interface Testimonial {
	name: string;
	location: string;
	stars: number;
	text: string;
}

export interface ProcessStep {
	step: string;
	title: string;
	desc: string;
}

export interface ContactInfo {
	icon: LucideIcon;
	label: string;
	value: string;
}

export interface ContactFormData {
	name: string;
	phone: string;
	email: string;
	message: string;
	service: string;
}
