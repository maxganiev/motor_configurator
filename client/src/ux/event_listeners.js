import {
	inputModel,
	selectorModel,
	selectorRpm,
	selectorPower,
	selectorBrakes,
	selectorPaws,
	checkboxEncoder,
	checkboxConicShaft,
	selectorVentSystem,
	areaFilter,
} from './global_dom';
import {
	searchModel,
	getOptions,
	optionsSelector,
	setModelNameAndDescription,
	fillUpgradesChart,
	populateOptionsList,
} from './selectFunctions';
import { fillBaseOptions, optionsConfig } from '../motordata/base_options_list';
import { mask } from '../ui/ui';

export function globeEvHandler() {
	inputModel.oninput = (e) => searchModel(e);

	selectorPower.onchange = selectorRpm.onchange = (e) => searchModel(e);

	//selecting a motor model:
	selectorModel.addEventListener('change', () => {
		getOptions([selectorBrakes, selectorPaws, selectorVentSystem], 'populateOptionsList');
	});
	//selecting a paw type:
	selectorPaws.addEventListener('change', () => {
		getOptions(null);
	});

	//selecting a breaks type:
	selectorBrakes.addEventListener('change', (e) => {
		getOptions([selectorVentSystem], 'resetOptionsList');

		const selOptionId = Array.from(e.target.children)
			.find((child) => child.innerText === e.target.value)
			.getAttribute('data-itemid');

		if (e.target.value !== '-') {
			setModelNameAndDescription('addData', 'electroMagneticBreak', selOptionId);
		} else {
			setModelNameAndDescription('removeData', null, selOptionId);
		}

		fillUpgradesChart();
	});

	//selecting vent system type:
	selectorVentSystem.addEventListener('change', (e) => {
		getOptions([selectorBrakes], 'resetOptionsList');

		//перезаливка свойств selected для ip:
		const selectorIp = document.getElementById('selector-ip');

		e.target.value !== '-' &&
			Array.from(selectorIp.children).forEach((child, index) => {
				child.selected = optionsConfig.ipVersion[index].selectedByDefault;
			});

		const selOptionId = Array.from(e.target.children)
			.find((child) => child.innerText === e.target.value)
			.getAttribute('data-itemid');

		if (e.target.value !== '-') {
			setModelNameAndDescription('addData', 'ventSystem', selOptionId);
		} else {
			setModelNameAndDescription('removeData', null, selOptionId);
		}

		fillUpgradesChart();

		//refilling ip description when choosing a new type of vent:
		const selOptionIdOptionIP = Array.from(selectorIp.children)
			.find((child) => child.innerText === selectorIp.value)
			.getAttribute('data-itemid');

		setModelNameAndDescription('addData', 'ipVersion', selOptionIdOptionIP);
	});

	//choosing encoder:
	checkboxEncoder.addEventListener('change', () => {
		getOptions([selectorBrakes], 'resetOptionsList');
		fillUpgradesChart();
	});

	//chosing conic shaft:
	checkboxConicShaft.addEventListener('change', (e) => {
		getOptions(null);

		if (e.target.checked) {
			setModelNameAndDescription('addData', 'conicShaft', e.target.id);
		} else {
			setModelNameAndDescription('removeData', null, e.target.id);
		}
	});

	//обработчики с делегированием:
	document.body.addEventListener('change', (e) => {
		if (e.target.id === 'checkbox-vibrosensors') {
			if (e.target.checked) {
				e.target.classList.replace('checkbox-vibrosensors-unchecked', 'checkbox-vibrosensors-checked');

				setModelNameAndDescription('addData', 'vibroSensors', e.target.id);
			} else {
				e.target.classList.replace('checkbox-vibrosensors-checked', 'checkbox-vibrosensors-unchecked');

				setModelNameAndDescription('removeData', null, e.target.id);
			}
		}

		if (e.target.id === 'checkbox-antiCondenseHeater') {
			if (e.target.checked) {
				e.target.classList.replace('checkbox-antiCondenseHeater-unchecked', 'checkbox-antiCondenseHeater-checked');

				setModelNameAndDescription('addData', 'antiCondensingHeater', e.target.id);
			} else {
				e.target.classList.replace('checkbox-antiCondenseHeater-checked', 'checkbox-antiCondenseHeater-uchecked');

				setModelNameAndDescription('removeData', null, e.target.id);
			}
		}

		////encoder group:
		if (e.target.id === 'selector-encoderVoltage') {
			fillUpgradesChart();
		}

		if (e.target.id === 'selector-outputSignal') {
			fillUpgradesChart();
		}
		////

		if (e.target.id === 'checkbox-currentInsulatingBearing') {
			optionsSelector.setOptionsList();

			if (Array.from(e.target.classList).some((className) => className.includes('-checked'))) {
				e.target.checked = false;

				e.target.classList.replace(
					'checkbox-currentInsulatingBearing-checked',
					'checkbox-currentInsulatingBearing-unchecked'
				);
				setModelNameAndDescription('removeData', null, e.target.id);
			} else if (Array.from(e.target.classList).some((className) => className.includes('-unchecked'))) {
				e.target.checked = true;

				e.target.classList.replace(
					'checkbox-currentInsulatingBearing-unchecked',
					'checkbox-currentInsulatingBearing-checked'
				);
				setModelNameAndDescription('addData', 'currentInsulatingBearing', e.target.id);
			}
		}

		if (e.target.id === 'selector-importBearings') {
			optionsSelector.setOptionsList();

			const selOptionId = Array.from(e.target.children)
				.find((child) => child.innerText === e.target.value)
				.getAttribute('data-itemid');

			if (e.target.value !== '-') {
				setModelNameAndDescription('addData', 'importBearings', selOptionId);
			} else {
				setModelNameAndDescription('removeData', null, selOptionId);
			}
		}

		if (e.target.id === 'selector-climateCat') {
			const selOptionIdOptionIP = Array.from(e.target.children)
				.find((child) => child.innerText === e.target.value)
				.getAttribute('data-itemid');

			setModelNameAndDescription('addData', 'climateCat', selOptionIdOptionIP);
		}

		if (e.target.id === 'selector-ip') {
			const selOptionId = Array.from(e.target.children)
				.find((child) => child.innerText === e.target.value)
				.getAttribute('data-itemid');

			setModelNameAndDescription('addData', 'ipVersion', selOptionId);
			fillUpgradesChart();

			//перезаливка опций для системы вентиляции при смене IP:
			const { frameSize, encoderIsChecked, ventSystemOptionValue, brakeType } = optionsSelector;

			fillBaseOptions(
				frameSize,
				encoderIsChecked,
				ventSystemOptionValue,
				brakeType,
				document.getElementById('checkbox-currentInsulatingBearing').checked,
				document.getElementById('selector-importBearings').value,
				e.target.value
			);

			populateOptionsList([selectorVentSystem], [optionsConfig.ventSystem], 'resetOptionsList');
		}

		if (e.target.id === 'checkbox-package') {
			console.log('checkbox-package', e.target.value);
		}
	});

	document.body.addEventListener('click', (e) => {
		if (e.target.id.includes('btn-options-sensors-id')) {
			if (Array.from(e.target.classList).some((className) => className.includes('btn-option-non-selected'))) {
				e.target.classList.replace('btn-option-non-selected', 'btn-option-selected');

				const list = e.target.parentElement.parentElement;

				Array.from(list.children).forEach((child) => {
					const btn = child.firstElementChild;
					btn.id !== e.target.id && btn.classList.replace('btn-option-selected', 'btn-option-non-selected');
				});

				setModelNameAndDescription(
					'addData',
					'tempDataSensors',
					Array.from(e.target.classList).find((cl) => cl.includes('Б'))
				);
			} else if (Array.from(e.target.classList).some((className) => className.includes('btn-option-selected'))) {
				e.target.classList.replace('btn-option-selected', 'btn-option-non-selected');

				setModelNameAndDescription(
					'removeData',
					null,
					Array.from(e.target.classList).find((cl) => cl.includes('Б'))
				);
			}
		}
	});

	document.body.addEventListener('input', (e) => {
		if (e.target.id === 'input-encoderResOptions') {
			fillUpgradesChart();
		}
	});

	window.onresize = () => {
		mask.mask !== undefined && typeof mask.mask !== 'undefined' && mask.getMaskParams();
	};
}
