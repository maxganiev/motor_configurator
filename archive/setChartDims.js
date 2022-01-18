const motorsAllSeriesFlatten = require('./motordata');
const assets = {};

function setDims(frameSize, breakType, ventSystem, encoderIsChecked, conicShaftIsChecked, pawType) {
	const selOptions = [];
	const brakeIsSelected = breakType !== '-';
	const brakeOptions = (encoderOptions = [true, false]);
	const conicShaftOptions = [true, false];
	const ventSystemOptions =
		frameSize <= 71
			? ['-', 'Встроенный вентилятор с питанием 220В']
			: frameSize >= 80 && frameSize <= 100
			? ['-', 'Встроенный вентилятор с питанием 220В', 'Встроенный вентилятор с питанием 380В']
			: frameSize >= 112 && frameSize <= 200
			? [
					'-',
					'Встроенный вентилятор с питанием 220В',
					'Встроенный вентилятор с питанием 380В',
					'Пристроенный вентилятор (наездник) с питанием 220В',
			  ]
			: frameSize >= 225 && frameSize <= 250
			? [
					'-',
					'Встроенный вентилятор с питанием 220В',
					'Встроенный вентилятор с питанием 380В',
					'Пристроенный вентилятор (наездник) с питанием 380В',
			  ]
			: frameSize >= 280
			? ['-', 'Встроенный вентилятор с питанием 380В', 'Пристроенный вентилятор (наездник) с питанием 380В']
			: null;

	const pawsOptions =
		frameSize <= 112
			? ['Лапы (1001/1081)', 'Лапы + Фланец (2001/2081)', 'Фланец (3081)', 'Лапы + Малый фланец (2181)']
			: ['Лапы (1001/1081)', 'Лапы + Фланец (2001/2081)', 'Фланец (3081)'];

	if (frameSize >= 200 && ((brakeIsSelected && breakType.includes('независимым питанием')) || !brakeIsSelected)) {
		brakeOptions.forEach((brakeIsSelected) => {
			encoderOptions.forEach((encoderIsChecked) => {
				conicShaftOptions.forEach((conicShaftIsChecked) => {
					ventSystemOptions.forEach((ventSystem) => {
						pawsOptions.forEach((pawType) => {
							selOptions.push({ brakeIsSelected, encoderIsChecked, ventSystem, pawType, conicShaftIsChecked });
						});
					});
				});
			});
		});

		const currSelection = { brakeIsSelected, encoderIsChecked, ventSystem, pawType, conicShaftIsChecked };
		const currSelectionIndex = selOptions.findIndex((currOption) => JSON.stringify(currSelection) === JSON.stringify(currOption));

		console.log(selOptions, selOptions.length, 1);

		const dimsValues = [
			{
				//first out of 96
				id: 0,
				raw: {
					model: '5АИ 200 M2',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'M18х2.5', '50'],
				},
				raw: {
					model: '5АИ 200 M4',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'M18х2.5', '50'],
				},
				raw: {
					model: '5АИ 200 M6',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'M18х2.5', '50'],
				},
				raw: {
					model: '5АИ 200 М8',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50'],
				},
				raw: {
					model: '5АИ 200 L2',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50'],
				},
				raw: {
					model: '5АИ 200 L4',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50'],
				},
				raw: {
					model: '5АИ 200 L6',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50'],
				},
				raw: {
					model: '5АИ 200 L8',
					data: ['1119', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50'],
				},
			},
		];

		assets.options = selOptions.map((option, index) => (resObj = { ...option, dims: [] }));
	} else if (frameSize >= 200 && ((brakeIsSelected && !breakType.includes('независимым питанием')) || !brakeIsSelected)) {
		brakeOptions.forEach((brakeIsSelected) => {
			encoderOptions.forEach((encoderIsChecked) => {
				conicShaftOptions.forEach((conicShaftIsChecked) => {
					pawsOptions.forEach((pawType) => {
						selOptions.push({ brakeIsSelected, encoderIsChecked, pawType, conicShaftIsChecked });
					});
				});
			});
		});

		const currSelection = { brakeIsSelected, encoderIsChecked, pawType, conicShaftIsChecked };
		const currSelectionIndex = selOptions.findIndex((currOption) => JSON.stringify(currSelection) === JSON.stringify(currOption));

		console.log(selOptions, selOptions.length, 2);
	} else if (frameSize < 200 && ((brakeIsSelected && breakType.includes('независимым питанием')) || !brakeIsSelected)) {
		brakeOptions.forEach((brakeIsSelected) => {
			encoderOptions.forEach((encoderIsChecked) => {
				ventSystemOptions.forEach((ventSystem) => {
					pawsOptions.forEach((pawType) => {
						selOptions.push({ brakeIsSelected, encoderIsChecked, ventSystem, pawType });
					});
				});
			});
		});

		const currSelection = { brakeIsSelected, encoderIsChecked, ventSystem, pawType };
		const currSelectionIndex = selOptions.findIndex((currOption) => JSON.stringify(currSelection) === JSON.stringify(currOption));
		console.log(selOptions, selOptions.length, 3);
	} else {
		brakeOptions.forEach((brakeIsSelected) => {
			encoderOptions.forEach((encoderIsChecked) => {
				pawsOptions.forEach((pawType) => {
					selOptions.push({ brakeIsSelected, encoderIsChecked, pawType });
				});
			});
		});

		const currSelection = { brakeIsSelected, encoderIsChecked, pawType };
		const currSelectionIndex = selOptions.findIndex((currOption) => JSON.stringify(currSelection) === JSON.stringify(currOption));
		console.log(selOptions, selOptions.length, 4);
	}

	if (frameSize <= 71) {
		//опциональные объекты, кол-во которых зависит от длины массива selOptions
		const dimsPerModel = [
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
			{
				data: [
					[10, 20, 30],
					[4, 5, 6],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
					[7, 8, 9],
					[1, 2, 3],
					[4, 5, 6],
					[7, 8, 9],
				],
			},
		];

		// const motorModels = motorsAllSeriesFlatten
		// 	.filter((motorItem) => motorItem.frameSize <= frameSize)
		// 	.map((item, index) => (resItem = { name: item.name, dims: dimsPerModel[currSelectionIndex].data[index] }));

		//console.log(motorModels, currSelectionIndex, selOptions.length);
	}
}

module.exports = { setDims, assets };
