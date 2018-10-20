const express = require('express');
const router = express.Router();
const flightDetailService = require('./flight-detail.service');

// routes
router.post('/create', createFlightDetail);

module.exports = router;

function createFlightDetail(req, res, next) {
    flightDetailService.create(req.body)
        .then(() => res.json({message:'success'}))
        .catch(err => next(err));
}