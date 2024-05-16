'use server';

const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
    const server = express();
    server.use(bodyParser.json());
    server.use(express.static('public'));

    const pool = mysql.createPool({
        connectionLimit: 10,
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'blog',
        port: 3307,
    });

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error connecting to database:', err);
        } else {
            console.log('> Connected to database');
            connection.release();
        }
    });

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    const httpServer = server.listen(PORT, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${PORT}`);
    });

    httpServer.on('close', () => {
        pool.end((err) => {
            if (err) throw err;
            console.log('> Database connection closed');
        });
    });
});
