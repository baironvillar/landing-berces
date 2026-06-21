import type { ReactNode } from "react";

interface ButtonProps {
	href?: string;
	onClick?: () => void;
	variant?: "primary" | "outline";
	className?: string;
	children: ReactNode;
}

export function Button({ href, onClick, variant = "primary", className = "", children }: ButtonProps) {
	const base = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold transition-colors";
	const styles = {
		primary: "bg-primary text-primary-foreground hover:bg-primary/90",
		outline: "border border-border text-foreground hover:border-primary/50 hover:bg-secondary/50",
	};

	const cls = `${base} ${styles[variant]} ${className}`;

	if (href) {
		return (
			<a href={href} className={cls}>
				{children}
			</a>
		);
	}

	return (
		<button type="button" onClick={onClick} className={cls}>
			{children}
		</button>
	);
}
