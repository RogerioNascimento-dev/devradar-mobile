const express = require('express');
const app = express();
app.use(express.json());

// Principais métodos HTTP: GET, POST, PUT, UPDATE, DELETE
// Tipos de parâmetros:

// Query Params: acessibilidade req.query (Filtros, Ordenação, paginação)...
// Route Params: acessibilidade req.params (Identificar recurso na alteração, identificação)...
// Body: acessibilidade req.body (Dados para criação ou atualização de um registro)

app.post('/users', (req,res) =>{
    res.json(req.body);
});

app.listen(3333);

