const express = require('express');
const server = express();
const knex = require('knex');
const dbConfig = require('./knexfile');
const cors = require('cors');

const db = knex(dbConfig.development)
const PORT = process.env.PORT || 9000;

server.use(express.json());
server.use(cors());


server.get('/api/catnotes', (req, res) =>{
    db('catNotes')
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


server.get('/api/catnotes/:id', (req, res) =>{
    const {id} = req.params;
    db('catNotes').where('id', id)
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


server.post('/api/catnotes', (req, res) =>{
    const note=req.body;
    if(note.title && note.textBody){
        db('catNotes').insert(note)
        .then( newId =>{
            db('catNotes').where('id', newId[0])
            .then(newNote =>{
                res
                .status(201)
                .json(newNote)
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


server.delete('/api/catnotes/:id', (req, res) =>{
    const {id} = req.params;
    db('catNotes').where('id', id).del()
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


server.put('/api/catnotes/:id', (req, res) =>{
    const {id} = req.params;
    const note = req.body;
    if(note.title && note.textBody){
        db('catNotes').where('id', id).update(note)
        .then(count =>{
            if(count ===1){
                db('notes').where('id', id)
                .then(updatedNote =>{
                    res
                    .status(201)
                    .json(updatedNote)
                })
            } else {
                res
                .status(404)
                .json({message: 'The specified note could not be found'})
            }
        })
        .catch(err =>{
            res
            .status(500)
            .json({error: "The note could not be updated"})
        })
    } else {
        res
        .status(400)
        .json({error: 'Missing parameters. Check for note title and body'})
    }
})

server.listen(PORT, ()=>{
    console.log(`On Port ${PORT}`)
})