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
});

//get by id

server.get('/api/notes/:id', (req, res) =>{
    const {id} = req.params;
    db('notes').where('id', id)
    .then(note =>{
        if(note.length !==0){
            res
            .status(200)
            .json(note)
        } else {
            res
            .status(404)
            .json({error: 'The note with the specified id does not exist'})
        }
    })
    .catch(err =>{
        res
        .status(500)
        .json({error: 'The note could not be retrieved'})
    })
});
//post

server.post('/api/notes', (req, res) =>{
    const note=req.body;
    if(note.title && note.textBody){
        db('notes').insert(note)
        .then( newId =>{
            db(notes).where('id', newId)
            .then(note =>{
                res
                .status(201)
                .json(note)
            })
        })
        .catch(err =>{
            res
            .status(500)
            .json({error: 'The note could not be created'})
        })
    } else {
        res
        .status(400)
        .json({error: 'Missing parameters. Check for note title and body'})
    }
});

//delete

server.delete('/api/notes/:id', (req, res) =>{
    const {id} = req.params;
    db('notes').where('id', id).del()
    .then(count =>{
        if(count === 1){
            res
            .status(200)
            .json({message: `Note ${id} deleted`})
        } else {
            res
            .status(404)
            .json({message: 'The specified note could not be found'})
        }
    })
    .catch(err =>{
        res
        .status(500)
        .json({error: 'The note could not be removed'})
    })
});

//put


server.listen(PORT, ()=>{
    console.log(`On Port ${PORT}`)
})