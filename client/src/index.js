const text = document.getElementById('text');
const selectorModel = document.getElementById('selector-model');
const selectorRpm = document.getElementById('selector-rpm');
const selectorPower = document.getElementById('selector-power');
const selectorBrakes = document.getElementById('selector-breaks');
const selectorPaws = document.getElementById('selector-paws');
const checkboxEncoder = document.getElementById('checkbox-encoder');
const checkboxConicShaft = document.getElementById('checkbox-conicShaft');
const selectorVentSystem = document.getElementById('selector-ventSystem');

const regex = /^(?!\s*$).+/;

//search motor models against text input:
text.addEventListener('input', (e) => {
	const filteredResults = [];

	getData(e.target.value, filteredResults);

	//cleaning up selector options list while typing:
	Array.from(selectorBrakes.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorVentSystem.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorPaws.children).forEach((child) => child.remove());

	//setting selectors values back to default while typing:
	selectorBrakes.value = selectorPower.value = selectorRpm.value = selectorPaws.value = selectorVentSystem.value = '-';
	checkboxEncoder.checked = checkboxConicShaft.checked = false;
});

//search motor models on rpm and power selection:
selectorPower.onchange = selectorRpm.onchange = () => {
	const filteredResults = [];

	getData([selectorPower.value, selectorRpm.value], filteredResults);

	//cleaning up selector options list while typing:
	Array.from(selectorBrakes.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorVentSystem.children).forEach((child, index) => index !== 0 && child.remove());
	Array.from(selectorPaws.children).forEach((child) => child.remove());

	//setting selectors values back to default while typing:
	selectorBrakes.value = selectorPaws.value = selectorVentSystem.value = '-';
	checkboxEncoder.checked = checkboxConicShaft.checked = false;
};

//selecting a motor model:
selectorModel.addEventListener('change', (e) => {
	const query = Number(e.target.value.slice(4, e.target.value.indexOf(' ', 4)));

	sendData(query, [selectorBrakes, selectorPaws, selectorVentSystem]);
});

//selecting a paw type:
selectorPaws.addEventListener('change', (e) => {
	const query = Number(selectorModel.value.slice(4, selectorModel.value.indexOf(' ', 4)));

	sendData(query, null);
});

//selecting a breaks type:
selectorBrakes.addEventListener('change', (e) => {
	const query = Number(selectorModel.value.slice(4, selectorModel.value.indexOf(' ', 4)));

	sendData(query, null);
});

//selecting vent system type:
selectorVentSystem.addEventListener('change', () => {
	const query = Number(selectorModel.value.slice(4, selectorModel.value.indexOf(' ', 4)));

	sendData(query, [selectorBrakes]);
});

//choosing encoder:
checkboxEncoder.addEventListener('change', (e) => {
	const query = Number(selectorModel.value.slice(4, selectorModel.value.indexOf(' ', 4)));

	sendData(query, [selectorBrakes]);
});

//chosing conic shaft:
checkboxConicShaft.addEventListener('change', (e) => {
	const query = Number(selectorModel.value.slice(4, selectorModel.value.indexOf(' ', 4)));

	sendData(query, null);
});

async function sendData(query, selectorsId) {
	try {
		if (selectorModel.value !== '-') {
			const req = await fetch('/api/getoptions', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					frameSize: query,
					model: selectorModel.value,
					ventSystemOptionValue: selectorVentSystem.value,
					brakeType: selectorBrakes.value,
					encoderIsChecked: checkboxEncoder.checked,
					conicShaftIsChecked: checkboxConicShaft.checked,
					pawType: selectorPaws.value === '' ? 'Лапы (1001/1081)' : selectorPaws.value,
				}),
			});

			const res = await req.json();
			console.log(res);

			//filing select with options list:
			const { electroMagneticBreak, paws, ventSystem } = res.motorItem.optionsConfig;
			setTimeout(() => {
				if (Array.isArray(selectorsId)) {
					populateOptionsList(selectorsId, [electroMagneticBreak.splice(1), paws, ventSystem.splice(1)]);
				} else {
					populateOptionsList(selectorsId, [electroMagneticBreak.splice(1)]);
				}

				checkboxConicShaft.disabled = res.motorItem.optionsConfig.conicShaftDisabled;

				eMotorDataToCrawl.setEmotorDrawAndDimensions(selectorBrakes.value, selectorModel.value, selectorPaws.value);
			}, 400);
		}
	} catch (error) {
		console.log(error);
	}
}

async function getData(query, targetArr) {
	try {
		const req = await fetch('/api/motordata');
		const res = await req.json();

		setTimeout(() => {
			if (query.length > 4 && query.match(regex) !== null && typeof query === 'string') {
				targetArr = res.filter((result) => result.name.toLowerCase().includes(query.toLowerCase()));
			} else if (typeof query === 'object' && Array.isArray(query)) {
				targetArr = res.filter(
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
	} catch (error) {
		console.log(error);
	}
}

const eMotorDataToCrawl = {
	setEmotorDrawAndDimensions: function (brakeType, model, pawType) {
		this.dataToCrawl = { brakeType, model, pawType };
		//console.log(this);
	},
};

function populateOptionsList(selectorsId, srcData) {
	selectorsId !== null && selectorsId.forEach((selector, index) => fillOptions(selector, srcData[index]));

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
