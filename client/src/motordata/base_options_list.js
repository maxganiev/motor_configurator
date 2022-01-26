export const optionsConfig = {};

export const fillBaseOptions = function (
	motorFrameSize,
	encoderIsChecked,
	ventSystemOptionValue,
	brakeType,
	currentInsulatingBearingIsChecked,
	importBearingsValue
) {
	//термодатчики (UI: button):
	optionsConfig.tempDataSensors = [
		{
			id: 'Б1',
			group: 'Датчики температуры обмотки',
			type: 'Биметаллические датчики',
			description: 'Укомплектован датчиками защиты обмотки статора (три биметаллических датчика)',
			selectable: true,
		},

		{
			id: 'Б3',
			group: 'Датчики температуры обмотки',
			type: 'Датчики РТС',
			description: 'Укомплектован датчиками защиты обмотки статора (три терморезистивных датчика PTС)',
			selectable: true,
		},

		{
			id: 'Б5',
			group: 'Датчики температуры обмотки',
			type: 'Датчики РТ-100',
			description: 'Укомплектован датчиками защиты обмотки статора (терморезистивный датчик PT100)',
			selectable: true,
		},

		{
			id: 'Б2',
			group: 'Датчики температуры подшипников',
			type: 'Биметаллические датчики',
			description: 'Укомплектован датчиками защиты подшипников (2 биметаллических датчика)',
			selectable: motorFrameSize < 132 ? false : true,
		},

		{
			id: 'Б4',
			group: 'Датчики температуры подшипников',
			type: 'Датчики РТС',
			description: 'Укомплектован датчиками защиты подшипников (2 терморезестивных датчика PTС)',
			selectable: true,
		},

		{
			id: 'Б6',
			group: 'Датчики температуры подшипников',
			type: 'Датчики РТ-100',
			description: 'Укомплектован датчиками защиты подшипников (2 терморезестивных датчика PT100)',
			selectable: motorFrameSize < 132 ? false : true,
		},
	];

	//конический вал (UI: checkbox):
	optionsConfig.conicShaftDisabled = motorFrameSize < 200 ? true : false;
	optionsConfig.conicShaft = {
		id: 'checkbox-conicShaft',
		description: 'Конический вал в соответствии с ГОСТ 12081-72',
	};

	//энкодер:
	optionsConfig.encoderIsDisabled = brakeType.includes('независимым питанием') || brakeType === '-' ? true : false;

	//опции энкодера, если энкодер включен:
	optionsConfig.encoderParams = {
		//ui: input (type: num)
		resolution: { id: 'resol', type: 'Разрешение(имп/об)' },

		//ui: select
		powerVolt: [
			{ id: 'default', group: 'Напряжение питания', type: '-' },
			{ id: '5V', group: 'Напряжение питания', type: '+5В' },
			{ id: '10_30V', group: 'Напряжение питания', type: '+10...30В' },
		],

		//ui: select
		outputSignal: [
			{ id: 'default', group: 'Тип выходного сигнала', type: '-' },
			{ id: '3', group: 'Тип выходного сигнала', type: 'TTL/RS422, 6 каналов' },
			{ id: '4', group: 'Тип выходного сигнала', type: 'HTL/push pull, 6 каналов' },
		],
	};

	//вибродатчики (UI: checkbox):
	optionsConfig.vibroSensors = {
		id: 'W1',
		type: 'Вибродатчики',
		description: 'Укомплектован вибродатчиком трех-координатных ВК-310С на переднем подшипниковом щите',
		selectable: motorFrameSize >= 200 ? true : false,
	};

	//антиконденсатный подогрев (UI: checkbox):
	optionsConfig.antiCondensingHeater = {
		id: 'H',
		type: 'Антиконденсатный подогрев',
		description: 'Укомплектован антиконденсатным подогревом (питание 220В)',
		selectable: motorFrameSize >= 132 ? true : false,
	};

	//!должен быть выставлен по умолчанию, начиная с 200 габарита
	//токоизолированный подшипник (UI: checkbox):
	optionsConfig.currentInsulatingBearing = {
		id: 'F2',
		type: 'Токоизолированный подшипник',
		description: 'Заменен задний штатный подшипник на токоизолированный (производства SKF/NSK/KOYO/FAG)',
		selectable: motorFrameSize >= 200 && importBearingsValue !== '-' ? false : motorFrameSize < 200 ? false : true,
		checked: motorFrameSize >= 200 ? true : false,
		warning: 'Элком рекомендует установку токоизолированных подшипников на двигатели выше 200 габарита',
	};

	//!выбор S12 должен автоматически исключать возможность выбора F2 и наоборот:
	//импортные подшипники (UI: select):
	optionsConfig.importBearings = [
		{ id: 'default', group: 'Импортные подшипники', type: '-', description: '-', selectable: true },
		{
			id: 'S1',
			group: 'Импортные подшипники',
			type: 'Передний шариковый подшипник (производства SKF/NSK/KOYO/FAG)',
			description:
				'Заменен передний штатный подшипник на подшипник повышенной надежности шариковый (производства SKF/NSK/KOYO/FAG)',
			selectable: motorFrameSize < 200 ? true : motorFrameSize >= 200 && currentInsulatingBearingIsChecked ? true : false,
		},

		{
			id: 'S12',
			group: 'Импортные подшипники',
			type: 'Передний и задний шариковые подшипники (производства SKF/NSK/KOYO/FAG)',
			description:
				'Заменены передний и задний штатные подшипники на подшипники повышенной надежности шариковые (производства SKF/NSK/KOYO/FAG)',
			selectable: currentInsulatingBearingIsChecked ? false : true,
		},
	];

	//электромагнитный тормоз (UI: select):
	optionsConfig.electroMagneticBreak = [
		{
			id: 'default',
			group: 'Встроенный электромагнитный тормоз',
			type: '-',
			description: '-',
			selectable: true,
			power: null,
		},

		{
			id: 'ED',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В)',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 220В)',
			selectable: motorFrameSize <= 100 && !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
			power: 220,
		},

		{
			id: 'ET',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В)',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 380В)',
			selectable: !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
			power: 380,
		},

		{
			id: 'ED1',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В) с независимым питанием',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 220В) с независимым питанием',
			selectable: motorFrameSize <= 100 ? true : false,
			power: 220,
		},

		{
			id: 'ET1',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В) с независимым питанием',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 380В) с независимым питанием',
			selectable: true,
			power: 380,
		},

		{
			id: 'ED2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В)  с ручным растормаживающим устройством',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 220В) с ручным растормаживающим устройством',
			selectable: motorFrameSize <= 100 && !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
			power: 220,
		},

		{
			id: 'ET2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В) с ручным растормаживающим устройством',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 380В) с ручным растормаживающим устройством',
			selectable: motorFrameSize <= 200 && !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
			power: 380,
		},

		{
			id: 'ED1ED2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством',
			description:
				'Укомплектован встроенным электромагнитным тормозом (питание 220В) с независимым питанием и ручным растормаживающим устройством',
			selectable: motorFrameSize <= 100 ? true : false,
			power: 220,
		},

		{
			id: 'ET1ET2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством',
			description:
				'Укомплектован встроенным электромагнитным тормозом (питание 380В) с независимым питанием и ручным растормаживающим устройством',
			selectable: motorFrameSize <= 200 ? true : false,
			power: 380,
		},
	];

	//данные для наполнения табличной части доработок при выборе тормозов и /или вентиляционной системы:
	optionsConfig.upgradesData = [
		{
			id: 56,
			brakeMoment: { data: '2/4', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 25, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.18, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 14, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.085', description: 'Потребляемый ток, А' },
		},

		{
			id: 63,
			brakeMoment: { data: '2/4', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 25, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.18, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 14, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.085', description: 'Потребляемый ток, А' },
		},

		{
			id: 71,
			brakeMoment: { data: '4/6', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 30, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.18, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 16, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.1', description: 'Потребляемый ток, А' },
		},

		{
			id: 80,
			brakeMoment: { data: '7.5/9', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 45, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.2, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 30, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.2', description: 'Потребляемый ток, А' },
		},

		{
			id: 90,
			brakeMoment: { data: '15/17', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 50, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.2, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 30, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.2', description: 'Потребляемый ток, А' },
		},

		{
			id: 100,
			brakeMoment: { data: '30/35', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 65, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.2, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 30, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.2', description: 'Потребляемый ток, А' },
		},

		{
			id: 112,
			brakeMoment: { data: '40/50', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 70, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.25, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 36, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.3', description: 'Потребляемый ток, А' },
		},

		{
			id: 132,
			brakeMoment: { data: '75/85', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 95, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.25, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 36, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.3', description: 'Потребляемый ток, А' },
		},

		{
			id: 160,
			brakeMoment: { data: '150/160', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 110, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.35, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 80, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.37', description: 'Потребляемый ток, А' },
		},

		{
			id: 180,
			brakeMoment: { data: '200/220', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 150, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.35, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 80, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.37', description: 'Потребляемый ток, А' },
		},

		{
			id: 200,
			brakeMoment: { data: '300/330', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 200, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.45, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 150, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.7', description: 'Потребляемый ток, А' },
		},

		{
			id: 225,
			brakeMoment: { data: '450/500', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 200, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.45, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 180, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.8', description: 'Потребляемый ток, А' },
		},

		{
			id: 250,
			brakeMoment: { data: '600/660', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 210, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.5, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 250, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '1.15', description: 'Потребляемый ток, А' },
		},

		{
			id: 280,
			brakeMoment: { data: '850/940', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 340, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.6, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 400, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.7', description: 'Потребляемый ток, А' },
		},

		{
			id: 315,
			brakeMoment: { data: '2000/2200', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 400, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.7, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 500, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '0.95', description: 'Потребляемый ток, А' },
		},

		{
			id: 355,
			brakeMoment: { data: '4000/4400', description: 'Тормозной момент, Н х м (Ном./Макс.)' },
			brake_consumedPower: { data: 480, description: 'Потребляемая мощность, Вт' },
			reactionTime: { data: 0.85, description: 'Время срабатывания, мс' },
			vent_consumedPower: { data: 800, description: 'Потребляемая мощность, Вт' },
			vent_consumedCurrent: { data: '1.55', description: 'Потребляемый ток, А' },
		},
	];

	//лапы и фланцы (UI: select):
	optionsConfig.paws =
		motorFrameSize >= 112
			? [
					{
						id: 'IM1001',
						group: 'Лапы и фланцы',
						type: 'Лапы (1001/1081)',
					},

					{
						id: 'IM2001',
						group: 'Лапы и фланцы',
						type: 'Лапы + Фланец (2001/2081)',
					},

					{
						id: 'IM3001',
						group: 'Лапы и фланцы',
						type: 'Фланец (3081)',
					},
			  ]
			: [
					{
						id: 'IM1001',
						group: 'Лапы и фланцы',
						type: 'Лапы (1001/1081)',
					},

					{
						id: 'IM2001',
						group: 'Лапы и фланцы',
						type: 'Лапы + Фланец (2001/2081)',
					},

					{
						id: 'IM3001',
						group: 'Лапы и фланцы',
						type: 'Фланец (3081)',
					},

					{
						id: 'IM2181',
						group: 'Лапы и фланцы',
						type: 'Лапы + Малый фланец (2181)',
					},
			  ];

	//тип системы вентиляции (UI: select)
	optionsConfig.ventSystem = [
		{
			id: 'default',
			group: 'Независимая вентиляция',
			type: '-',
			description: '-',
			selectable: true,
			power: null,
		},

		{
			id: 'V1',
			group: 'Независимая вентиляция',
			type: 'Встроенный вентилятор с питанием 220В',
			description: 'Укомплектован узлом независимой вентиляции (встроенный вентилятор с питанием 220В)',
			selectable: motorFrameSize <= 250 && (brakeType.includes('независимым питанием') || brakeType === '-') ? true : false,
			power: 220,
		},

		{
			id: 'V2',
			group: 'Независимая вентиляция',
			type: 'Встроенный вентилятор с питанием 380В',
			description: 'Укомплектован узлом независимой вентиляции (встроенный вентилятор с питанием 380В)',
			selectable: motorFrameSize >= 132 && (brakeType.includes('независимым питанием') || brakeType === '-') ? true : false,
			power: 380,
		},

		{
			id: 'V3',
			group: 'Независимая вентиляция',
			type: 'Пристроенный вентилятор (наездник) с питанием 220В',
			description: 'Укомплектован узлом независимой вентиляции (пристроенный вентилятор (наездник) с питанием 220В)',
			selectable:
				motorFrameSize >= 112 &&
				((motorFrameSize <= 200 && brakeType.includes('независимым питанием')) || brakeType === '-')
					? true
					: false,
			power: 220,
		},

		{
			id: 'V4',
			group: 'Независимая вентиляция',
			type: 'Пристроенный вентилятор (наездник) с питанием 380В',
			description: 'Укомплектован узлом независимой вентиляции (пристроенный вентилятор (наездник) с питанием 380В)',
			selectable: motorFrameSize >= 225 && (brakeType.includes('независимым питанием') || brakeType === '-') ? true : false,
			power: 380,
		},
	];

	//климатическое исполнение (UI: select):
	optionsConfig.climateCat = [
		{ id: 'У2', group: 'Климатическое исполнение', type: 'У2', selectable: true },
		{ id: 'У1', group: 'Климатическое исполнение', type: 'У1', selectable: true },
		{ id: 'УХЛ1', group: 'Климатическое исполнение', type: 'УХЛ1', selectable: true },
		{ id: 'УХЛ2', group: 'Климатическое исполнение', type: 'УХЛ2', selectable: true },
	];

	//степень защиты (UI: select):
	optionsConfig.ipVersion = [
		{ id: 'IP55', group: 'Степень защиты', type: 'IP55', selectable: true },
		{ id: 'IP54', group: 'Степень защиты', type: 'IP54', selectable: true },
		{ id: 'IP66', group: 'Степень защиты', type: 'IP66', selectable: true },
	];

	const options = [];
	const encoderOptions = [true, false];
	const ventOptions = optionsConfig.ventSystem.map((obj) => obj.type);

	if (encoderIsChecked || ventSystemOptionValue !== '-') {
		const brakeOptions = optionsConfig.electroMagneticBreak
			.filter((obj) => obj.type.includes('независимым питанием') || obj.type.includes('-'))
			.map((obj) => obj.type);

		encoderOptions.forEach((e) => {
			ventOptions.forEach((v) => {
				brakeOptions.forEach((b) => {
					options.push({ e, v, b });
				});
			});
		});
	} else {
		const brakeOptions = optionsConfig.electroMagneticBreak.map((obj) => obj.type);
		brakeOptions.forEach((b) => {
			options.push({ e: false, v: '-', b });
		});
	}

	optionsConfig.options = options;
};
