const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    country: { type: String, required: true },
    discussion: { type: String, required: true }
});

module.exports = mongoose.model('Contact', ContactSchema, 'contacts');
