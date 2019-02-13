const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development)
const PORT = 9999;

server.use(express.json());

server.listen(PORT, ()=>{
    console.log(`On Port ${PORT}`)
})