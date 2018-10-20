const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    flightNo: { type: String, required: true },
    origin: { type: String, required: true },
    departureTime: { type: String, required: true },
    destination: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    type: { type: String, required: true },
    remark: { type: String, required: false },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('flightDetails', schema,'flightDetails');