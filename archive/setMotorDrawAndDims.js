const motorsAllSeriesFlatten = require('./motordata');
const { optionsConfig } = require('./motorExtraOptions');
//const assetsData = require('./assetsData');

const assetsConfig = {};
//const assets = {};

// const options = [];

// const encoderOptions = (conicShaftOptions = [true, false]);
// const ventSystemOptions = [
// 	'-',
// 	'Встроенный вентилятор с питанием 220В',
// 	'Встроенный вентилятор с питанием 380В',
// 	'Пристроенный вентилятор (наездник) с питанием 220В',
// 	'Пристроенный вентилятор (наездник) с питанием 380В',
// ];

// encoderOptions.forEach((encoderIsChecked) => {
// 	conicShaftOptions.forEach((conicShaftIsChecked) => {
// 		ventSystemOptions.forEach((ventSystemOptionValue) => {
// 			options.push({ encoderIsChecked, conicShaftIsChecked, ventSystemOptionValue });
// 		});
// 	});
// });

const setMotorDrawAndDims = function (model, encoderIsChecked, conicShaftIsChecked, ventSystemOptionValue, brakeType, pawType) {
	assetsConfig.selectionOptions = [];

	const filteredModels = motorsAllSeriesFlatten.filter((motorObject) => motorObject.name === model);
	const currSelection = { encoderIsChecked, conicShaftIsChecked, ventSystemOptionValue };

	//const selectionIndex = options.findIndex((selectionObj) => JSON.stringify(selectionObj) === JSON.stringify(currSelection));

	//const filteredBrakes = optionsConfig.electroMagneticBreak.filter((brakeObject) => brakeObject.selectable === true);
	const filteredVentSystem = optionsConfig.ventSystem.filter((ventSystObject) => ventSystObject.selectable === true);

	filteredModels.forEach((model) => {
		optionsConfig.paws.forEach((pawType) => {
			filteredVentSystem.forEach((ventSystem) => {
				assetsConfig.selectionOptions.push({
					model: model.name,
					pawType: pawType.type,
					ventSystem: ventSystem.id,
				});
			});
		});
	});

	// const dataIndex = assetsConfig.selectionOptions.findIndex(
	// 	(obj) => JSON.stringify(obj) === JSON.stringify({ brakeType, model, pawType })
	// );
	// assetsConfig.assets = assetsData[selectionIndex].srcData.filter((obj) => obj.model === model)[0].data[dataIndex];

	// console.log(dataIndex, selectionIndex);
};

module.exports = { setMotorDrawAndDims, assetsConfig };
