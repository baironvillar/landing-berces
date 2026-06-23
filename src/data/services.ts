import { Camera, ShieldCheck, Wrench, Zap } from "lucide-react";
import type { Service } from "../types";

export const SERVICES: Service[] = [
	{
		icon: Camera,
		title: "Venta de Cámaras",
		desc: "Comercializamos las mejores marcas del mercado: Hikvision, Dahua, Axis y más. Cámaras IP, analógicas, PTZ y domo para todo tipo de instalación.",
		tags: ["HD / 4K", "Interior / Exterior", "Visión Nocturna"],
	},
	{
		icon: Wrench,
		title: "Instalación Profesional",
		desc: "Realizamos instalaciones residenciales y comerciales en Antofagasta con garantía de 12 meses.",
		tags: ["Visita Técnica Gratis", "Garantía 12 meses", "Soporte Técnico"],
	},
	{
		icon: ShieldCheck,
		title: "Mantención Preventiva",
		desc: "Planes de mantención periódica para asegurar el óptimo funcionamiento de tu sistema de vigilancia. Limpieza, actualización de firmware y revisión general.",
		tags: ["Plan Mensual", "Plan Trimestral", "Plan Anual"],
	},
	{
		icon: Zap,
		title: "Reparación y Soporte",
		desc: "Diagnóstico y reparación de sistemas CCTV dañados. Recuperamos grabaciones, reparamos DVR/NVR y sustituimos equipos defectuosos con rapidez.",
		tags: ["Diagnóstico Express", "Recuperación de Video", "Repuestos Originales"],
	},
];
