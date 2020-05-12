const express = require('express');
const server = express();
const knex = require('knex');
const knexfile = require('../knexfile');
const db = require('../data/dbConnection');
const {v4: uuid} = require('uuid');

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
    const newCar = req.body;
    newCar.VIN = uuid();
    db('cars').insert(newCar)
    .then(count =>{
        console.log(count);
        db('cars').then(vehicles=>{
            res.status(200).json({data:vehicles})
        })
        .catch(err=>{
            res.status(500).json({message:"Get cars error", err});
        })
    })
    .catch(err =>{
        res.status(500).json({message:"Insert new car error", err});
    })
})

server.get('/:id', validateID, (req,res) =>{

})

server.put('/:id', validateID, validateForm, (req,res) =>{
    
})

server.delete('/:id', validateID, (req,res) =>{
    
})

function validateID(req,res,next){
    const {id} = req.params;
    db('cars').where(id)
    .then(([theCar]) =>{
        req.user = theCar;
        if(theCar){
            next();
        }else{
            res.status(404).json({error:"that car with the id does not exist."});
        }

    })
}

function validateForm(req,res,next){
    const {make, model, mileage}=req.body;
    if(make && model && mileage){
        next();
    }
    else{
        res.status(404).json({error:"there needs to be a make, model, and milage entered in."})
    }
}

module.exports = server;