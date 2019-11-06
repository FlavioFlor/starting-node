const express = require('express');
const routes = express.Router();

const ProductsController = require('./controllers/ProductsController');

routes.get("/products", ProductsController.index);
routes.get("/productsPaginate", ProductsController.indexPaginate);
routes.get("/products/:id", ProductsController.show);
routes.post("/products", ProductsController.store);
routes.put("/products/:id", ProductsController.update);
routes.delete("/products/:id", ProductsController.destroy);

module.exports = routes;