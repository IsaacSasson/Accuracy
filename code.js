var speed = 100;
var duration = 0.2;
var delayTime = 0.05;
var angleStep = 10;
var count = 0;


async function startProgram() {
	speed = 100;
	duration = 0.2;
	delayTime = 0.05;
	angleStep = 10;
	count = 0;
	for (var _i0 = 0; _i0 < 36; ++_i0) {
		await roll(360 - count * angleStep, speed, duration);
		count = count + 1;
		await delay(0.025);
	}
	count = 0;
	for (var _i1 = 0; _i1 < 36; ++_i1) {
		await roll(count * angleStep, speed, duration);
		count = count + 1;
		await delay(0.025);
	}
}
