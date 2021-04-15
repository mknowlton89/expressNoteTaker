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

        notes.splice(req.params.id, 1);

        res.json(notes);

    })
}