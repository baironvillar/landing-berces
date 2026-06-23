import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { ContactInfo } from "../types";

export const CONTACT_INFO: ContactInfo[] = [
	{ icon: Phone, label: "Teléfono", value: "+56 9 4619 8238" },
	{ icon: Mail, label: "Email", value: "berces.ltda.spa@gmail.com" },
	{ icon: MapPin, label: "Cobertura", value: "Antofagasta" },
	{ icon: Clock, label: "Horario", value: "Lun–Vie 8:00–19:00 · Sáb 9:00–14:00" },
];
