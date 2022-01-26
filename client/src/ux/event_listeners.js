import { inputModel } from './global_dom';
import { selectorModel } from './global_dom';
import { selectorRpm } from './global_dom';
import { selectorPower } from './global_dom';
import { selectorBrakes } from './global_dom';
import { selectorPaws } from './global_dom';
import { checkboxEncoder } from './global_dom';
import { checkboxConicShaft } from './global_dom';
import { selectorVentSystem } from './global_dom';
import { searchModel } from './selectFunctions';
import { getOptions } from './selectFunctions';
import { optionsSelector } from './selectFunctions';
import { setModelNameAndDescription, fillUpgradesChart } from './selectFunctions';

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
	selectorBrakes.addEventListener('change', () => {
		getOptions([selectorVentSystem], 'resetOptionsList');
		fillUpgradesChart();
	});

	//selecting vent system type:
	selectorVentSystem.addEventListener('change', () => {
		getOptions([selectorBrakes], 'resetOptionsList');
	});

	//choosing encoder:
	checkboxEncoder.addEventListener('change', () => {
		getOptions([selectorBrakes], 'resetOptionsList');
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
				setModelNameAndDescription('addData', 'vibroSensors', e.target.id);
			} else {
				setModelNameAndDescription('removeData', null, e.target.id);
			}
		}

		if (e.target.id === 'checkbox-antiCondenseHeater') {
			if (e.target.checked) {
				setModelNameAndDescription('addData', 'antiCondensingHeater', e.target.id);
			} else {
				setModelNameAndDescription('removeData', null, e.target.id);
			}
		}

		////encoder group:
		if (e.target.id === 'selector-encoderVoltage') {
			console.log('selector-encoderVoltage', e.target.value);
		}

		if (e.target.id === 'selector-outputSignal') {
			console.log('selector-outputSignal', e.target.value);
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
			} else if (Array.from(e.target.classList).some((className) => className.includes('-unchecked'))) {
				e.target.checked = true;

				e.target.classList.replace(
					'checkbox-currentInsulatingBearing-unchecked',
					'checkbox-currentInsulatingBearing-checked'
				);
			}

			console.log('currentInsulatingBearing', e.target.checked);
		}

		if (e.target.id === 'selector-importBearings') {
			optionsSelector.setOptionsList();
		}

		if (e.target.id === 'selector-climateCat') {
			console.log('selector-climateCat', e.target.value);
		}

		if (e.target.id === 'selector-ip') {
			console.log('selector-ip', e.target.value);
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
}

document.body.addEventListener('input', (e) => {
	if (e.target.id === 'input-encoderResOptions') {
		console.log(e.target.value);
	}
});
