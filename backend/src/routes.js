const { Router } = require("express");
const DevsController = require("./controllers/DevController");
const SearchController = require("./controllers/SearchController");
const routes = Router();

routes.post("/devs", DevsController.store);
routes.get("/devs", DevsController.index);
routes.get("/search", SearchController.index);

module.exports = routes;
