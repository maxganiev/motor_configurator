import { inputModel } from './global_dom';
import { selectorModel } from './global_dom';
import { selectorRpm } from './global_dom';
import { selectorPower } from './global_dom';
import { selectorBrakes } from './global_dom';
import { selectorPaws } from './global_dom';
import { checkboxEncoder } from './global_dom';
import { checkboxConicShaft } from './global_dom';
import { selectorVentSystem } from './global_dom';
import { searchModel } from './functions';
import { getOptions } from './functions';

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
}
