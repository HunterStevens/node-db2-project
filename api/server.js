const express = require('express');
const server = express();
const knex = require('knex');
const knexfile = require('../knexfile');
const db = require('../data/dbConnection');

server.use(express.json());

server.get("/", (req,res) =>{
    db('cars').then(vehicles=>{
        res.status(200).json({data:"The database for Cars."})
    })
    .catch(err=>{
        
    })

})

server.post('/', (req,res) =>{
    
})

server.get('/:id', (req,res) =>{

})

server.put('/:id', (req,res) =>{
    
})

server.delete('/:id', (req,res) =>{
    
})

module.exports = server;