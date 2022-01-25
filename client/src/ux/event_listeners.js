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
	checkboxConicShaft.addEventListener('change', () => {
		getOptions(null);
	});

	//обработчики с делегированием:
	document.body.addEventListener('change', (e) => {
		if (e.target.id === 'checkbox-vibrosensors') {
			console.log('checkbox-vibrosensors', e.target.value);
		}

		if (e.target.id === 'checkbox-antiCondenseHeater') {
			console.log('checkbox-antiCondenseHeater', e.target.value);
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
			} else if (Array.from(e.target.classList).some((className) => className.includes('btn-option-selected'))) {
				e.target.classList.replace('btn-option-selected', 'btn-option-non-selected');
			}
		}
	});
}

document.body.addEventListener('input', (e) => {
	if (e.target.id === 'input-encoderResOptions') {
		console.log(e.target.value);
	}
});
