import { areaFilter } from '../ux/global_dom';

export function setTransforms(htmlElem, transformVal, transformDir) {
	htmlElem.style.transform = `translate${transformDir}(${transformVal})`;
}

export const mask = {
	createMask: function () {
		this.mask = document.createElement('div');
		this.mask.setAttribute('class', 'mask');

		areaFilter.insertAdjacentElement('afterend', this.mask);
	},
	getMaskParams: function () {
		this.mask.style.top = areaFilter.getBoundingClientRect().height + 'px';
		this.mask.style.height = areaFilter.parentElement.clientHeight - areaFilter.clientHeight + 'px';
	},
};
