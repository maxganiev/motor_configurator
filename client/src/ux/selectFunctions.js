import { selectorModel } from './global_dom';
import { selectorRpm } from './global_dom';
import { selectorPower } from './global_dom';
import { selectorBrakes } from './global_dom';
import { selectorPaws } from './global_dom';
import { checkboxEncoder } from './global_dom';
import { checkboxConicShaft } from './global_dom';
import { selectorVentSystem } from './global_dom';
import { fillBaseOptions } from '../motordata/base_options_list';
import { optionsConfig } from '../motordata/base_options_list';
import { regex } from './global_vars';
import { motorsAllSeriesFlatten } from '../motordata/models';
import { imageDrawing } from './global_dom';
import { imgSrcData } from '../motordata/imgSrcData';
import { setImgSrcData } from '../motordata/imgSrcData';
import { chart_connectionParams } from './global_dom';
import { chart_connectionValues } from './global_dom';
import { areaSelection } from './global_dom';
import { areaRender } from './global_dom';
import { fillExtraOptions } from '../motordata/extra_options_list';
import { setTransforms } from '../ui/ui';
import { showWarning } from '../motordata/extra_options_list';

//получение списка моделей и очистка UI:
export function searchModel(e) {
	const filteredResults = [];

	if (e.target.id === 'input-model') {
		getModel(e.target.value, filteredResults);
		selectorBrakes.value = selectorPower.value = selectorRpm.value = selectorPaws.value = selectorVentSystem.value = '-';
		checkboxEncoder.checked = checkboxConicShaft.checked = false;
	} else {
		getModel([selectorPower.value, selectorRpm.value], filteredResults);
		selectorBrakes.value = selectorPaws.value = selectorVentSystem.value = '-';
		checkboxEncoder.checked = checkboxConicShaft.checked = false;
	}

	//cleaning up selector options list while typing or re-selecting:
	Array.from(selectorBrakes.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorVentSystem.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorPaws.children).forEach((child) => child.remove());

	//cleaning up encoder options list if it was not unchecked before typing for a new model:
	Array.from(areaSelection.children).some((child) => child.id.includes('encoder-group-id') && child.remove());

	//setting btn UI used for tempDataSensors selection back to default while typing:
	Array.from(document.querySelectorAll('.btn-option-selected')).forEach((btn) =>
		btn.classList.replace('btn-option-selected', 'btn-option-non-selected')
	);
}

//селективный объект для получения опций:
export const optionsSelector = {
	setOptionsList: function () {
		const sliced = selectorModel.value
			.slice(4)
			.split('')
			.map((w) => w !== ' ' && !isNaN(Number(w)) && Number(w));

		this.frameSize = Number(sliced.slice(0, sliced.indexOf(false)).join(''));
		this.model = selectorModel.value;
		this.ventSystemOptionValue = selectorVentSystem.value;
		this.brakeType = selectorBrakes.value;
		this.encoderIsChecked = checkboxEncoder.checked;
		this.conicShaftIsChecked = checkboxConicShaft.checked;
		this.pawType = selectorPaws.value === '' ? 'Лапы (1001/1081)' : selectorPaws.value;

		//elements temporarily unacceccisble with initial render:
		const checkboxCurrentInsulatingBearing =
			document.getElementById('checkbox-currentInsulatingBearing') === null && this.frameSize >= 200
				? true
				: document.getElementById('checkbox-currentInsulatingBearing') === null && this.frameSize < 200
				? false
				: document.getElementById('checkbox-currentInsulatingBearing').checked;

		const selectorImportBearings =
			document.getElementById('selector-importBearings') === null
				? '-'
				: document.getElementById('selector-importBearings').value;

		fillBaseOptions(
			this.frameSize,
			this.encoderIsChecked,
			this.ventSystemOptionValue,
			this.brakeType,
			checkboxCurrentInsulatingBearing,
			selectorImportBearings
		);

		fillExtraOptions();

		setTransforms(areaSelection.parentElement, '0px', 'Y');
		setTransforms(areaRender, '0px', 'Y');

		setTimeout(() => {
			setModelNameAndDescription();
		}, 450);

		const _this = this;
		this.currSelectionToGetImg = {
			e: _this.encoderIsChecked,
			v: _this.ventSystemOptionValue,
			b: _this.brakeType,
		};

		this.currSelectionToGetChartDims = {
			b: _this.brakeType !== '-',
			v: _this.ventSystemOptionValue.includes('Встроенный вентилятор'),
			naezV: _this.ventSystemOptionValue.includes('Пристроенный вентилятор'),
			e: _this.encoderIsChecked,
		};
	},
};

