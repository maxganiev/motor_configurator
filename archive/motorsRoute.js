const express = require('express');
const motorsAllSeriesFlatten = require('./motordata');

//router init:
const router = express.Router();

//get motors basic data:
router.get('/', (req, res) => {
	try {
		res.json(motorsAllSeriesFlatten);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
