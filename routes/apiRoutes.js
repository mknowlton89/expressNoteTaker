const path = require('path');
const notes = require('../db/db.json');
const uniqid = require('uniqid');
// const notes = require('../data/notesData');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(notes);
    });

    app.post('/api/notes', (req, res) => {
        const note = req.body;

        note.id = uniqid('note-');

        notes.push(note);

        res.json(true);

    })
}