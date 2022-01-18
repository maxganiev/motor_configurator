export const optionsConfig = {};

export const fillExtraOptions = function (motorFrameSize, encoderIsChecked, ventSystemOptionValue) {
	//термодатчики (UI: button):
	optionsConfig.tempDataSensors = [
		{
			id: 'Б1',
			group: 'Датчики температуры обмотки статора',
			type: 'Биметаллические датчики',
			description: 'Укомплектован датчиками защиты обмотки статора (три биметаллических датчика)',
			selectable: true,
		},

		{
			id: 'Б3',
			group: 'Датчики температуры обмотки статора',
			type: 'Датчики РТС',
			description: 'Укомплектован датчиками защиты обмотки статора (три терморезистивных датчика PTС)',
			selectable: true,
		},

		{
			id: 'Б5',
			group: 'Датчики температуры обмотки статора',
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

	//вибродатчики (UI: checkbox):
	optionsConfig.tempDataSensors = {
		id: 'W1',
		type: 'Вибродатчики',
		description: 'Укомплектован вибродатчиком трех-координатных ВК-310С на переднем подшипниковом щите',
		selectable: motorFrameSize >= 200 ? true : false,
	};

	//антиконденсатный подогрев:
	optionsConfig.antiCondensingHeater = {
		id: 'H',
		type: 'Антиконденсатный подогрев',
		description: 'Укомплектован антиконденсатным подогревом (питание 220В)',
		selectable: motorFrameSize >= 132 ? true : false,
	};

	//!должен быть выставлен по умолчанию
	//токоизолированный подшипник (UI: checkbox):
	optionsConfig.currentInsulatingBearing = {
		id: 'F2',
		type: 'Токоизолированный подшипник',
		description: 'Заменен задний штатный подшипник на токоизолированный (производства SKF/NSK/KOYO/FAG)',
		selectable: motorFrameSize >= 200 ? true : false,
	};

	//!выбор S12 должен автоматически исключать возможность выбора F2 и наоборот (выставить ограничения со стороны UI):
	//импортные подшипники (UI: select):
	optionsConfig.importBearings = [
		{
			id: 'S1',
			group: 'Импортные подшипники',
			type: 'Передний шариковый подшипник (производства SKF/NSK/KOYO/FAG)',
			description:
				'Заменен передний штатный подшипник на подшипник повышенной надежности шариковый (производства SKF/NSK/KOYO/FAG)',
			selectable: true,
		},

		{
			id: 'S12',
			group: 'Импортные подшипники',
			type: 'Передний и задний шариковые подшипники (производства SKF/NSK/KOYO/FAG)',
			description:
				'Заменены передний и задний штатные подшипники на подшипники повышенной надежности шариковые (производства SKF/NSK/KOYO/FAG)',
			selectable: true,
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
		},

		{
			id: 'ED',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В)',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 220В)',
			selectable: motorFrameSize <= 100 && !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
		},

		{
			id: 'ET',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В)',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 380В)',
			selectable: !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
		},

		{
			id: 'ED1',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В) с независимым питанием',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 220В) с независимым питанием',
			selectable: motorFrameSize <= 100 ? true : false,
		},

		{
			id: 'ET1',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В) с независимым питанием',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 380В) с независимым питанием',
			selectable: true,
		},

		{
			id: 'ED2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В)  с ручным растормаживающим устройством',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 220В) с ручным растормаживающим устройством',
			selectable: motorFrameSize <= 100 && !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
		},

		{
			id: 'ET2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В) с ручным растормаживающим устройством',
			description: 'Укомплектован встроенным электромагнитным тормозом (питание 380В) с ручным растормаживающим устройством',
			selectable: motorFrameSize <= 200 && !encoderIsChecked && ventSystemOptionValue === '-' ? true : false,
		},

		{
			id: 'ED1ED2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством',
			description:
				'Укомплектован встроенным электромагнитным тормозом (питание 220В) с независимым питанием и ручным растормаживающим устройством',
			selectable: motorFrameSize <= 100 ? true : false,
		},

		{
			id: 'ET1ET2',
			group: 'Встроенный электромагнитный тормоз',
			type: 'Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством',
			description:
				'Укомплектован встроенным электромагнитным тормозом (питание 380В) с независимым питанием и ручным растормаживающим устройством',
			selectable: motorFrameSize <= 200 ? true : false,
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
		},

		{
			id: 'V1',
			group: 'Независимая вентиляция',
			type: 'Встроенный вентилятор с питанием 220В',
			description: 'Укомплектован узлом независимой вентиляции (встроенный вентилятор с питанием 220В)',
			selectable: motorFrameSize <= 250 ? true : false,
		},

		{
			id: 'V2',
			group: 'Независимая вентиляция',
			type: 'Встроенный вентилятор с питанием 380В',
			description: 'Укомплектован узлом независимой вентиляции (встроенный вентилятор с питанием 380В)',
			selectable: motorFrameSize >= 132 ? true : false,
		},

		{
			id: 'V3',
			group: 'Независимая вентиляция',
			type: 'Пристроенный вентилятор (наездник) с питанием 220В',
			description: 'Укомплектован узлом независимой вентиляции (пристроенный вентилятор (наездник) с питанием 220В)',
			selectable: motorFrameSize >= 112 && motorFrameSize <= 200 ? true : false,
		},

		{
			id: 'V4',
			group: 'Независимая вентиляция',
			type: 'Встроенный вентилятор с питанием 380В',
			description: 'Укомплектован узлом независимой вентиляции (встроенный вентилятор с питанием 380В)',
			selectable: motorFrameSize >= 225 ? true : false,
		},
	];
};
