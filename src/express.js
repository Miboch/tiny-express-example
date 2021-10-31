/**
 * This file handles our express api routes.
 */
const express = require('express');
const app = express();
const exampleService = require('./services/service-example.js');

app.get('/one', async (req, res) => {
    let serviceData = await exampleService.getObject();
    // this api just returns the serviceData.
    res.send(serviceData);
});

app.get('/two', async (req, res) => {
    let serviceData = await exampleService.getObject();
    res.send(`the truthiness of prop3 in service data is ${serviceData.prop3}`)
});

module.exports = app;
