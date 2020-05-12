const express = require('express');
const server = express();
const knex = require('knex');
const knexfile = require('../knexfile');
const db = require('../data/dbConnection');

server.use(express.json());

server.get("/", (req,res) =>{
    db('cars').then(vehicles=>{
        res.status(200).json({data:vehicles})
    })
    .catch(err=>{
        res.status(500).json({message:err});
    })
})

server.post('/', validateForm, (req,res) =>{
    db('cars').insert(req.body)
    .then(newCar =>{
        console.log(newCar);
        db('cars').then(vehicles=>{
            res.status(200).json({data:vehicles})
        })
        .catch(err=>{
            res.status(500).json({message:err});
        })
    })
    .catch(err =>{
        res.status(500).json({message:err});
    })
})

server.get('/:id', (req,res) =>{

})

server.put('/:id', (req,res) =>{
    
})

server.delete('/:id', (req,res) =>{
    
})

function validateForm(req,res,next){
    const {make, model, milage}=req.body;
    if(make && model && milage){
        next();
    }
    else{
        res.status(404).json({error:"there needs to be a make, model, and milage entered in."})
    }
}

module.exports = server;