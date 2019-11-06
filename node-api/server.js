const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Iniciando o app  
const app = express(); 

//Permite que eu receba nas requisições objetos do tipo Json.
app.use(express.json());

//Configurando o cors na aplicação, dentro do paramentro do objeto cors podemos definir algum endereço específico
//Estando sem parametros e ele pode ser acessado de qualquer dominio.
app.use(cors());

// Iniciando o banco de dados
// nodeapi <-- seria o nome do database
mongoose.connect('mongodb://localhost:27017/nodeapi', {useUnifiedTopology: true, useNewUrlParser: true});
requireDir('./src/models/');

//Rotas
app.use('/api', require('./src/routes'));


app.listen(3001);