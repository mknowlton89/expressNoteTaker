const path = require('path');
const notes = require('../data/notesData');

module.exports = (app) => {

    app.get('/api/notes', (req, res) => {
        res.json(notes);
    })

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, '../public/index.html'));
    // });
}