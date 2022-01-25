export function setTransforms(htmlElem, transformVal, transformDir) {
	htmlElem.style.transform = `translate${transformDir}(${transformVal})`;
}
