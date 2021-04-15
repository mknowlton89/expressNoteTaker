const path = require('path');
const notes = require('../db/db.json');
const uniqid = require('uniqid');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {
        const note = req.body;

        note.id = uniqid('note-');

        notes.push(note);

        res.json(true);

    });

    app.delete('/api/notes/:id', (req, res) => {
        // const noteToDel = req.params.id;

        // for (let i = 0; i < notes.length; i++) {
        //     if (notes[i].id === noteToDel) {
        //         index = i;
        //     }
        // }

        const index = notes.indexOf(req.params.id);

        notes.splice(index, 1);

        res.json(notes);

    })
}