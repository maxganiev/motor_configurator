const assetsData = [
	//encoder+ shaft+ ventSystem -
	{ i: 0, srcData: [] },

	//encoder+ shaft+ ventSystem: 'Встроенный вентилятор с питанием 220В'
	{
		i: 1,
		srcData: [],
	},

	//encoder+ shaft+ ventSystem: 'Встроенный вентилятор с питанием 380В'
	{
		i: 2,
		srcData: [],
	},

	//encoder+ shaft+ ventSystem: 'Пристроенный вентилятор (наездник) с питанием 220В'
	{
		i: 3,
		srcData: [],
	},

	//encoder+ shaft+ ventSystem: 'Пристроенный вентилятор (наездник) с питанием 380В'
	{
		i: 4,
		srcData: [],
	},

	////////////////////
	//encoder+ shaft- ventSystem -
	{
		i: 5,
		srcData: [],
	},

	//encoder+ shaft- ventSystem: 'Встроенный вентилятор с питанием 220В'
	{
		i: 6,
		srcData: [],
	},

	//encoder+ shaft- ventSystem: 'Встроенный вентилятор с питанием 380В'
	{
		i: 7,
		srcData: [],
	},

	//encoder+ shaft- ventSystem: 'Пристроенный вентилятор (наездник) с питанием 220В'
	{
		i: 8,
		srcData: [],
	},

	//encoder+ shaft- ventSystem: 'Пристроенный вентилятор (наездник) с питанием 380В'
	{
		i: 9,
		srcData: [],
	},

	//////
	//encoder- shaft+ ventSystem -
	{
		i: 10,
		srcData: [],
	},

	//encoder- shaft+ ventSystem: 'Встроенный вентилятор с питанием 220В'
	{
		i: 11,
		srcData: [],
	},

	//encoder- shaft+ ventSystem: 'Встроенный вентилятор с питанием 380В'
	{
		i: 12,
		srcData: [],
	},

	//encoder- shaft+ ventSystem: 'Пристроенный вентилятор (наездник) с питанием 220В'
	{
		i: 13,
		srcData: [],
	},

	//encoder- shaft+ ventSystem: 'Пристроенный вентилятор (наездник) с питанием 380В'
	{
		i: 14,
		srcData: [],
	},

	//encoder- shaft- ventSystem -
	{
		i: 15,
		srcData: [
			{
				frameSize: 63,
				model: '5АИ 63 A2 0.37/3000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 6,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 10,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 12,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 14,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 15,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 16,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 17,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 18,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5'], values: ['231', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Фланец (3081)"
						option_id: 19,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values:['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 20,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values:['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 21,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 22,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 23,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 24,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 25,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 26,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 27,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2101_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 28,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 29,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 30,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 31,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 32,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 33,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 34,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 35,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},
				],
			},

			{
				frameSize: 63,
				model: '5АИ 63 A4 0.25/1500',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 6,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 10,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 12,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 14,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 15,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 16,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 17,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 18,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5'], values: ['231', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Фланец (3081)"
						option_id: 19,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 20,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 21,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 22,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 23,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 24,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 25,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 26,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 27,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2101_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 28,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 29,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 30,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 31,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 32,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 33,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 34,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 35,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},
				],
			},
			{
				frameSize: 63,
				model: '5АИ 63 A6 0.18/1000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 6,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 10,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 12,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 14,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 15,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 16,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 17,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 18,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5'], values: ['231', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Фланец (3081)"
						option_id: 19,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 20,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 21,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 22,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 23,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 24,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 25,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 26,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 27,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2101_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 28,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 29,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 30,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 31,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 32,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 33,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 34,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 35,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},
				],
			},
			{
				frameSize: 63,
				model: '5АИ 63 B2 0.55/3000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 6,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 10,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 12,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 14,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 15,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 16,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 17,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 18,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5'], values: ['231', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Фланец (3081)"
						option_id: 19,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 20,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 21,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 22,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 23,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 24,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 25,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 26,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 27,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2101_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 28,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 29,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 30,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 31,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 32,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 33,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 34,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 35,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},
				],
			},
			{
				frameSize: 63,
				model: '5АИ 63 B4 0.37/1500',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 6,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 10,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 12,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 14,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 15,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 16,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 17,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 18,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5'], values: ['231', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Фланец (3081)"
						option_id: 19,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 20,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 21,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 22,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 23,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 24,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 25,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 26,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 27,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2101_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 28,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 29,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 30,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 31,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 32,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 33,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 34,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 35,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},
				],
			},
			{
				frameSize: 63,
				model: '5АИ 63 B6 0.25/1000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 6,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '30', '80', '40', '14', '5.8', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 10,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 12,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 14,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 15,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params:['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 16,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 17,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '80', '40', '14', '5.8', '130', '10', '110', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 18,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_below_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5'], values: ['231', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Фланец (3081)"
						option_id: 19,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 20,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 21,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 22,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 23,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 24,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 25,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 26,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '160', '30', '14', '130', '10', '110', '5', '5', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 27,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2101_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['231', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16']},
					},

					{
						//brakeType: "Тормоз (питание 220В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 28,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 29,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 30,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 31,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В)  с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 32,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 33,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 220В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 34,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Малый фланец (2181)"
						option_id: 35,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/little_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['319', '180', '90/110', '30', '80', '40', '14', '5.8', '75/100', 'M5/М6', '60/80', '5', '100', '5', '8', '63', '16', 'М5х0.8', '20']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 M2 37/3000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['770', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1012', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1012', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1012', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1012', '505', '110', '267', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['770', '505', '450', '110', '267', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1012', '505', '450', '110', '267', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1012', '505', '450', '110', '267', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1012', '505', '450', '110', '267', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1012', '505', '450', '110', '267', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['770', '505', '450', '110', '55', '400', '19', '350', '16', '10', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1012', '505', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1012', '505', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1012', '505', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1012', '505', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 M4 37/1500',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['800', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['800', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values:['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values:['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values:['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values:['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['800', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 M6 22/1000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values:['800', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['800', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['800', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 M8 18.5/750',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values:['800', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values:['1042', '500', '140', '267', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['800', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1042', '500', '450', '140', '267', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['800', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1042', '500', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 L2 45/3000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values:['808', '510', '110', '305', '133', '55', '19', '16', '318', '10', '25', '200', '59']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1050', '510', '110', '305', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1050', '510', '110', '305', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1050', '510', '110', '305', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1050', '510', '110', '305', '133', '55', '19', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['808', '510', '450', '110', '305', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1050', '510', '450', '110', '305', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1050', '510', '450', '110', '305', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1050', '510', '450', '110', '305', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1050', '510', '450', '110', '305', '133', '55', '19', '400', '19', '350', '16', '318', '10', '25', '200', '59', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['808', '510', '450', '110', '55', '400', '19', '350', '16', '10', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1050', '510', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1050', '510', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1050', '510', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1050', '510', '450', '110', '55', '400', '19', '350', '16', '10', '200', 'М18х2.5', '50']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 L4 45/1500',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values:['808', '510', '110', '305', '133', '55', '19', '16', '318', '10', '25', '200', '59']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['838', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['838', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 L6 30/1000',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values:['838', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['838', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['838', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},
				],
			},
			{
				frameSize: 200,
				model: '5АИ 200 L8 22/750',
				data: [
					{
						//brakeType: "-"
						//pawType: "Лапы (1001/1081)"
						option_id: 0,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/1001_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values:['838', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы (1001/1081)"
						option_id: 1,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы (1001/1081)"
						option_id: 2,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 3,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы (1001/1081)"
						option_id: 4,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'l1', 'l10', 'l31', 'd1', 'd10', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'], values: ['1080', '510', '140', '305', '133', '60', '19', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 5,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/2001_over_small.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5'], values: ['838', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 6,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 7,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 8,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Лапы + Фланец (2001/2081)"
						option_id: 9,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/large_flange_paws/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'l10', 'l31', 'd1', 'd10', 'd20', 'd22', 'd25', 'b1', 'b10', 'h1', 'h10', 'h', 'h5', 'd4', 'l4'] , values: ['1080', '510', '450', '140', '305', '133', '60', '19', '400', '19', '350', '18', '318', '11', '25', '200', '64', 'М18х2.5', '50']},
					},

					{
						//brakeType: "-"
						//pawType: "Фланец (3081)"
						option_id: 10,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/5ai/new/3001_over.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h'], values: ['838', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200']},
					},

					{
						//brakeType: "Тормоз (питание 380В)"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием"
						//pawType: "Фланец (3081)"
						option_id: 11,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с ручным растормаживающим устройством"
						//pawType: "Фланец (3081)"
						option_id: 12,
						drawingSrc: 'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},

					{
						//brakeType: "Тормоз (питание 380В) с независимым питанием и ручным растормаживающим устройством"
						//pawType: "Фланец (3081)
						option_id: 13,
						drawingSrc:
							'https://www.elcomspb.ru/image/catalog/products/to/engine/adchr/flange/tormoz_nezavisimoe_pitanie_ruchka.png',
						// prettier-ignore
						dims: {params: ['l30', 'h31', 'd24', 'l1', 'd1', 'd20', 'd22', 'd25', 'b1', 'h1', 'h', 'd4', 'l4'], values: ['1080', '510', '450', '140', '60', '400', '19', '350', '18', '11', '200', 'М18х2.5', '50']},
					},
				],
			},
		],
	},

	//encoder- shaft- ventSystem: 'Встроенный вентилятор с питанием 220В'
	{
		i: 16,
		srcData: [],
	},

	//encoder- shaft- ventSystem: 'Встроенный вентилятор с питанием 380В'
	{
		i: 17,
		srcData: [],
	},

	//encoder- shaft- ventSystem: 'Пристроенный вентилятор (наездник) с питанием 220В'
	{
		i: 18,
		srcData: [],
	},

	//encoder- shaft- ventSystem: 'Пристроенный вентилятор (наездник) с питанием 380В'
	{
		i: 19,
		srcData: [],
	},
];

module.exports = assetsData;
