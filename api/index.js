const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors(
    {
        origin: ["https://mongo-db-node-js-orpin.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const contactRoutes = require('../routes/contact');
app.use('/api/contact', contactRoutes);

module.exports = app;
