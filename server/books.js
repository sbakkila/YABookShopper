var express = require('express');
var app = express();
var Book = require('../models/book.js');

app.param('id', function(req, res, next, id) {
    Book.findById(Number(id))
        .then(book => {
            if(!book){
              res.sendStatus(404);
            } else {
              req.book = book;
              next();
            }
        })
        .catch(next);
})

app.get('/', (req, res, next) => {
    if (req.query.title) {
        Book.findAll({
                where: {
                    title: req.query.title
                }
            })
            .then(books => res.send(books))
    } else {
        Book.findAll()
            .then(books => res.send(books))
    }

})

app.post('/', (req, res, next) => {
    Book.create(req.body)
        .then((book) => {
            res.status(201);
            res.send(book);
        })
        .catch(next);
})

app.get('/:id', (req, res, next) => {
    if (!req.book) {
        res.sendStatus(404)
    } else {
        res.send(req.book)
    }

})

app.put('/:id', (req, res, next) => {
    req.book.update(req.body)
        .then((book) => {
            if (!book) {
                res.sendStatus(404)
            } else {
                res.send(book)
            }
        })
        .catch(next)
})

app.delete('/:id', (req, res, next) => {
    Book.destroy({
            where: {
                id: req.params.id
            }
        })
        .then((num) => {
            if (num) {
                res.sendStatus(204)
            } else {
                res.sendStatus(404)
            }
        })
        .catch(next);
})
