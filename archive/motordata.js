//сырые входные данные:
const motorData = [
	{
		standard: '5АИ',
		techData: {
			frameSize: 50,
			series: ['MA2', 'MA4', 'MB2', 'MB4'],
			power: [0.09, 0.06, 0.12, 0.09],
			voltage: '220/380',
			rpm: [3000, 1500, 3000, 1500],
			statorCurrent: ['0.52/0.3', '0.47/0.27', '0.64/0.37', '0.68/0.39'],
		},
	},

	{
		standard: '5АИ',
		techData: {
			frameSize: 63,
			series: ['A2', 'A4', 'A6', 'B2', 'B4', 'B6'],
			power: [0.37, 0.25, 0.18, 0.55, 0.37, 0.25],
			voltage: '220/380',
			rpm: [3000, 1500, 1000, 3000, 1500, 1000],
			statorCurrent: ['1.6/0.92', '1.44/0.83', '1.33/0.77', '2.27/1.31', '2.04/1.18', '1.65/0.95'],
		},
	},

	{
		standard: '5АИ',
		techData: {
			frameSize: 200,
			series: ['M2', 'M4', 'M6', 'M8', 'L2', 'L4', 'L6', 'L8'],
			power: [37, 37, 22, 18.5, 45, 45, 30, 22],
			voltage: '380/660',
			rpm: [3000, 1500, 1000, 750, 3000, 1500, 1000, 750],
			statorCurrent: [
				'69.52/40.03',
				'68.37/39.36',
				'44.27/25.49',
				'39.04/22.48',
				'82.67/47.6',
				'83.15/47.87',
				'59.65/34.35',
				'45.91/26.43',
			],
		},
	},
];

//формирование наименований и перечня базовых хар-к:
motorData.forEach((motorType) => {
	motorType.names = [];

	motorType.techData.series.forEach((ser, index) => {
		motorType.names.push(
			`${motorType.standard} ${motorType.techData.frameSize} ${ser} ${motorType.techData.power[index]}/${motorType.techData.rpm[index]}`
		);
	});
});

//фактические данные электродвигателей для клиента:
const motorsAllSeries = [];

motorData.forEach((motorObject) => {
	const { frameSize, power, rpm, voltage } = motorObject.techData;

	motorsAllSeries.push(
		motorObject.names.map(
			(name, index) =>
				(newMotorObject = {
					name,
					frameSize,
					power: power[index],
					rpm: rpm[index],
					voltage,
				})
		)
	);
});

const motorsAllSeriesFlatten = motorsAllSeries.flat(Infinity);

module.exports = motorsAllSeriesFlatten;
