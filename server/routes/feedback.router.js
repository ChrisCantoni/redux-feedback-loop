const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "feedback";`;
    pool.query(queryText)
    .then((result) => {
        console.log('GET /feedback successful');
        res.send(result.rows);
    }).catch((error) => {
        console.log('GET /feedback error', error);
        res.sendStatus(500);
    })
})

// POST
router.post('/', (req, res) => {
    console.log(req.body)
    let queryText = `
    INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);
    `
    pool.query(queryText, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then((result) => {
        console.log('Successful POST')
        res.sendStatus(201);
    }).catch((error) => {
        console.log('POST error', error)
        res.sendStatus(500);
    })
})

// PUT


// DELETE


module.exports = router;