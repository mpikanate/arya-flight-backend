const config = require('config.json');
const bcrypt = require('bcryptjs');
const db = require('_helpers/db');
const FlightDetail = db.FlightDetail;

module.exports = {
    create
};

async function create(flightDetailParam) {
    // validate
    // if (await User.findOne({ username: userParam.username })) {
    //     throw 'Username "' + userParam.username + '" is already taken';
    // }

    const flightDetail = new FlightDetail(flightDetailParam);

    // save flight detail
    await flightDetail.save();
}