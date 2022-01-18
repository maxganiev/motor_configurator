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
	selectorModel.addEventListener('change', (e) => {
		getOptions([selectorBrakes, selectorPaws, selectorVentSystem]);
	});
	//selecting a paw type:
	selectorPaws.addEventListener('change', (e) => {
		getOptions(null);
	});

	//selecting a breaks type:
	selectorBrakes.addEventListener('change', (e) => {
		getOptions(null);
	});

	//selecting vent system type:
	selectorVentSystem.addEventListener('change', () => {
		getOptions([selectorBrakes]);
	});

	//choosing encoder:
	checkboxEncoder.addEventListener('change', (e) => {
		getOptions([selectorBrakes]);
	});

	//chosing conic shaft:
	checkboxConicShaft.addEventListener('change', (e) => {
		getOptions(null);
	});
}
