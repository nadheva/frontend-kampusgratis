function GradientSVG() {
	const idCSS = "hello";
	const gradientTransform = `rotate(360)`;
	return (
		<svg style={{ height: 0 }}>
			<defs>
				<linearGradient id={idCSS} gradientTransform={gradientTransform}>
					<stop offset="26.29%" stopColor="#FDB415" />
					<stop offset="65.56%" stopColor="#16D3FD" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default GradientSVG;
