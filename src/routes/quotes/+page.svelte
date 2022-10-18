<script type="ts">
	let canvas;
	const quotes = [
		'Who are the stakeholders\n\nWhat can they gain or lose',
		'What is the actual solution\n\nAnd who has the power to enact it',
		'Where can I find that info\n\nand is it worth my time'
	];

	const render = (canvas: HTMLCanvasElement) => {
		console.log(canvas);
		const { width, height } = canvas;

		const ctx = canvas.getContext('2d');
		const xPos = width / 2;
		const yPos = height / 2;
		const fontSize = 120;

		ctx!.fillStyle = '#111111';
		ctx?.fillRect(0, 0, width, height);

		ctx!.textBaseline = 'middle';
		ctx!.textAlign = 'center';
		ctx!.font = `${fontSize}px Arial`;
		ctx!.fillStyle = '#cccccc';
		const quote = quotes[1].split('\n');

		quote.forEach((q, i) => {
			ctx!.fillText(q, xPos, -fontSize + yPos + i * fontSize);
		});
	};
</script>

<canvas use:render id="test" width="1920" height="1080" style="border:1px solid black" />
