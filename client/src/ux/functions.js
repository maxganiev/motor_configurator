import { inputModel } from './global_dom';
import { selectorModel } from './global_dom';
import { selectorRpm } from './global_dom';
import { selectorPower } from './global_dom';
import { selectorBrakes } from './global_dom';
import { selectorPaws } from './global_dom';
import { checkboxEncoder } from './global_dom';
import { checkboxConicShaft } from './global_dom';
import { selectorVentSystem } from './global_dom';
import { fillExtraOptions } from '../motordata/options_list';
import { optionsConfig } from '../motordata/options_list';
import { regex } from './global_vars';
import { motorsAllSeriesFlatten } from '../motordata/models';

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

	//cleaning up selector options list while typing:
	Array.from(selectorBrakes.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorVentSystem.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorPaws.children).forEach((child) => child.remove());
}

//селективный объект для получения опций:
const optionsSelector = {
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
		console.log(this);

		fillExtraOptions(this.frameSize, this.encoderIsChecked, this.ventSystemOptionValue);
	},
};

//получение списка опций из полей ввода (селекторы, чекбоксы):
export function getOptions(selectorsId) {
	if (selectorModel.value !== '-') {
		optionsSelector.setOptionsList();

		const { electroMagneticBreak, paws, ventSystem } = optionsConfig;

		if (Array.isArray(selectorsId)) {
			populateOptionsList(selectorsId, [electroMagneticBreak.splice(1), paws, ventSystem.splice(1)]);
		} else {
			populateOptionsList(selectorsId, [electroMagneticBreak.splice(1)]);
		}

		checkboxConicShaft.disabled = optionsConfig.conicShaftDisabled;
	}
}

//функция для наполнения списка опций:
function populateOptionsList(selectorsId, srcData) {
	selectorsId !== null && selectorsId.forEach((selector, index) => fillOptions(selector, srcData[index]));
	console.log(srcData);

	function fillOptions(parentSelector, srcData) {
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

		if (
			(typeof query === 'string' && query.length < 4 && !query.match(regex)) ||
			(typeof query === 'object' && Array.isArray(query) && query.some((param) => param === '-'))
		) {
			Array.from(selectorModel.children).forEach((child, index) => index !== 0 && child.remove());
		}
	}, 400);
}
