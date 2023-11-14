const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    queryText = `SELECT * FROM "feedback" ORDER BY "id" DESC;`;
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
router.put('/:id', (req, res) => {
    let queryText = `
    UPDATE "feedback" SET "flagged" = NOT "flagged"
    WHERE "id" = $1;`;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.sendStatus(201);
    }).catch((error) => {
        console.log('Could not be flagged', error);
        res.sendStatus(500);
    })
})

// DELETE
router.delete('/:id', (req, res) => {
    let queryText = `
    DELETE FROM "feedback" WHERE "id" = $1;
    `;
    pool.query(queryText, [req.params.id])
    .then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.error('DELETE req failed', error);
        res.sendStatus(500);
    })
})

module.exports = router;