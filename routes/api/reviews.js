const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const axios = require('axios')

// Get all villas
router.get('/google', async (req, res) => {
    try {
        let data = await axios.get(``)
        return res.status(200).send(data);
    } catch (err) {
        console.log({ err });
        res.status(400).send({ err });
    }
});