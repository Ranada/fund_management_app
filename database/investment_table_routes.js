const express = require('express');
const router = express.Router();
const investments_table = require('./investments_table');

/* GET investments. */
router.get('/', async function(req, res, next) {
  try {
    res.json(await investments_table.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting investments `, err.message);
    next(err);
  }
});

module.exports = router;