//получение списка опций из полей ввода (селекторы, чекбоксы):
export function getOptions(selectorsId, operationType) {
	if (selectorModel.value !== '-') {
		optionsSelector.setOptionsList();

		const { electroMagneticBreak, paws, ventSystem } = optionsConfig;

		if (Array.isArray(selectorsId)) {
			if (selectorsId.length > 1) {
				populateOptionsList(selectorsId, [electroMagneticBreak.splice(1), paws, ventSystem.splice(1)], operationType);
			} else {
				if (selectorsId[0].id === 'selector-breaks') {
					populateOptionsList(selectorsId, [electroMagneticBreak], operationType);
				} else {
					populateOptionsList(selectorsId, [ventSystem], operationType);
				}
			}
		}

		//resetting checkboxes:
		checkboxEncoder.disabled = !optionsConfig.encoderIsDisabled;
		checkboxConicShaft.disabled = optionsConfig.conicShaftDisabled;

		const { frameSize, brakeType, encoderIsChecked, ventSystemOptionValue, conicShaftIsChecked, pawType } = optionsSelector;

		setImgSrcData(frameSize, encoderIsChecked, ventSystemOptionValue, conicShaftIsChecked);

		setDrawing(frameSize, brakeType, encoderIsChecked, ventSystemOptionValue, conicShaftIsChecked, pawType);

		setChartConnectionDims(frameSize, brakeType, pawType, ventSystemOptionValue, encoderIsChecked);
	}
}

//функция для наполнения списка опций:
export function populateOptionsList(selectorsId, srcData, operationType) {
	selectorsId !== null && selectorsId.forEach((selector, index) => fillOptions(selector, srcData[index]));

	function fillOptions(parentSelector, srcData) {
		//перезаливка опций:
		if (operationType === 'populateOptionsList') {
			parentSelector.id !== 'selector-paws'
				? Array.from(parentSelector.children).forEach((child, index) => index !== 0 && child.remove())
				: Array.from(parentSelector.children).forEach((child) => child.remove());

			srcData.forEach((obj) => {
				const option = document.createElement('option');
				option.value = obj.type;
				option.innerText = obj.type;
				option.disabled = (obj.selectable !== undefined || typeof obj.selectable !== 'undefined') && !obj.selectable;
				option.setAttribute('data-itemId', obj.id);

				parentSelector.appendChild(option);
			});
		}

		//перезаливка свойств disabled:
		if (operationType === 'resetOptionsList') {
			Array.from(selectorsId[0].children).forEach((child, index) => {
				child.disabled = !srcData[index].selectable;
			});
		}
	}
}

