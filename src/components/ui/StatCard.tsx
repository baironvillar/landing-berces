import type { Stat } from "../../types";

interface StatCardProps {
	stat: Stat;
}

export function StatCard({ stat }: StatCardProps) {
	return (
		<div className="border border-border bg-card/50 rounded p-3">
			<div className="text-2xl font-extrabold text-primary font-heading">{stat.value}</div>
			<div className="text-xs text-muted-foreground mt-0.5 font-mono">{stat.label}</div>
		</div>
	);
}
