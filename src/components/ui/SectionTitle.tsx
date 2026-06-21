interface SectionTitleProps {
	label: string;
	title: string;
	highlight: string;
	center?: boolean;
}

export function SectionTitle({ label, title, highlight, center }: SectionTitleProps) {
	return (
		<div className={center ? "mb-14 text-center" : "mb-14"}>
			<div className="text-xs font-mono text-primary tracking-widest mb-3 uppercase">{`// ${label}`}</div>
			<h2 className="text-4xl lg:text-5xl font-extrabold font-heading">
				{title}
				<br />
				<span className="text-primary">{highlight}</span>
			</h2>
		</div>
	);
}