//поиск моделей по текстовому вводу либо по выбору числа оборотов/ мощности:
export function getModel(query, targetArr) {
	setTimeout(() => {
		if (query.length > 4 && query.match(regex) !== null && typeof query === 'string') {
			targetArr = motorsAllSeriesFlatten.filter((result) => result.name.toLowerCase().includes(query.toLowerCase()));
		} else if (typeof query === 'object' && Array.isArray(query)) {
			targetArr = motorsAllSeriesFlatten.filter(
				(result) => String(result.power) === String(query[0]) && String(result.rpm) === String(query[1])
			);
		}

		Array.from(selectorModel.children).forEach((child, index) => index !== 0 && child.remove());

		targetArr.forEach((obj) => {
			const option = document.createElement('option');
			option.value = obj.name;
			option.innerText = obj.name;
			option.setAttribute('data-itemId', obj.frameSize);

			selectorModel.appendChild(option);
		});

		//автопроставление модели и опций для нее при поиске, если модель найдена и опция подружена в селект:
		if (selectorModel.children[1] !== undefined && typeof selectorModel.children[1] !== undefined) {
			selectorModel.children[1].selected = true;
			getOptions([selectorBrakes, selectorPaws, selectorVentSystem], 'populateOptionsList');

			//refilling options UI for currentIsol. and import bearings while typing for a new model:
			setTimeout(() => {
				const checkboxCurrentInsulatingBearing = document.getElementById('checkbox-currentInsulatingBearing');
				const selectorImportBearings = document.getElementById('selector-importBearings');

				if (
					Array.from(checkboxCurrentInsulatingBearing.classList).some((className) => className.includes('-checked')) &&
					optionsSelector.frameSize < 200
				) {
					checkboxCurrentInsulatingBearing.checked = false;

					checkboxCurrentInsulatingBearing.classList.replace(
						'checkbox-currentInsulatingBearing-checked',
						'checkbox-currentInsulatingBearing-unchecked'
					);

					Array.from(selectorImportBearings.children).forEach((child) => {
						child.disabled = false;
					});
				} else if (
					Array.from(checkboxCurrentInsulatingBearing.classList).some((className) =>
						className.includes('-unchecked')
					) &&
					optionsSelector.frameSize >= 200
				) {
					if (
						selectorImportBearings.value ===
						'Передний и задний шариковые подшипники (производства SKF/NSK/KOYO/FAG)'
					) {
						checkboxCurrentInsulatingBearing.checked = false;
						selectorImportBearings.children[1].disabled = true;
					} else {
						checkboxCurrentInsulatingBearing.checked = true;
						checkboxCurrentInsulatingBearing.classList.replace(
							'checkbox-currentInsulatingBearing-unchecked',
							'checkbox-currentInsulatingBearing-checked'
						);
						selectorImportBearings.children[1].disabled = false;
						selectorImportBearings.children[2].disabled = true;
					}
				}

				//вывод предупреждения при отсутствии выбора токоиз. подшипника для двигателей >= 200 габ.:
				showWarning();
			}, 50);
		}

		if (
			(typeof query === 'string' && query.length < 4 && !query.match(regex)) ||
			(typeof query === 'object' && Array.isArray(query) && query.some((param) => param === '-'))
		) {
			Array.from(selectorModel.children).forEach((child, index) => index !== 0 && child.remove());
		}
	}, 400);
}

//выбор чертежа в зависимости от ввода (селекторы / чекбоксы):
function setDrawing(frameSize, brakeType, encoderIsChecked, ventSystemOptionValue, conicShaftIsChecked, pawType) {
	const pathStart =
		brakeType !== '-' || encoderIsChecked || ventSystemOptionValue !== '-' || conicShaftIsChecked
			? 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/'
			: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/';

	const path_vent_part =
		ventSystemOptionValue.includes('наездник') && frameSize >= 112 && frameSize <= 132
			? 'naezd/do_132/'
			: ventSystemOptionValue.includes('наездник') && frameSize > 132 && frameSize <= 250
			? 'naezd/160_250/'
			: ventSystemOptionValue.includes('наездник') && frameSize > 250
			? 'naezd/ot_280/'
			: '';

	const path_shaft_part = conicShaftIsChecked === true ? 'shaft/' : '';
	let restPath = '';
	let completePath = '';

	switch (pawType) {
		case 'Лапы (1001/1081)':
			//case for DIN:
			restPath =
				brakeType !== '-' || encoderIsChecked || ventSystemOptionValue !== '-' || conicShaftIsChecked
					? path_vent_part + path_shaft_part + 'paws/'
					: '1001_small.png';
			break;

		case 'Лапы + Фланец (2001/2081)':
			//case for DIN:
			restPath =
				brakeType !== '-' || encoderIsChecked || ventSystemOptionValue !== '-' || conicShaftIsChecked
					? path_vent_part + path_shaft_part + 'large_flange_paws/'
					: frameSize <= 180 &&
					  (brakeType === '-' || !encoderIsChecked || ventSystemOptionValue === '-' || !conicShaftIsChecked)
					? '2001_below_small.png'
					: '2001_over_small.png';

			break;

		case 'Фланец (3081)':
			//case for DIN:
			restPath =
				brakeType !== '-' || encoderIsChecked || ventSystemOptionValue !== '-' || conicShaftIsChecked
					? path_vent_part + path_shaft_part + 'flange/'
					: frameSize <= 132 &&
					  (brakeType === '-' || !encoderIsChecked || ventSystemOptionValue === '-' || !conicShaftIsChecked)
					? '3001_below_small.png'
					: '3001_over.png';

			break;

		case 'Лапы + Малый фланец (2181)':
			//case for DIN:
			restPath =
				brakeType !== '-' || encoderIsChecked || ventSystemOptionValue !== '-' || conicShaftIsChecked
					? path_vent_part + path_shaft_part + 'little_flange_paws/'
					: '2101_small.png';

			break;

		//case for DIN (B14:)
		//restPath = path_shaft_part + 'little_flange/';
	}

	const currSelectionIndex = optionsConfig.options.findIndex(
		(optionObj) => JSON.stringify(optionObj) === JSON.stringify(optionsSelector.currSelectionToGetImg)
	);

	completePath = `${pathStart}${restPath}${imgSrcData.data[currSelectionIndex].path}`;

	imageDrawing.setAttribute('src', completePath);
}

