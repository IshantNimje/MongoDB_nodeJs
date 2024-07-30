const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// POST a new contact form submission
router.post('/', async (req, res) => {
    const { firstName, lastName, phoneNumber,  country, discussion } = req.body;

    if (!firstName || !lastName || !phoneNumber || !country || !discussion) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    const newContact = new Contact({
        firstName,
        lastName,
        phoneNumber,
        country,
        discussion
    });

    try {
        const savedContact = await newContact.save();
        res.json(savedContact);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
