import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */
const port = 2000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (req, res) => {
    // hard coding for simplicity, pretends this hits a real database
    res.json([
        { 'id': 1, 'firstName': 'bukunmi', 'lastName': 'smith', 'email': 'bob@gmail.com' },
        { 'id': 2, 'firstName': 'sola', 'lastName': 'michael', 'email': 'hellen@gmail.com' },
        { 'id': 3, 'firstName': 'bayo', 'lastName': 'Amos', 'email': 'davis@gmail.com' }
    ]);
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        open('localhost:' + port);
    }
});