//создание табличной части с присеоед. размерами и подтягивание размеров:
const chartSelOptions = [
	{ b: false, v: false, naezV: false, e: false },
	{ b: true, v: false, naezV: false, e: false },
	{ b: false, v: true, naezV: false, e: false },
	{ b: false, v: false, naezV: true, e: false },
	{ b: false, v: false, naezV: false, e: true },
	{ b: true, v: false, naezV: false, e: true },
	{ b: true, v: true, naezV: false, e: false },
	{ b: true, v: false, naezV: true, e: false },
	{ b: false, v: true, naezV: false, e: true },
	{ b: false, v: false, naezV: true, e: true },
	{ b: true, v: true, naezV: false, e: true },
	{ b: true, v: false, naezV: true, e: true },
];
export function setChartConnectionDims(frameSize, brakeType, pawType, ventSystemOptionValue, encoderIsChecked) {
	let connectionParams = [];

	//will be fetched
	let connectionValues = [];

	const currSelectionIndex = chartSelOptions.findIndex(
		(option) => JSON.stringify(option) === JSON.stringify(optionsSelector.currSelectionToGetChartDims)
	);

	switch (pawType) {
		case 'Лапы (1001/1081)':
			if (brakeType !== '-' || ventSystemOptionValue !== '-' || encoderIsChecked) {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'];
			} else {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5']
			}

			break;

		case 'Лапы + Фланец (2001/2081)':
			if (brakeType !== '-' || ventSystemOptionValue !== '-' || encoderIsChecked) {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4']
			} else {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5']
			}

			break;

		case 'Фланец (3081)':
			if (brakeType !== '-' || ventSystemOptionValue !== '-' || encoderIsChecked) {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4']
			} else {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5']
			}

			break;

		case 'Лапы + Малый фланец (2181)':
			if (brakeType !== '-' || ventSystemOptionValue !== '-' || encoderIsChecked) {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4']
			} else {
				//prettier-ignore
				connectionParams = ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5']
			}

			break;
	}

	while (chart_connectionParams.firstElementChild) {
		chart_connectionParams.removeChild(chart_connectionParams.firstElementChild);
	}

	connectionParams.forEach((param) => {
		const listItem = document.createElement('li');
		listItem.innerHTML = param;

		chart_connectionParams.appendChild(listItem);
	});

	chart_connectionParams.style.borderBottom = '0.5px #000 solid';
}

//формирование наименования двигателя и описательной части к чертежу:
function setModelNameAndDescription() {
	const { frameSize, model, ventSystemOptionValue, brakeType, encoderIsChecked, conicShaftIsChecked, pawType } = optionsSelector;

	let modelName = model;

	const checkboxCurrentInsulatingBearing = document.getElementById('checkbox-currentInsulatingBearing');

	console.log(model, optionsSelector, checkboxCurrentInsulatingBearing.checked);
}
