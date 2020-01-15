const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb+srv://omnistack10:omnistack10@omnistack9-go5rk.mongodb.net/week10?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.use(express.json());
app.use(routes);

// Principais métodos HTTP: GET, POST, PUT, UPDATE, DELETE
// Tipos de parâmetros:

// Query Params: acessibilidade req.query (Filtros, Ordenação, paginação)...
// Route Params: acessibilidade req.params (Identificar recurso na alteração, identificação)...
// Body: acessibilidade req.body (Dados para criação ou atualização de um registro)



app.listen(3333);

