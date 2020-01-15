const { Router } = require('express');
const DevsController = require('./controllers/DevController');
const routes = Router();


routes.post('/devs', DevsController.store);

module.exports = routes;
