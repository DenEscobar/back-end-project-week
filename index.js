const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development)
const PORT = 9999;

server.use(express.json());

//get

server.get('/api/notes', (req, res) =>{
    db('cohorts')
    .then(notes =>{
        res
        .status(200)
        .json(notes)
    })
    .catch(err =>{
        res
        .status(500)
        .json({error: 'Unable to get notes'})
    })
})

//get by id

//post

//delete

//put

server.listen(PORT, ()=>{
    console.log(`On Port ${PORT}`)
})