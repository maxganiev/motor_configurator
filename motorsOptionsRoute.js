const express = require('express');
const { fillExtraOptions } = require('./motorExtraOptions');
const { optionsConfig } = require('./motorExtraOptions');
const { setMotorDrawAndDims } = require('./setMotorDrawAndDims');
const { assetsConfig } = require('./setMotorDrawAndDims');

//router init:
const router = express.Router();

//get extra options and update UI upon selecting an item from dropbox while typing a motor name:
router.post('/', async (req, res) => {
	try {
		const data = req.body;

		const motorItem = {
			frameSize: Number(data.frameSize),
			model: data.model,
			encoderIsChecked: data.encoderIsChecked,
			conicShaftIsChecked: data.conicShaftIsChecked,
			ventSystemOptionValue: data.ventSystemOptionValue,
			brakeType: data.brakeType,
			pawType: data.pawType,
			optionsConfig,
		};

		fillExtraOptions(motorItem.frameSize, motorItem.encoderIsChecked, motorItem.ventSystemOptionValue);

		setMotorDrawAndDims(
			motorItem.model,
			motorItem.encoderIsChecked,
			motorItem.conicShaftIsChecked,
			motorItem.ventSystemOptionValue,
			motorItem.brakeType,
			motorItem.pawType
		);

		res.json({ motorItem, assetsConfig });
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
