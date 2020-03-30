const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
/* 
 Rota:  é o conjunto de recursos completos
 Recurso: '/users'
*/

/* 
Métodos HTTP: 

GET: Buscar uma informação no back-end
POST: Criar uma informação no back-end
PUT: Alterar uma informação no back-end
DELETE: Deletar uma informação no back-end
*/

/*
TIPOS DE PARÂMETROS:

* Query params: Parâmetros nomeados enviados na rota após a "?" (filtro, paginação)
Ex: https://localhost:3333/users/?name=Viviane
* Route params: Parâmetros utilizados para identifcar recursos
Ex: https://localhost:3333/users/:id - toda a resposta da rota será identificada como "id"
* Request body: Corpo da requisição, utilizado para criar ou alterar recursos - utilizado no método POST ou PUT
Ex: Utilizar no insominia o método post ou Put e escrever um JSON com o recurso criado ou alterado
const body = request.body;
*/

/* 
DIFERENÇAS ENTRE BANCOS DE DADOS:

SQL: MySQL, SQLite, POSTGreeSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB, etc

*/

/*
FAZER A COMUNICAÇÃO COM O DB: 

Instalando o Driver do SQL: Select * from users
Query Builder: table('users').select('*').where()

*/



